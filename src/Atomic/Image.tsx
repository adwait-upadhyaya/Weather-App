import { IImage } from "../interface/IImage";

const Image: React.FC<IImage> = (props: IImage) => {
  const { src, height = "50px", width = "50px", alt = "image" } = props;
  return (
    <img src={src} height={`${height}px`} width={`${width}px`} alt={alt}></img>
  );
};

export default Image;
