import { Command } from './command';
import allCap from './allCap';
import ask8ball from './8ball';
import cowsayCommand from './cowsay';
import danhCommand from './danhSomeone';
import insultCommand from './insult';
import mockCommand from './mockSomeone';
import poll from './poll';
import quoteOfTheDay from './quoteOfTheDay';
import reputation from './reputation';
import weatherCommand from './weather';
import getdisclaimer from './disclaimer';
import referral from './referral';
import roles from './roles';
import playPowerball from './powerball';
import xkcd from './xkcd';

export const commandList: Command[] = [
  allCap,
  ask8ball,
  cowsayCommand,
  danhCommand,
  insultCommand,
  mockCommand,
  poll,
  playPowerball,
  quoteOfTheDay,
  reputation,
  weatherCommand,
  getdisclaimer,
  referral,
  roles,
  xkcd,
];

export * from './reputation';
