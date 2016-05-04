import React from 'react';
import {Well,
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock,
    Radio,
    Checkbox,
    Button,
    ButtonGroup
  } from 'react-bootstrap'

export default  class Register extends React.Component{
   constructor(props){
     super(props);
 }
  render(){
      const wellStyle={
         width:400,
         height:650,
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
         
     <Radio  readOnly>Male</Radio>
      <Radio  readOnly>Female</Radio>
      <Checkbox  readOnly>Single</Checkbox>
      <Checkbox  readOnly>Married</Checkbox>
      <Checkbox  readOnly>Widowed</Checkbox>
      
      <FormGroup controlId="formControlsSelect">
        <ControlLabel>Location in Bohol</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
         <option value="select">Alburquerque</option>
         <option value="select">Alicia</option>
         <option value="select">Anda</option>
         <option value="select">Baclayon</option>
         <option value="select">Batuan</option>
         <option value="select">Balilihan</option>
         <option value="select">Carmen</option>
         <option value="select">Corella</option>
         <option value="select">Cortes</option>
         <option value="select">Dagohoy</option>
         <option value="select">Danao</option>
         <option value="select">Dauis</option>
         <option value="select">Garcia Hernandez</option>
         <option value="select">Guindulman</option>
         <option value="select">Inabanga</option>
         <option value="select">Jagna</option>
         <option value="select">Lila</option>
         <option value="select">Loay</option>
         <option value="select">Loboc</option>
         <option value="select">Loon</option>
         <option value="select">Maribojoc</option>
         <option value="select">Panglao</option>
         <option value="select">Pilar</option>
         <option value="select">Sikatuna</option>
         <option value="select" selected>Tagbilaran</option>
         <option value="select">Tubigon</option>
         <option value="select">Ubay</option>
         <option value="select">Valencia</option>
        </FormControl>
        </FormGroup>
        
         <FormGroup controlId="formControlsTextarea">
           <ControlLabel>Comment</ControlLabel>
           <FormControl componentClass="textarea" placeholder="Comment" />
         </FormGroup>
          
          <div className="button">
          <ButtonGroup>               
         <Button bsStyle="success" type="submit">Submit</Button>
         <Button bsStyle="info" type="reset">Reset</Button>
         </ButtonGroup>
         </div>
         </form>
         
         </Well>
         </div>
       );
  }   
}