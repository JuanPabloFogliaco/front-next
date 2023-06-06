import { Title } from "./style";

interface ITitleComponent {
  title: string;
  primary?: boolean;
  secondary?: boolean;
  third?: boolean;
}

export default function TitleComponent({
  title,
  primary,
  secondary,
  third
}: ITitleComponent) {
  const validateType = () => {
    if (primary) return "primary";
    if (secondary) return "secondary";
    if (third) return "third";
  };

  return <Title type={validateType()}>{title}</Title>;
}
