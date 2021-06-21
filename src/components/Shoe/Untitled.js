/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/untitled.glb')
  return <group ref={group} {...props} dispose={null}></group>
}

useGLTF.preload('/untitled.glb')
