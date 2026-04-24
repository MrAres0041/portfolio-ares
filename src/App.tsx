import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";

function App() {

  return (
    <div className="app-container">
      <main className="main">
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<div style={{ padding: 20 }}>About</div>}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/projects/:id"
            element={<ProjectDetail />}
          />

          <Route
            path="*"
            element={<div style={{ padding: 20 }}>Página no encontrada</div>}
          />

        </Routes>
      </main>
    </div>
  )
}

export default App