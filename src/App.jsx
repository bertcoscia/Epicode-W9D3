import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";
import fantasy from "./data/fantasy.json";

function App() {
  return (
    <div className="App">
      {/* <MyNav />
      <Welcome claim="The best place to find your favourite books!" />
      <AllTheBooks /> */}
      <SingleBook book={fantasy[0]} />
    </div>
  );
}

export default App;
