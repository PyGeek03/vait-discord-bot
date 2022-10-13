import {
  ChatInputCommandInteraction,
  EmbedBuilder,
  SlashCommandBuilder,
} from 'discord.js';
import { Command } from '../command';
import { fetchRandomComic } from './fetchComic';

const data = new SlashCommandBuilder()
  .setName('xkcd')
  .setDescription('Get a random xkcd');

export const getXKCD = async (interaction: ChatInputCommandInteraction) => {
  await interaction.deferReply();

  const comic = await fetchRandomComic();
  if (!comic) {
    await interaction.editReply('Error getting comic');
    return;
  }

  const embed = new EmbedBuilder({
    color: 0x0072a8,
    title: comic.title,
    footer: {
      text: `Comics by xkcd.com`,
    },
  }).setImage(comic.img);

  await interaction.editReply({ embeds: [embed] });
};

const command: Command = {
  data,
  execute: getXKCD,
};

export default command;
