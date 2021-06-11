import { ClientUser } from 'discord.js';
import { CommandConfig } from './utils/messageProcessor';
import ask8Ball from './commands/8ball';
import danhSomeone from './commands/danhSomeone';
import mockSomeone from './commands/mockSomeone';
import { giveRep, checkReputation } from './commands/reputation';
import getQuoteOfTheDay from './commands/quoteOfTheDay';
import animatedEmoji from './commands/animatedEmoji';
import embedLink from './commands/embedLink';
import createPoll from './commands/poll';
import cowsay from './commands/cowsay';
import weather from './commands/weather';
import insult from './commands/insult';

export const getConfigs = (botUser: ClientUser): CommandConfig => ({
  prefixedCommands: {
    prefix: '-',
    commands: [
      { matcher: 'rep', fn: checkReputation },
      { matcher: 'giverep', fn: giveRep },
      { matcher: 'gr', fn: giveRep },
      { matcher: '8ball', fn: ask8Ball },
      { matcher: 'mock', fn: mockSomeone },
      {
        matcher: 'hit',
        fn: (message) => danhSomeone(message, botUser.id),
      },
      { matcher: 'qotd', fn: getQuoteOfTheDay },
      { matcher: 'poll', fn: createPoll },
      { matcher: 'cowsay', fn: cowsay },
      { matcher: 'weather', fn: weather },
      { matcher: 'insult', fn: insult },
    ],
  },
  keywordMatchCommands: [
    {
      matchers: ['thank', 'thanks', 'cảm ơn', 'cám ơn'],
      fn: giveRep,
    },
  ],
  emojiMatchCommand: {
    matcher: ':.+:',
    fn: animatedEmoji,
  },
  linkMatchCommand: {
    fn: embedLink,
  },
});
