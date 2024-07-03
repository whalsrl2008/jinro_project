import { Canvas } from "@react-three/fiber";
import JinroBottle from "./JinroBottle";

export default function Experience() {
  return (
    <Canvas style={{ background: "white" }}>
      <mesh>
        <sphereGeometry />
        <meshBasicMaterial color="pink" />
      </mesh>
      <JinroBottle />
    </Canvas>
  );
}
