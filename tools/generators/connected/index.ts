import { folderExists } from '../utils';

export = {
  description: 'Add a VueX connected component',
  prompts:     [
    {
      type:     'input',
      name:     'name',
      message:  'What should it be called?',
      validate: (value: string) => {
        if (!value || value.length === 0) {
          return 'name is required';
        }

        if (value.indexOf('/') === -1) {
          return 'a connected component has to live in a module';
        }

        return folderExists(value) ? `folder already exists (${value})` : true;
      },
    },
  ],
  actions:     (data: any) => {
    const path: string[] = data.name.split('/');

    data.componentName = path.pop();
    data.moduleName = path.pop();
    data.basePath = '../../src/app/' + path.join('/');

    return [
      {
        type:         'add',
        path:         '{{basePath}}/{{camelCase moduleName}}/{{properCase componentName}}/{{properCase componentName}}.vue',
        templateFile: './connected/connected.vue.hbs',
        abortOnFail:  true,
      },
      {
        type:         'add',
        path:         '{{basePath}}/{{camelCase moduleName}}/{{properCase componentName}}/{{properCase componentName}}.spec.ts',
        templateFile: './connected/connected.spec.ts.hbs',
        abortOnFail:  true,
      },
    ];
  },
};
