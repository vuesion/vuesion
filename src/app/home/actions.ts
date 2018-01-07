import axios from 'axios';

export const getHome = ({ commit, state }: any) => {
  if (state.home.length > 0) {
    return commit('HOME', state.home);
  }

  return axios.get('https://jsonplaceholder.typicode.com/posts').then((response: any) => {
    commit('HOME', response.data);
  });
};
