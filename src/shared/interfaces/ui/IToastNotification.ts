export interface IToastNotification {
  id?: number | string;
  title: string;
  text: string;
  type?: 'info' | 'warning' | 'danger' | 'success';
  displayTimeInMs?: number;
}
