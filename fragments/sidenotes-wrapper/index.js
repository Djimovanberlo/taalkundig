import SideNote from "../sidenote";

const SidenotesWrapper = ({ sidenotesCollection }) => (
  <div className="sidenotesWrapper">
    {sidenotesCollection.items.map((sidenote, index) => (
      <SideNote key={index} {...sidenote} />
    ))}
  </div>
);

export default SidenotesWrapper;
