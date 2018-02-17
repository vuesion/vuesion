export interface IFormElement {
  type: string;
  required?: boolean;
  inputType?: string;
  label?: string;
  model: string;
  value?: any;
  invalidText?: string;

  isValid?(value: string): boolean;
}

export interface IFormSchema {
  elements: IFormElement[];
  name?: string;
  id?: string;
  submitText?: string;
  cancellationText?: string;
  title?: string;
  subtitle?: string;
}
