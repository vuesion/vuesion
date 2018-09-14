# Use a 3rd party UI library

## Vuetify

### Installation
Before we start please install vuetify and the webpack css-loader by running `npm install vuetify --save --save-exact && npm install --save-dev --save-exact css-loader` and follow the [Clean-Up-Guide](/guide/clean-up.md).

### Configure Webpack

`./config/webpack.base.config.js`:
```js
...

  resolve: {
    // Modified
    extensions: ['.ts', '.js', '.vue', '.json', '.node', '.css', '.scss'],
    ...
  },

...

      {
        test:   /\.css$/,
        loader: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        ...
      }
      
...

```

`./config/webpack.server.config.js`:
```js
...

  externals: [
    // Modified
    nodeExternals({
                    whitelist: ['webpack/hot/poll?1000', /\.css$/, /vuetify/],
                  }),
  ],

...
```

`./config/webpack.isomorphic.config.js`:
```js
...

  externals: [
    // Modified
    nodeExternals({ whitelist: [/\.css$/, /vuetify/] }),
  ],

...
```

### Register vuetify

In order to use the components you have to register vuetify in `./src/app.ts`

```js
...

// NEW
import Vuetify         from 'vuetify';
Vue.use(Vuetify);

...
```

### Implement basic vuetify layout

To test if everything works - we get rid of everything in the file `./src/app/app/App/App.vue` and replace it with a basic vuetify layout:

```js
<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer
        :clipped="$vuetify.breakpoint.lgAndUp"
        v-model="drawer"
        fixed
        app
      >
        <v-list dense>
          <template v-for="item in items">
            <v-layout
              v-if="item.heading"
              :key="item.heading"
              row
              align-center
            >
              <v-flex xs6>
                <v-subheader v-if="item.heading">
                  {{ item.heading }}
                </v-subheader>
              </v-flex>
              <v-flex xs6 class="text-xs-center">
                <a href="#!" class="body-2 black--text">EDIT</a>
              </v-flex>
            </v-layout>
            <v-list-group
              v-else-if="item.children"
              v-model="item.model"
              :key="item.text"
              :prepend-icon="item.model ? item.icon : item['icon-alt']"
              append-icon=""
            >
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ item.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile
                v-for="(child, i) in item.children"
                :key="i"
                @click=""
              >
                <v-list-tile-action v-if="child.icon">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ child.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
            <v-list-tile v-else :key="item.text" @click="">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        color="blue darken-3"
        dark
        app
        fixed
      >
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <span class="hidden-sm-and-down">Google Contacts</span>
        </v-toolbar-title>
        <v-text-field
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="search"
          label="Search"
          class="hidden-sm-and-down"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>
        <v-btn icon large>
          <v-avatar size="32px" tile>
            <img
              src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
              alt="Vuetify"
            >
          </v-avatar>
        </v-btn>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <v-tooltip right>
              <v-btn
                slot="activator"
                :href="source"
                icon
                large
                target="_blank"
              >
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <v-btn slot="activator" icon large href="https://codepen.io/johnjleider/pen/EQOYVV" target="_blank">
                <v-icon large>mdi-codepen</v-icon>
              </v-btn>
              <span>Codepen</span>
            </v-tooltip>
          </v-layout>
        </v-container>
      </v-content>
      <v-btn
        fab
        bottom
        right
        color="pink"
        dark
        fixed
        @click="dialog = !dialog"
      >
        <v-icon>add</v-icon>
      </v-btn>
      <v-dialog v-model="dialog" width="800px">
        <v-card>
          <v-card-title
            class="grey lighten-4 py-4 title"
          >
            Create contact
          </v-card-title>
          <v-container grid-list-sm class="pa-4">
            <v-layout row wrap>
              <v-flex xs12 align-center justify-space-between>
                <v-layout align-center>
                  <v-avatar size="40px" class="mr-3">
                    <img
                      src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                      alt=""
                    >
                  </v-avatar>
                  <v-text-field
                    placeholder="Name"
                  ></v-text-field>
                </v-layout>
              </v-flex>
              <v-flex xs6>
                <v-text-field
                  prepend-icon="business"
                  placeholder="Company"
                ></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-text-field
                  placeholder="Job title"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  prepend-icon="mail"
                  placeholder="Email"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  type="tel"
                  prepend-icon="phone"
                  placeholder="(000) 000 - 0000"
                  mask="phone"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  prepend-icon="notes"
                  placeholder="Notes"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-btn flat color="primary">More</v-btn>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
            <v-btn flat @click="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app>
  </div>
</template>

<script lang="ts">
  export default {
    data:  () => ({
      drawer: true,
      items:  [
        { icon: 'trending_up', text: 'Most Popular' },
        { icon: 'subscriptions', text: 'Subscriptions' },
        { icon: 'history', text: 'History' },
        { icon: 'featured_play_list', text: 'Playlists' },
        { icon: 'watch_later', text: 'Watch Later' },
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' },
      ],
    }),
    props: {
      source: String,
      dialog: Object,
    },
  };
</script>

<style lang="css">
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
  @import "../../../../node_modules/vuetify/dist/vuetify.css";
</style>
```

Have fun using vuetify!

## Vue-components based on jQuery plugins

vue-components based on jQuery plugins use the window object and other browser features,
this does not play well together with server-side-rendering because on the
server-side you don't have these features.

In order to use this kind of 3rd party UI libraries we have to differentiate **when** we load these components and render them:

```js
const VJstree = CLIENT ? require('vue-jstree').default : null;

...

    components: {
      VJstree,
      ...
    }

...

``` 

::: warning 
We do not recommend using these kind of components because they lead to a re-rendering of the client-side app because
the resulting HTML is different from the server-side rendered HTML.
:::
