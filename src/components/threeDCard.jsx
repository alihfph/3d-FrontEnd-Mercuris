import Card from 'react-bootstrap/Card'



const threeDCard = (data) => (
  <Card className="student-card">
    <h3>{data.name}</h3>
    <img src={data.svgFile} alt="user-avatar" className="profile-image" />
   
  </Card>
)

export default threeDCard