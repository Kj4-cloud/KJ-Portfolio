import './StackesDetailsForcss.css';


export const StackesDetails = ({ children }) => {
  const items = Array.isArray(children)
    ? children.flat()
    : typeof children === "string"
    ? [children]
    : [];

  return (
    <div className="ConainerForStackDetails" >
      <div className='badgeList' >
        {items.map((item, index) => (
          <span key={index} className="Tools">
            {typeof item === "string" ? item.trim() : item}
          </span>
        ))}
      </div>
    </div>
  );
};

// const styles = {
//   container: {
//     padding: "10px 0",
//   },
//   badgeList: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "10px",
//   },
//   badge: {
//     display: "inline-block",
//     padding: "8px 8px",
//     border: "1px solid rgba(100, 160, 255, 0.3)",
//     color: "#c8d6e5",
//     fontSize: "14px",
//     fontFamily: "sans-serif",
//     background: "transparent",
//   },
// };
