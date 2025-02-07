import RichTextRenderer from "@/services/richtext";

const TranslationTable = ({ table, caption }) => (
  <section className="translationTable">
    <RichTextRenderer richText={table} className="translationTable__table" />
    {caption && <RichTextRenderer richText={caption} />}
  </section>
);

export default TranslationTable;
