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
     this.state={
       
     };
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
         { JSON.stringify(this.state)}
         
         <form>
         <FormGroup>
         <ControlLabel>First Name</ControlLabel>
         <FormControl
         type="text"
         placeholder="Enter your first name"
         value={this.state.firstName || ''}
         onChange={
           (e)=>this.setState({
                firstName:e.target.value
         })
        }
         />
         <FormControl.Feedback/>
         <HelpBlock></HelpBlock>
         </FormGroup>
         
         <FormGroup>
         <ControlLabel>Last Name</ControlLabel>
         <FormControl
         type="text"
         placeholder="Enter your last name"
         value={this.state.lastName || ''}
         onChange={
           (e)=>this.setState({
                lastName:e.target.value
         })
         }
         />
         <FormControl.Feedback/>
         <HelpBlock></HelpBlock>
         </FormGroup>
         
         
         <ControlLabel>Gender</ControlLabel>
         <FormGroup>
     <Radio  inline name="gender" value="Male"
     checked={this.state.gender === 'Male'}
     onClick={
       ()=>{
           this.setState({'gender':'Male'})
       }
      }
      >Male</Radio>
      <Radio inline name="gender" value="Female"
       checked={this.state.gender === 'Female'}
     onClick={
       ()=>{
           this.setState({'gender':'Female'})
       }
      }>Female</Radio>
         </FormGroup>
         
          
         <ControlLabel>Status</ControlLabel>
          <FormGroup>
      <Radio inline name="status" value="Single"
           checked={this.state.status === 'Single'}
     onClick={
       ()=>{
           this.setState({'status':'Single'})
       }
     }
     >Single</Radio>
     
      <Radio inline name="status" value="Married"
          checked={this.state.status === 'Married'}
     onClick={
       ()=>{
           this.setState({'status':'Married'})
       }
     }>Married</Radio>
     
      <Radio inline name="status" value="Widowed"
          checked={this.state.status === 'Widowed'}
     onClick={
       ()=>{
           this.setState({'status':'Widowed'})
       }
     }>Widowed</Radio>
      </FormGroup>
      
         <ControlLabel>Favorite Movie/s</ControlLabel>
          <FormGroup>
      <Checkbox inline name="movie" value="Jungle Book"
      checked={this.state.movie1 === 'Jungle Book'}
     onClick={
       ()=>{
         if(this.state.movie1 === 'Jungle Book')
           this.setState({'movie1':''})
           else
           this.setState({'movie1':'Jungle Book'})
       }
     }>Jungle Book</Checkbox>
     
  <Checkbox inline name="movie" value="Civil War"
   checked={this.state.movie2 === 'Civil War'}
     onClick={
       ()=>{
          if(this.state.movie2 === 'Civil War')
           this.setState({'movie2':''})
           else
           this.setState({'movie2':'Civil War'})
       }
     }>Civil War</Checkbox>
</FormGroup>

      <FormGroup controlId="formControlsSelect">
        <ControlLabel>Location</ControlLabel>
        <FormControl componentClass="select" placeholder="select"
        value={this.state.location}
        onChange={
          (e)=>this.setState({
            location:e.target.value
          })
        }
        >
        <option value="">...</option>
         <option value="Alburquerque">Alburquerque</option>
         <option value="Alicia">Alicia</option>
         <option value="Anda">Anda</option>
         <option value="Baclayon">Baclayon</option>
         <option value="Batuan">Batuan</option>
         <option value="Balilihan">Balilihan</option>
         <option value="Carmen">Carmen</option>
         <option value="Corella">Corella</option>
         <option value="Cortes">Cortes</option>
         <option value="Dagohoy">Dagohoy</option>
         <option value="Danao">Danao</option>
         <option value="Dauis">Dauis</option>
         <option value="Garcia Hernandez">Garcia Hernandez</option>
         <option value="Guindulman">Guindulman</option>
         <option value="Inabanga">Inabanga</option>
         <option value="Jagna">Jagna</option>
         <option value="Lila">Lila</option>
         <option value="Loay">Loay</option>
         <option value="Loboc">Loboc</option>
         <option value="Loon">Loon</option>
         <option value="Maribojoc">Maribojoc</option>
         <option value="Panglao">Panglao</option>
         <option value="Pilar">Pilar</option>
         <option value="Sikatuna">Sikatuna</option>
         <option value="Tagbilaran">Tagbilaran</option>
         <option value="Tubigon">Tubigon</option>
         <option value="Ubay">Ubay</option>
         <option value="Valencia">Valencia</option>
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