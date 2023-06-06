import { Button } from "./style";

interface IButtonComponent {
  onClick: (e: any) => void;
  title: string;
}

export default function ButtonComponent({ onClick, title }: IButtonComponent) {
  return <Button onClick={(e) => onClick(e)}>{title}</Button>;
}
