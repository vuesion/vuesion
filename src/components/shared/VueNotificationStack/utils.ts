import { EventBus } from '@/components/services/EventBus';

export interface INotification {
  id?: number;
  title: string;
  text: string;
  type?: string;
}

export const addNotification = (n: INotification): void => {
  EventBus.$emit('notification.add', n);
};
