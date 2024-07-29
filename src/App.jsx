import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import PresentTime from "./components/PresentTime";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <PresentTime></PresentTime>
    </div>
  );
}

export default App;
