import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by
            <a
              href="https://www.linkedin.com/in/nhu-huynh-a41a4670/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Nhu Huynh
            </a>
            <br />
            Open-sourced on
            <a
              href="https://github.com/Astar05/react-dictionary"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
