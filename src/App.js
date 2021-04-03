import './App.css';
import Navbar from "./components/NavBar";
import Particles from "react-particles-js";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

function App() {
  return (
      <>
        <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable:true,
                value_area: 900
              }
            },
            shape: {
              type: "triangle",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
        />
        <Navbar />
        <Header />
        </>
  );
}

export default App;
