import { runProcess } from './utils';

const versionArg = process.argv[2];

const run = async () => {
  let npmVersion = 'major';

  if (versionArg === '--minor') {
    npmVersion = 'minor';
  } else if (versionArg === '--patch') {
    npmVersion = 'patch';
  }

  console.log(`Releasing new ${npmVersion} version...`);

  try {
    console.log('Generating CHANGELOG.md...');

    await runProcess('changelog', [versionArg]);

    console.log('Adding CHANGELOG.md...');

    await runProcess('git', ['add', 'CHANGELOG.md']);

    console.log('Running pre-commit hooks...');

    await runProcess('git', ['commit', '-m', 'chore: update changelog']);

    console.log('Committing changes...');

    console.log(`Releasing npm ${npmVersion} version...`);

    await runProcess('npm', ['version', npmVersion]);

    console.log('Pushing changes...');

    await runProcess('git', ['push', 'origin']);

    console.log('Pushing tags...');

    await runProcess('git', ['push', 'origin', '--tags']);

    console.log('');

    console.log('New version released.');
  } catch (e) {
    console.error(e);
  }
};

run().catch((e) => console.log(e));
