import RichTextRenderer from "@/services/richtext";

const SideNote = ({ content, pxTop }) => (
  <RichTextRenderer
    richText={content}
    className="sideNote"
    style={{ "--px-top": pxTop }}
  />
);

export default SideNote;
