import "./App.css";
import PostForm from "./components/PostForm/PostForm";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <PostForm />
      </div>
    </Router>
  );
}

export default App;
