import type { IToastNotification } from '#shared/interfaces/IToastNotification';
import { EventBus } from '@/services/EventBus';

export const emitToastNotification = (n: IToastNotification): void => {
  EventBus.emit('toast.add', n);
};
