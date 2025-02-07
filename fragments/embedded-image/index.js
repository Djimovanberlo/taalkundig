import ImageComponent from "@/fragments/image";
import RichTextRenderer from "@/services/richtext";

const EmbeddedImage = ({ image, caption }) => (
  <div className="embeddedImage">
    <ImageComponent
      className="richtextImage"
      objectFit="contain"
      src={image.url}
      width={image.width}
      height={image.height}
    />
    <RichTextRenderer richText={caption} className="embeddedImage__richtext" />
  </div>
);

export default EmbeddedImage;
