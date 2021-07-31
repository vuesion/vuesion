export interface IToast {
  id?: number | string;
  title: string;
  text: string;
  type?: 'info' | 'warning' | 'danger';
  displayTimeInMs?: number;
}
