interface ILogoComponent {
  url: string;
  width: number;
  height: number;
}

export default function LogoComponent({ url, width, height }: ILogoComponent) {
  return <img width={width} height={height} alt="Logo" src={url} />;
}
