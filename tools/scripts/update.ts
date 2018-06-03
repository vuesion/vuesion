import * as winston             from 'winston';
import axios, { AxiosResponse } from 'axios';
import * as fs                  from 'fs';
import * as path                from 'path';
import * as https               from 'https';

interface IFile {
  filename: string;
  status: string;
}

interface IConfig {
  currentTag: string;
}

const Logger: winston.LoggerInstance = new winston.Logger({
                                                            transports:  [
                                                              new winston.transports.Console({
                                                                                               level:            'debug',
                                                                                               handleExceptions: true,
                                                                                               json:             false,
                                                                                               colorize:         true,
                                                                                             }),
                                                            ],
                                                            exitOnError: false,
                                                          });
const vueStarterRepo: string = 'https://api.github.com/repos/devCrossNet/vue-starter';
const configPath: string = path.join(path.resolve(__dirname), '.update.json');

if (fs.existsSync(configPath) === false) {
  fs.writeFileSync(configPath, JSON.stringify({ currentTag: 'v1.0.0' }));
}

const updateConfig: IConfig = JSON.parse(fs.readFileSync(configPath).toString());

async function update() {
  const tagsResponse: AxiosResponse<any> = await axios.get(`${vueStarterRepo}/tags`);
  const latestTag: string = tagsResponse.data[0].name;
  const currentTag: string = updateConfig.currentTag;

  if (latestTag === currentTag) {
    Logger.info('your copy of the vue-starter is already up to date!');
    return;
  }

  Logger.info(`update from version: ${currentTag} to version: ${latestTag}`);
  Logger.info(`==============================================`);

  const diffResponse: AxiosResponse<any> = await axios.get(`${vueStarterRepo}/compare/${currentTag}...${latestTag}`);
  const diffFiles: IFile[] = diffResponse.data.files;

  diffFiles.forEach((diffFile: IFile) => {
    const dest: string = path.join(path.resolve(__dirname), '..', '..', diffFile.filename);
    const url: string = `https://raw.githubusercontent.com/devCrossNet/vue-starter/feat/runtime-config/${diffFile.filename}`;

    if (diffFile.status === 'deleted') {
      fs.unlinkSync(dest);
      Logger.info(`${diffFile.status}: ${dest}`);
    } else {
      const file = fs.createWriteStream(dest);

      https.get(url, (response: any) => {
        response.pipe(file);

        file.on('finish', () => {
          file.close();
          Logger.info(`${diffFile.status}: ${dest}`);
        });
      }).on('error', () => {
        fs.unlinkSync(dest);
      });
    }
  });

  updateConfig.currentTag = latestTag;

  fs.writeFileSync(configPath, JSON.stringify(updateConfig));
}

update();
