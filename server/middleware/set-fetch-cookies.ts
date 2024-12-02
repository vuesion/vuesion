import { defineEventHandler, getHeader } from 'h3';
import { setServerCookies } from '~/server/utils/fetchWithCookies';

export default defineEventHandler((event) => {
  setServerCookies(getHeader(event, 'cookie'));
});
