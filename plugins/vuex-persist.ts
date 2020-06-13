import VuexPersistence from 'vuex-persist';
import { Plugin } from '@nuxt/types';

const vuexPersistencePlugin: Plugin = ({ store }) => {
  new VuexPersistence({
    /* your options */
  }).plugin(store);
};

export default vuexPersistencePlugin;
