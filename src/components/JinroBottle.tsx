import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function JinroBottle() {
  const { nodes } = useGLTF("/JinroBottle.glb");
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Jinro as Mesh).geometry}
        material={(nodes.Jinro as Mesh).material}
        position={[0, 0.024, 0]}
      />
    </group>
  );
}

useGLTF.preload("/JinroBottle.glb");
