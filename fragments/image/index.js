import Image from "next/image";

const ImageComponent = ({
  className = "",
  alt = "",
  src = "",
  objectFit = "cover",
  objectPosition = "top",
  width,
  height,
  fill = false,
}) => {
  return (
    <div className={`${className} imageWrapper`}>
      <Image
        src={src}
        fill
        alt={alt}
        // width={width}
        // height={height}
        style={{ objectFit, objectPosition }}
      />
    </div>
  );
};

export default ImageComponent;
