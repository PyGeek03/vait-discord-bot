import { Collection, User } from 'discord.js';
import { danhSomeone } from '.';

const replyMock = jest.fn(() => {});
describe('danhSomeone', () => {
  it('should hit all mentioned users with random damages except bot', () => {
    const mockUsers = new Collection<string, User>();
    mockUsers.set('0', { id: '1' } as User);
    mockUsers.set('1', { id: '3' } as User);
    mockUsers.set('2', { id: '4' } as User);
    mockUsers.set('3', { id: '0' } as User);
    const mockMsg: any = {
      content: '-hit',
      reply: replyMock,
      channel: { send: replyMock },
      mentions: { users: mockUsers },
      author: { id: '5' },
    };
    const mockBotId = '0';
    danhSomeone(mockMsg, mockBotId);
    expect(replyMock).toHaveBeenCalledTimes(4);
  });

  it('it should not hit yourself', () => {
    const mockUsers = new Collection<string, User>();
    mockUsers.set('0', { id: '1' } as User);

    const mockMsg: any = {
      content: '-hit',
      reply: replyMock,
      channel: { send: replyMock },
      mentions: { users: mockUsers },
      author: { id: '1' },
    };
    const mockBotId = '0';
    danhSomeone(mockMsg, mockBotId);
    expect(replyMock).toHaveBeenCalledTimes(1);
  });

  it('it should return if mentioned users is undefined', () => {
    const mockMsg: any = {
      content: '-hit',
      reply: replyMock,
      channel: { send: replyMock },
      mentions: { users: undefined },
      author: { id: '1' },
    };
    const mockBotId = '0';
    danhSomeone(mockMsg, mockBotId);
    expect(replyMock).not.toHaveBeenCalled();
  });

  it('it should return if no user is mentioned', () => {
    const mockMsg: any = {
      content: '-hit',
      reply: replyMock,
      channel: { send: replyMock },
      mentions: {
        users: { first: jest.fn(() => undefined) },
      },
      author: { id: '1' },
    };
    const mockBotId = '0';
    danhSomeone(mockMsg, mockBotId);
    expect(replyMock).not.toHaveBeenCalled();
  });

  it('should return if no user is mentioned', () => {
    const mockMsg: any = {
      content: '-hit',
      channel: { send: replyMock },
      reply: replyMock,
      author: { id: '1' },
    };
    const mockBotId = '0';
    danhSomeone(mockMsg, mockBotId);
    expect(replyMock).not.toHaveBeenCalled();
  });

  it('should do nothing if bot message has keywords', () => {
    const mockMsg: any = {
      content: '-hit',
      channel: { send: replyMock },
      reply: replyMock,
      author: { id: '0' },
    };
    const mockBotId = '0';
    danhSomeone(mockMsg, mockBotId);
    expect(replyMock).not.toHaveBeenCalled();
  });
});
