import mitt from 'mitt';

export const EventBus = mitt<{ [key: string]: any }>();
