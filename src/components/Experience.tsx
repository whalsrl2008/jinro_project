import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import JinroBottle from "./JinroBottle";

export default function Experience() {
  return (
    <Canvas style={{ background: "white" }}>
      <ScrollControls damping={1} pages={5}>
        <mesh position={[-1, 0, -3]}>
          <sphereGeometry />
          <meshBasicMaterial color="pink" />
        </mesh>
        <JinroBottle />
        <Scroll html style={{ width: "100%" }}>
          <h1
            style={{
              position: "absolute",
              top: `100vh`,
              right: "20vw",
              fontSize: "25em",
              transform: `translate3d(0,-100%,0)`,
            }}
          >
            all
          </h1>
          <h1 style={{ position: "absolute", top: "180vh", left: "10vw" }}>
            hail
          </h1>
          <h1 style={{ position: "absolute", top: "260vh", right: "10vw" }}>
            thee,
          </h1>
          <h1 style={{ position: "absolute", top: "350vh", left: "10vw" }}>
            thoth
          </h1>
          <h1 style={{ position: "absolute", top: "450vh", right: "10vw" }}>
            her
            <br />
            mes.
          </h1>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

// function Items() {
//   const { width: w, height: h } = useThree((state) => state.viewport);
// }
