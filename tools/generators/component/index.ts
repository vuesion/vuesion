import { folderExists } from '../utils';

export = {
  description: 'Add a single file component',
  prompts:     [
    {
      type:     'input',
      name:     'name',
      message:  'What should it be called?',
      validate: (value: string) => {
        if (!value || value.length === 0) {
          return 'name is required';
        }

        return folderExists(value) ? `folder already exists (${value})` : true;
      },
    },
    {
      type:    'confirm',
      name:    'storybook',
      default: true,
      message: 'Do you want a story book?',
    },
  ],
  actions:     (data: any) => {
    const path: string[] = data.name.split('/');

    data.componentName = path.pop();
    data.basePath = '../../src/app/' + path.join('/');

    const actions: any[] = [
      {
        type:         'add',
        path:         '{{basePath}}/{{properCase componentName}}/{{properCase componentName}}.vue',
        templateFile: './component/component.vue.hbs',
        abortOnFail:  true,
      },
      {
        type:         'add',
        path:         '{{basePath}}/{{properCase componentName}}/{{properCase componentName}}.spec.ts',
        templateFile: './component/component.spec.ts.hbs',
        abortOnFail:  true,
      },
    ];

    if (data.storybook) {
      actions.push({
                     type:         'add',
                     path:         '{{basePath}}/{{properCase componentName}}/{{properCase componentName}}.stories.ts',
                     templateFile: './component/component.stories.ts.hbs',
                     abortOnFail:  true,
                   });
    }

    return actions;
  },
};
