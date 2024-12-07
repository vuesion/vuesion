import { useCompression } from 'h3-compression';

export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook('render:response', async (response, { event }) => {
    if (!response.headers?.['content-type']?.startsWith('text/html')) return;

    await useCompression(event, response);
  });
});
