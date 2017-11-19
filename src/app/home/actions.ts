import axios from 'axios';

export const getHome = ({ commit, state }: any) => {
  return axios.get('https://jsonplaceholder.typicode.com/posts').then((response: any) => {
    commit('HOME', response.data);
  });
};
