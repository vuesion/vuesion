import { INotification } from './INotification';
import { EventBus } from '@/services/EventBus';

export const addNotification = (n: INotification): void => {
  EventBus.$emit('notification.add', n);
};
