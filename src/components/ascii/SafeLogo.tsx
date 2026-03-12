// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useRef } from 'react'
import { Center, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Group, MeshBasicMaterial } from 'three'

export function SafeLogo() {
	const { nodes, materials } = useGLTF('/safe-coin.glb')
	const groupRef = useRef<Group>(null)
	useFrame(({ clock }) => {
		if (groupRef.current) {
			groupRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * (Math.PI / 4)
		}
	})
	return (
		<Center>
			<group ref={groupRef} dispose={null}>
				<group rotation={[0, 0, 0]} scale={[0.012, 0.012, 1]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Mesh_1.geometry}
						// material={materials.Material_1}
						material={new MeshBasicMaterial({ color: '#111' })}
						position={[-164.6, 0, -0.515]}
						scale={[1, 1, 0.28]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Mesh_2.geometry}
						material={materials.Material_2}
						position={[-161.043, 0, -0.58]}
						scale={[1, 1, 0.407]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Mesh_3.geometry}
						material={materials.Material_3}
						position={[-171.204, 0, -0.569]}
						scale={[1, 1, 0.407]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Mesh_4.geometry}
						material={materials.Material_4}
						position={[-164.735, 0, -0.545]}
						scale={[1, 1, 0.407]}
					/>
				</group>
			</group>
		</Center>
	)
}

useGLTF.preload('/safe-coin.glb')