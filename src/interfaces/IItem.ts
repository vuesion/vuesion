export interface IItem {
  label: string;
  value: any;
  description?: string | null;
  leadingIcon?: string | null;
  trailingIcon?: string | null;
  disabled?: boolean | null;
}
