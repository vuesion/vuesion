import type { Icon } from '~/components/icon-options';

export interface IItem<T = any> {
  [key: string]: any;
  label: string;
  value: T;
  description?: string | null;
  leadingIcon?: Icon | null;
  trailingIcon?: Icon | null;
  disabled?: boolean | null;
}
