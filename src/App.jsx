import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome claim="The best place to find your favourite books!" />
      <AllTheBooks />
    </div>
  );
}

export default App;
