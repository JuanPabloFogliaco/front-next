import { ErrorTitle } from "./style";

interface IErrorComponent {
  title: any;
}

export default function ErrorComponent({ title }: IErrorComponent) {
  console.log("ERROR", title);
  return <ErrorTitle>{title?.response?.data?.error}</ErrorTitle>;
}
