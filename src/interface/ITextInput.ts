export interface ITextInput {
  placeholder: string;
  id: string;
  className?: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value: string;
}
