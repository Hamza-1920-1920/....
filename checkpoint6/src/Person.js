import React from "react";
import ProfilPhoto from "./profilPhoto.jpg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Person extends React.Component {
  constructor(props) {
    console.log('Constructor')
    super(props)
    this.state = {
      Person: {
        fullName: "Hamza Ben Harrath",
        bio:"The person who is considered to have invented the concept of school is Horace Mann. Born in 1796, Mann was a pioneer of educational reforms in the US State of Massachusetts. After he became Secretary of Education in 1837, he undertook one of the biggest education reforms in American history.",
        imgSrc: ProfilPhoto,
        profession: "Fullstack js",
        Show:true,

      
      },
      count: 0,
      timer: 0,
    }
    this.timerInterval = null
  }
  componentDidMount() {
    console.log('Component did Mount')
    this.timerInterval = setInterval(() =>
      this.setState(prevState => ({ timer: prevState.timer + 1 })), 1000)
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 })
  }
 
 
  toggle = () => {this.setState({show:!this.state.show})}
  render() {

return (


<div>
<Card style={{ width: '18rem' }}>
      {this.state.show &&
    <div>
       <Card.Img variant="top" src={this.state.Person.imgSrc} style={{width:'18rem', height:' 14rem'}}/>
      <Card.Body>
        <Card.Title>{this.state.Person.fullName}</Card.Title>
        <Card.Text>{this.state.Person.bio}</Card.Text>
        <Card.Text>{this.state.Person.profession}</Card.Text>  
     </Card.Body> 
    
     
    
  </div>  
      }
     <Button onClick={this.toggle} variant="primary">Click Here</Button>
    </Card>

    <h2> timer : {this.state.timer}</h2>
</div>





)
}

}

export default Person;