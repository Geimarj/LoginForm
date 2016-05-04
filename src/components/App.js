import React from 'react';
import {Well,
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock,
    Button,
    ButtonGroup
} from 'react-bootstrap'

export default  class App extends React.Component{
 constructor(props){
     super(props);
 }
 
 goToRegister(){
     this.props.history.push("/register");
 }
 
 render(){
     const wellStyle={
         width:400,
         height:500,
         marginLeft:'auto',
         marginTop:'10px',
         marginRight:'auto'
     };
     return (
         <div classname="container">
         <Well style={wellStyle}>
         <legend>Please LogIn</legend>
         <form>
         <FormGroup>
         <ControlLabel>Enter Username</ControlLabel>
         <FormControl
         type="text"
         placeholder="Enter your username"
         />
         <FormControl.Feedback/>
         <HelpBlock></HelpBlock>
         </FormGroup>
         
         <FormGroup>
         <ControlLabel>Enter Password</ControlLabel>
         <FormControl
         type="password"
         placeholder="Enter your password"
         />
         <FormControl.Feedback/>
         <HelpBlock></HelpBlock>
         </FormGroup>
         
        <div className="btncontainer">
        <ButtonGroup>
         <Button bsStyle="success" type="submit">Login</Button>
          <Button bsStyle="info" type="button"
          onClick={this.goToRegister.bind(this)}>Register</Button>
          </ButtonGroup>
          </div>
         </form>
         </Well>
         </div>
     );
 }
 

}