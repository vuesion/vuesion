import { EventBus } from '@/services/EventBus';
import { INotification } from './INotification';

export const addNotification = (n: INotification): void => {
  EventBus.$emit('notification.add', n);
};
