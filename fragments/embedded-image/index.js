import ImageComponent from "@/fragments/image";
import RichTextRenderer from "@/services/richtext";

const EmbeddedImage = ({ image, caption }) => (
  <div className="embeddedImage">
    <ImageComponent
      className="richtextImage"
      objectFit="contain"
      withAspectRatio
      src={image.url}
      width={image.width ?? 11}
      height={image.height ?? 11}
    />
    <RichTextRenderer richText={caption} className="embeddedImage__richtext" />
  </div>
);

export default EmbeddedImage;
