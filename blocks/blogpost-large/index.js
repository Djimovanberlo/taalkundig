import Block from "@/layout/block";
import Card from "@/fragments/card";
import ImageComponent from "@/fragments/image";
import { H1, P } from "@/fragments/typography";
import PostFooter from "@/fragments/post-footer";
import RichTextRenderer from "@/services/richtext";
import SidenotesWrapper from "@/fragments/sidenotes-wrapper";

const BlogPostLarge = ({
  image,
  title,
  introduction,
  content,
  sidenotesCollection,
  publishedAt,
}) => {
  return (
    <Block className="blogpostLarge">
      <ImageComponent className="blogpostLarge__img" src={image?.url} />
      <Card>
        <H1 className="blogpostLarge__title">{title}</H1>
        <P className="blogpostLarge__intro">{introduction}</P>
        <RichTextRenderer
          className="blogpostLarge__content"
          richText={content}
        />
        <SidenotesWrapper sidenotesCollection={sidenotesCollection} />
      </Card>
      <PostFooter publishedAt={publishedAt} />
    </Block>
  );
};

export default BlogPostLarge;
