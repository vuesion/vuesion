import { defineEventHandler } from 'h3';
import { getIntInRange } from '~/components/utils';

export default defineEventHandler(async () => {
  const authorization =
    'Basic ' + Buffer.from(`${process.env.GITHUB_USER}:${process.env.GITHUB_TOKEN}`, 'binary').toString('base64');

  try {
    const stargazerCountRes = await fetch('https://api.github.com/repos/vuesion/vuesion', {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'request',
        Authorization: authorization,
      },
    });
    const stargazerCountResData = await stargazerCountRes.json();
    const stargazersCount = parseInt(stargazerCountResData.stargazers_count, 10);
    const stargazersRes = await fetch(
      `https://api.github.com/repos/vuesion/vuesion/stargazers?per_page=150&page=${getIntInRange(
        1,
        Math.floor(stargazersCount / 100),
      )}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'request',
          Authorization: authorization,
        },
      },
    );
    const stargazersResData = await stargazersRes.json();

    return {
      stargazersCount,
      stargazers: stargazersResData,
    };
  } catch (e) {
    console.log(e); // eslint-disable-line
    return {
      stargazersCount: 0,
      stargazers: [],
    };
  }
});
