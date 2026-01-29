import SideNote from "../sidenote";

const SidenotesWrapper = ({ sidenotesCollection }) => (
  <aside className="sidenotesWrapper">
    <div className="sidenotesWrapper__container">
      {sidenotesCollection.items.map((sidenote, index) => (
        <SideNote key={index} {...sidenote} />
      ))}
    </div>
  </aside>
);

export default SidenotesWrapper;
