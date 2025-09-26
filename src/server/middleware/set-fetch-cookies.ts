import { defineEventHandler, getHeader } from 'h3';
import { setServerCookies } from '~/server/utils/set-server-cookies';

export default defineEventHandler((event) => {
  setServerCookies(getHeader(event, 'cookie'));
});
