import request from 'axios';

request.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

export const getHome = ({ commit, state }: any) => {
  return request.get('posts').then((response: any) => {
    commit('HOME', response.data);
  });
};
