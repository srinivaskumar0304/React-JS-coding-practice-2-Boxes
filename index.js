const Box = (props) => {
  //  Write your code here.
  const { className, boxSize } = props;
  return (
    <div className={`box ${className}`}>
      <p className="box-title">{boxSize}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="boxes-app-container">
    <h1 className="title">Boxes</h1>
    <div className="boxes-container">
      <Box className="small-box" boxSize="Small" />
      <Box className="medium-box" boxSize="Medium" />
      <Box className="large-box" boxSize="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
