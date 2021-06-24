import { Container, Row, Col, ProgressBar, Card, Image } from 'react-bootstrap'
import { FaWpforms } from 'react-icons/fa';
import react from "react"

const Waiting = () => (

    
      <>
      <Container fluid>    
        <Row>
          <Col className= "">
          </Col>
          <Col className= "mt-5">
          
          <Card style={{ width: '18rem' }}>
               <Card.Body>
                 <Card.Title>Bitte haben Sie Geduld</Card.Title>
                    <Card.Text className= "mt-5" >
                        <FaWpforms size = '10x' />
                        Informationen Wie z.B Miete und Gehalt werden ermittlet.
                        Dies duart 10 minuten
                    </Card.Text>
                   
                  <ProgressBar className= "mt-5" animated now={10? 40: 70} />  
                 </Card.Body>
                </Card>
          </Col>
          <Col className= "">
          </Col>
        </Row>
      </Container>
      
      </>
    
  )
  
  export default Waiting