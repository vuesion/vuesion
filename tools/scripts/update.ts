/* tslint:disable:no-console */
import axios, { AxiosResponse } from 'axios';
import * as fs                  from 'fs';
import * as path                from 'path';
import * as https               from 'https';

interface IFile {
  filename: string;
  status: string;
  previous_filename: string;
}

interface IConfig {
  currentTag: string;
}

const vueStarterRepo: string = 'https://api.github.com/repos/devCrossNet/vue-starter';
const configPath: string = path.join(path.resolve(__dirname), '.update.json');

if (fs.existsSync(configPath) === false) {
  fs.writeFileSync(configPath, JSON.stringify({ currentTag: 'v1.0.0' }));
}

const updateConfig: IConfig = JSON.parse(fs.readFileSync(configPath).toString());
const deleteFile = (status: string, filePath: string) => {
  try {
    fs.unlinkSync(filePath);
    console.info(`${status}: ${filePath}`);
  } catch (e) {
    console.error(e.message);
  }
};
const renameFile = (status: string, oldPath: string, newPath: string) => {
  try {
    fs.renameSync(oldPath, newPath);
    console.info(`${status}: ${oldPath} --> ${newPath}`);
  } catch (e) {
    console.error(e.message);
  }
};
const ensureDirectoryExistence = (filePath) => {
  const dirname = path.dirname(filePath);

  if (fs.existsSync(dirname)) {
    return true;
  }

  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
};
const downloadFile = (status: string, filePath: string, url: string) => {
  ensureDirectoryExistence(filePath);
  const file = fs.createWriteStream(filePath);

  https.get(url, (response: any) => {
    response.pipe(file);

    file.on('finish', () => {
      file.close();
      console.info(`${status}: ${filePath}`);
    });
  }).on('error', () => {
    deleteFile(status, filePath);
  });
};

async function update() {
  const tagsResponse: AxiosResponse<any> = await axios.get(`${vueStarterRepo}/tags`);
  const latestTag: string = tagsResponse.data[0].name;
  const currentTag: string = updateConfig.currentTag;

  if (latestTag === currentTag) {
    console.info('your copy of the vue-starter is already up to date!');
    return;
  }

  console.info(`update from version: ${currentTag} to version: ${latestTag}`);
  console.info(`==============================================`);

  const diffResponse: AxiosResponse<any> = await axios.get(`${vueStarterRepo}/compare/${currentTag}...${latestTag}`);
  const diffFiles: IFile[] = diffResponse.data.files;

  diffFiles.forEach((diffFile: IFile) => {
    const dest: string = path.join(path.resolve(__dirname), '..', '..', diffFile.filename);
    const url: string = `https://raw.githubusercontent.com/devCrossNet/vue-starter/master/${diffFile.filename}`;

    if (diffFile.status === 'removed') {
      deleteFile(diffFile.status, dest);
    } else if (diffFile.status === 'renamed') {
      renameFile(
        diffFile.status,
        path.join(path.resolve(__dirname), '..', '..', diffFile.previous_filename),
        dest);
    } else {
      downloadFile(diffFile.status, dest, url);
    }
  });

  updateConfig.currentTag = latestTag;

  fs.writeFileSync(configPath, JSON.stringify(updateConfig));
}

update();
