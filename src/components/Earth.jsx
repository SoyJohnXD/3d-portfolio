import { useGLTF } from "@react-three/drei";

const Earth = (props) => {
  const { nodes, materials } = useGLTF("/assets/models/earth.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.material_0}
        position={[9.972, 0, 1668.913]}
        scale={14.79}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.material_1}
        position={[9.972, 0, 1668.913]}
        scale={15.128}
      />
    </group>
  );
};
useGLTF.preload("/assets/models/earth.glb");

export default Earth;
