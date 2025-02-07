import RichTextRenderer from "@/services/richtext";

const ExampleTable = ({ table, caption }) => (
  <section className="exampleTable">
    <RichTextRenderer richText={table} className="exampleTable__table" />
    {caption && <RichTextRenderer richText={caption} />}
  </section>
);

export default ExampleTable;
