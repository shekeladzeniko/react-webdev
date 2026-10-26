import "./App.css";

function App() {
  const name = "Niko";
  const age = 20;
  let message = "null";

  if (age > 18) {
    message = "legal";
  } else {
    message = "illegal";
  }
  return (
    <>
      <div
        style={{
          backgroundColor: "lightblue",
          color: "white",
        }}
      >
        <h1>{name}</h1>
        <p>{message}</p>
      </div>
    </>
  );
}

export default App;
