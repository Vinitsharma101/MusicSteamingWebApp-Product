import { Canvas } from "@react-three/fiber";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import Cyl from "./CylindrModel";

const App = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <Cyl />
    </Canvas>
  );
};

export default App;
