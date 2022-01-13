import "./App.css";

function App() {
  const handleData = (data) => {
    console.log("Parent Received", data);
  };
  return (
    <div className="App">
      <h3>Parent</h3>
      <h3>Child Received</h3>
    </div>
  );
}

export default App;
