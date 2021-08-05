import { storiesOf } from '@storybook/vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import { i18n } from '@/test/i18n';
import Testimonials from './Testimonials.vue';

const story = storiesOf('Marketing|Testimonials', module) as any;

story.add(
  'Default',
  () => ({
    i18n,
    components: { ComponentDocs, Testimonials },
    data() {
      return {
        stargazers: [
          {
            login: 'xar',
            avatar_url: 'https://avatars.githubusercontent.com/u/184865?v=4',
          },
          {
            login: 'designerkamaldesignerkamal',
            avatar_url: 'https://avatars.githubusercontent.com/u/237070?v=4',
          },
          {
            login: 'martincarlin87',
            avatar_url: 'https://avatars.githubusercontent.com/u/1721925?v=4',
          },
          {
            login: 'smoothdvd',
            avatar_url: 'https://avatars.githubusercontent.com/u/22420?v=4',
          },
          {
            login: 'xar2',
            avatar_url: 'https://avatars.githubusercontent.com/u/184865?v=4',
          },
          {
            login: 'designerkamal2',
            avatar_url: 'https://avatars.githubusercontent.com/u/237070?v=4',
          },
          {
            login: 'martincarlin872',
            avatar_url: 'https://avatars.githubusercontent.com/u/1721925?v=4',
          },
          {
            login: 'smoothdvd2',
            avatar_url: 'https://avatars.githubusercontent.com/u/22420?v=4',
          },
          {
            login: 'xar3',
            avatar_url: 'https://avatars.githubusercontent.com/u/184865?v=4',
          },
          {
            login: 'designerkamal3',
            avatar_url: 'https://avatars.githubusercontent.com/u/237070?v=4',
          },
          {
            login: 'martincarlin873',
            avatar_url: 'https://avatars.githubusercontent.com/u/1721925?v=4',
          },
          {
            login: 'smoothdvd3',
            avatar_url: 'https://avatars.githubusercontent.com/u/22420?v=4',
          },
          {
            login: 'xar4',
            avatar_url: 'https://avatars.githubusercontent.com/u/184865?v=4',
          },
          {
            login: 'designerkamal4',
            avatar_url: 'https://avatars.githubusercontent.com/u/237070?v=4',
          },
          {
            login: 'martincarlin874',
            avatar_url: 'https://avatars.githubusercontent.com/u/1721925?v=4',
          },
          {
            login: 'smoothdvd4',
            avatar_url: 'https://avatars.githubusercontent.com/u/22420?v=4',
          },
          {
            login: 'xar5',
            avatar_url: 'https://avatars.githubusercontent.com/u/184865?v=4',
          },
          {
            login: 'designerkamal5',
            avatar_url: 'https://avatars.githubusercontent.com/u/237070?v=4',
          },
          {
            login: 'martincarlin875',
            avatar_url: 'https://avatars.githubusercontent.com/u/1721925?v=4',
          },
          {
            login: 'smoothdvd5',
            avatar_url: 'https://avatars.githubusercontent.com/u/22420?v=4',
          },
          {
            login: 'xar6',
            avatar_url: 'https://avatars.githubusercontent.com/u/184865?v=4',
          },
          {
            login: 'designerkamal6',
            avatar_url: 'https://avatars.githubusercontent.com/u/237070?v=4',
          },
          {
            login: 'martincarlin876',
            avatar_url: 'https://avatars.githubusercontent.com/u/1721925?v=4',
          },
          {
            login: 'smoothdvd6',
            avatar_url: 'https://avatars.githubusercontent.com/u/22420?v=4',
          },
          {
            login: 'xar7',
            avatar_url: 'https://avatars.githubusercontent.com/u/184865?v=4',
          },
          {
            login: 'designerkamal7',
            avatar_url: 'https://avatars.githubusercontent.com/u/237070?v=4',
          },
          {
            login: 'martincarlin877',
            avatar_url: 'https://avatars.githubusercontent.com/u/1721925?v=4',
          },
          {
            login: 'smoothdvd7',
            avatar_url: 'https://avatars.githubusercontent.com/u/22420?v=4',
          },
          {
            login: 'xar8',
            avatar_url: 'https://avatars.githubusercontent.com/u/184865?v=4',
          },
          {
            login: 'designerkamal8',
            avatar_url: 'https://avatars.githubusercontent.com/u/237070?v=4',
          },
          {
            login: 'martincarlin878',
            avatar_url: 'https://avatars.githubusercontent.com/u/1721925?v=4',
          },
          {
            login: 'smoothdvd8',
            avatar_url: 'https://avatars.githubusercontent.com/u/22420?v=4',
          },
        ],
      };
    },
    template: `<component-docs
      component-name="Testimonials"
      usage="Usage support value proposition with people that trust the product."
      story="show 16 random stargazers from github and change them every 10 seconds."
    >
      <testimonials stargazers-count="2328" :stargazers="stargazers" />
    </component-docs>`,
  }),
  {
    info: {
      components: { Testimonials },
    },
  },
);
