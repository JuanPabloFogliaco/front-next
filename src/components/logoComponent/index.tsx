import Image from "next/image";

interface ILogoComponent {
  url: string;
  width: number;
  height: number;
}

export default function LogoComponent({ url, width, height }: ILogoComponent) {
  return (
    <Image
      width={width}
      height={height}
      alt="Logo"
      src={url}
      style={{ zIndex: 1 }}
    />
  );
}
