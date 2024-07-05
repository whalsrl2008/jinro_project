import { Center, MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function JinroBottle() {
  const { nodes } = useGLTF("/JinroBottle.glb");
  return (
    <Center>
      <group dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Jinro as Mesh).geometry}
          position={[0, 0.024, 0]}
        >
          <MeshTransmissionMaterial transmissionSampler />
        </mesh>
      </group>
    </Center>
  );
}

useGLTF.preload("/JinroBottle.glb");
