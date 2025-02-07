import RichTextRenderer from "@/services/richtext";

const ExampleTable = ({ table }) => (
  <section className="exampleTable">
    <RichTextRenderer richText={table} className="exampleTable__table" />
    <RichTextRenderer richText={caption} />
  </section>
);

export default ExampleTable;
