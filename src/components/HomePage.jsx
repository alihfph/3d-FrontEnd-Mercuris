import { RouteComponentProps } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import threeDCard from './threeDCard'
import * as THREE from 'three';

const HomePage = (history, location, match ) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        let response = await fetch('http://localhost:5000/3D', {
          credentials: 'include',
        })
        if (response.ok) {
          let data = await response.json()
          setData(data)
        } else {
          console.log('error')
        }
      } catch (error) {
        console.log('error')
      }
    }
    getUsers()
  }, [])

  const Box = () => {
    const ref = useRef();
    useFrame((state) => {
      // console.log(state);
      if(ref.current !== undefined) {
        ref.current.rotation.x = ref.current.rotation.y += 0.01;
      }
    });
    return(
      <mesh ref={ref}>
          <boxBufferGeometry />
          <meshBasicMaterial color="blue" />
        </mesh>
    );
  }

  return (
    <Container style={{ marginTop: '100px' }}>
      <Row>
      <Canvas style={{ background: 'black'}}>
      <Box>
      {data.map((data) => (
          <Col key={data._id} lg={6} >
            <threeDCard data={data} />
          </Col>
        ))}
      </Box>
    </Canvas>
      </Row>
    </Container>
  )
}

export default HomePage