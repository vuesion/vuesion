import type { IToastNotification } from '#shared/interfaces/ui/IToastNotification';
import { EventBus } from '@/services/EventBus';

export const emitToastNotification = (n: IToastNotification): void => {
  EventBus.emit('toast.add', n);
};
