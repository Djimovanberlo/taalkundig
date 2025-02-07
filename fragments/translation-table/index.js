import RichTextRenderer from "@/services/richtext";

const TranslationTable = ({ table, caption }) => (
  <section className="translationTable">
    <RichTextRenderer richText={table} className="translationTable__table" />
    <RichTextRenderer richText={caption} />
  </section>
);

export default TranslationTable;
