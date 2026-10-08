import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <h2>My React CI Project</h2>
        <span>CI Demo</span>
      </header>

      <main className="container">
        <h1>welcome to devops🚀</h1>

        <p>
          This is a simple React frontend for practicing
          Continuous Integration.
        </p>

        <div className="card-container">
          <div className="card">
            <h3>💻 React</h3>
            <p>Frontend application created using React.</p>
          </div>

          <div className="card">
            <h3>🔄 CI</h3>
            <p>Automatically build and test the project.</p>
          </div>

          <div className="card">
            <h3>☁️ DevOps</h3>
            <p>Learning how code moves from development to deployment.</p>
          </div>
        </div>

        <button onClick={() => alert("CI Pipeline Demo!")}>
          Test Application
        </button>
      </main>

      <footer>
        <p>My First React CI Project © 2026</p>
      </footer>
    </div>
  );
}

export default App;