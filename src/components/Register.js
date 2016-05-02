import React from 'react';
import {Well,
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock,
    RadioGroup
  } from 'react-bootstrap'

export default  class Register extends React.Component{
   constructor(props){
     super(props);
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
         <legend>Please Register</legend>
         
         <form>
         <FormGroup>
         <ControlLabel>First Name</ControlLabel>
         <FormControl
         type="text"
         placeholder="Enter your first name"
         />
         <FormControl.Feedback/>
         <HelpBlock></HelpBlock>
         </FormGroup>
         
         <FormGroup>
         <ControlLabel>Last Name</ControlLabel>
         <FormControl
         type="text"
         placeholder="Enter your last name"
         />
         <FormControl.Feedback/>
         <HelpBlock></HelpBlock>
         </FormGroup>
         
         <div class="radio">
         <RadioGroup>
         <ControlLabel >Gender</ControlLabel>
         <FormControl 
         type="radio" name="optionsRadios" id="optionsRadios1" value="option1" 
         />Female
         <ControlLabel></ControlLabel>
         <FormControl
         type="radio" name="optionsRadios" id="optionsRadios2" value="option2"
         />Male
         <FormControl.Feedback/>
         <HelpBlock></HelpBlock>
         </RadioGroup>
         </div>
         </form>
         
         </Well>
         </div>
       );
  }   
}