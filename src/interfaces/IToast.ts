export interface IToast {
  id?: number | string;
  title: string;
  text: string;
  type?: 'info' | 'warning' | 'danger' | 'success';
  displayTimeInMs?: number;
}
