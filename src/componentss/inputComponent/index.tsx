import { Input } from "./style";

interface IInputComponent {
  handleChange: (e: any) => void;
  value: string;
  type: string;
}

export default function InputComponent({
  handleChange,
  value,
  type,
}: IInputComponent) {
  return (
    <Input
      type={type}
      id="input"
      value={value}
      onChange={(e) => handleChange(e)}
    />
  );
}
