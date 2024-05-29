import { defineEventHandler, getHeader } from 'h3';
import { setServerCookies } from '~/utils/fetchWithCookies';

export default defineEventHandler((event) => {
  setServerCookies(getHeader(event, 'cookie'));
});
