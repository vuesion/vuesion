export interface IToast {
  id?: number | string;
  title: string;
  text: string;
  type?: 'primary' | 'warning' | 'danger';
  displayTimeInMs?: number;
}
