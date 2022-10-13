import fetch from 'node-fetch';
import { getRandomIntInclusive } from '../../utils';

const XKCD_API_URL = 'https://xkcd.com/info.0.json';

export interface Comic {
  title: string;
  img: string;
}

const fetchTodayNumber = async (): Promise<number | undefined> => {
  try {
    const response = await fetch(XKCD_API_URL); // fetch today's comic number
    const body = await response.json();

    if (body) {
      return Number(body.num);
    }
  } catch (error) {
    console.error('THERE IS AN ERROR DOWNLOADING COMIC', error);
  }
};

export const fetchRandomComic = async (): Promise<Comic | undefined> => {
  try {
    const todayNumber = await fetchTodayNumber();
    if (!todayNumber) {
      return undefined;
    }
    const randomComicNumber = getRandomIntInclusive(1, todayNumber);
    const comicURL = `https://xkcd.com/${randomComicNumber}/info.0.json`;
    const response = await fetch(comicURL); // fetch today's comic number
    const body = await response.json();

    if (body) {
      return {
        img: body.img,
        title: body.title,
      };
    }
  } catch (error) {
    console.error('THERE IS AN ERROR DOWNLOADING COMIC', error);
  }
};
