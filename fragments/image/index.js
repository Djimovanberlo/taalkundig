import Image from "next/image";

const ImageComponent = ({
  className = "",
  alt = "",
  src = "",
  objectFit = "cover",
  objectPosition = "top",
  width,
  height,
  withAspectRatio = false,
}) => {
  const aspectRatio = withAspectRatio ? width / height : undefined;

  return (
    <div style={{ aspectRatio }} className={`${className} imageWrapper`}>
      <Image src={src} fill alt={alt} style={{ objectFit, objectPosition }} />
    </div>
  );
};

export default ImageComponent;
