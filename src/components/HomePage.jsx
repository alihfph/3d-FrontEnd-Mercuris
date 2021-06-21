import { RouteComponentProps } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StudentCard from './StudentCard'

const HomePage = (history, location, match ) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        let response = await fetch('http://localhost:5000/3D', {
          credentials: 'include',
        })
        if (response.ok) {
          let data = await response.json()
          setUsers(data.users)
        } else {
          console.log('error')
        }
      } catch (error) {
        console.log('error')
      }
    }
    getUsers()
  }, [])

  return (
    <Container style={{ marginTop: '100px' }}>
      <Row>
        {users.map((user) => (
          <Col key={user._id} lg={6} className={!user.profilePic ? 'd-none student-column' : 'student-column'}>
            <StudentCard user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default HomePage