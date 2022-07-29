import "./App.css";
import { Route, Routes } from "react-router-dom";
import LayOut from "./layout/LayOut";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <LayOut>
        <Routes>
          {routes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
        </Routes>
      </LayOut>
    </div>
  );
}

export default App;
