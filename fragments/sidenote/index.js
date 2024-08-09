import RichTextRenderer from "@/services/richtext";

const SideNote = ({ content, pxTop }) => (
  <RichTextRenderer
    richText={content}
    className="sidenote"
    style={{ "--px-top": pxTop + "px" }}
  />
);

export default SideNote;
