import RichTextRenderer from "@/services/richtext";

const ComparativeTable = ({ table, caption }) => {
  return (
    <section className="comparativeTable">
      <RichTextRenderer className="comparativeTable__table" richText={table} />
      <RichTextRenderer richText={caption} />
    </section>
  );
};

export default ComparativeTable;
