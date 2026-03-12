import { EffectComposer } from '@react-three/postprocessing'
import { Canvas } from '@react-three/fiber'
import AsciiShader from './AsciiShader'
import { SafeLogo } from './SafeLogo'

export const AsciiScene = () => {
	return (
		<Canvas orthographic camera={{ position: [0, 0, 10], zoom: 80 }}>
			<SafeLogo />
			<group>
				{/* <directionalLight color="#aaa" intensity={8} position={[0, 5, -9]} />
				<directionalLight color="#aaa" intensity={12} position={[5, 1, -1]} />
				<directionalLight color="#aaa" intensity={6} position={[-5, 0, 0]} /> */}
				<directionalLight color="#FFF" intensity={2} position={[0, 0, 10]} />
			</group>

			{/* EffectComposer applies post-processing effects, in this case an ASCII effect via AsciiWrapper */}
			<EffectComposer multisampling={8}>
				<AsciiShader />
			</EffectComposer>
		</Canvas>
	)
}

