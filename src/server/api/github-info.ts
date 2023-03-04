import { getIntInRange } from '~/components/utils';

export default defineEventHandler(async () => {
  const authorization =
    'Basic ' + Buffer.from(`${process.env.GITHUB_USER}:${process.env.GITHUB_TOKEN}`, 'binary').toString('base64');
  let stargazersCount = 0;
  let stargazers: Array<any> = [];

  const fetchStargazerCount = async () => {
    const stargazerCountRes = await fetch('https://api.github.com/repos/vuesion/vuesion', {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'request',
        Authorization: authorization,
      },
    });

    if (!stargazerCountRes.ok) {
      throw new Error('Github API returned status code: ' + stargazerCountRes.status);
    }

    const stargazerCountResData = await stargazerCountRes.json();
    stargazersCount = parseInt(stargazerCountResData.stargazers_count, 10);
  };
  const fetchStargazers = async () => {
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

    if (!stargazersRes.ok) {
      throw new Error('Github API returned status code: ' + stargazersRes.status);
    }

    stargazers = await stargazersRes.json();
  };

  try {
    await fetchStargazerCount();
    await fetchStargazers();
  } catch (e) {
    console.log(e); // eslint-disable-line
  }

  return {
    stargazersCount,
    stargazers,
  };
});
