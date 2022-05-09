import './App.css';

import { Input } from "./components/Input";
import { List } from "./components/List";

function App() {
  return (
    <div className="m-4">
      <div style={{
        maxWidth: "400px"
      }}>
        <Input />
      </div>
      <List />
    </div>
  );
}

export default App;
