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
  import validation from 'react-validation-mixin'
  import strategy from 'react-validatorjs-strategy'
  import validatorjs from 'validatorjs'
  import classnames from 'classnames'
  
  class Register extends React.Component{
  
   constructor(props){
     super(props);
     this.state={
       movie:{}
     };
     
     this.validatorTypes=strategy.createSchema(
       {
         lastName:'required',
         firstName:'required',
         gender:'required',
         status:'required',
         location:'required',
         comment:'required',
         movie:'required|moviesrule'
       },
       {
         "required":"The field :attribute is required!"
       },
       (validator)=>{
         validator.setAttributeNames({
           lastName:'Lastname',
           firstName:'Firstname',
           gender:'Gender',
           status:'Status',
           location:'Location',
           comment:'Comment'
         });
         
         validator.constructor.registerAsync('moviesrule',
         function(movie,attribute,req,passes){
           var counter=0;
           for(var key in movie){
             if(movie[key])
             counter++;
           }
           if(counter==0)
           passes(false,'Please select one movie');
           else
           passes();
         });
       }
     );
     
 }
 
 getValidatorData = ()=> {
        return this.state
    };
 
getClasses = (field)=>{
  
        return classnames({
            'success': this.props.isValid(field),
            'error': !this.props.isValid(field)
        });
 };
 
 
getErrorText=(field)=>{
        var error = this.props.errors[field];
        if(!error)
            return null;
        if(Array.isArray(error)){
            var message = [];
            message = error.map((item,i)=>{
                return(
                    <span key={i}>
                        {item}
                        <br/>
                    </span>
                )
            });
            return message;
        }
        else
            return  (<span>{error || ''}</span>);
    };
    
     onFormSubmit = (event)=>{
        event.preventDefault();
        
        this.setState({
          validated:true
        });
        
        this.props.validate(this.onValidate);
    };
 
     onValidate=(error)=>{
        if (error) {
            //form has errors; do not submit
        } else {
           // submit to rest here
        }
    };
    
    
  render(){
      const wellStyle={
         width:500,
         height:700,
         marginLeft:'auto',
         marginTop:'10px',
         marginRight:'auto'
      };
       return (
         <div classname="container">
         <Well style={wellStyle}>
         <legend>Please Register</legend>
         
         <form onSubmit={this.onFormSubmit}>
         
         <FormGroup validationState={this.getClasses('firstName')}>
         <ControlLabel>First Name</ControlLabel>
         <FormControl
         type="text"
         name="firstName"
         placeholder="Enter your first name"
         value={this.state.firstName || ''}
         onBlur={()=>{
           this.setState({
             validated:true
           });
           this.props.validate('firstName');
          }
         }
         onChange={
           (e)=>this.setState({
                firstName:e.target.value
         })
        }
         />
         <FormControl.Feedback/>
         <HelpBlock>{this.getErrorText('firstName')}</HelpBlock>
         </FormGroup>
         
         <FormGroup validationState={this.getClasses('lastName')}>
         <ControlLabel>Last Name</ControlLabel>
         <FormControl
         type="text"
         name="lastName"
         placeholder="Enter your last name"
         value={this.state.lastName || ''}
         onBlur={()=>{
           this.props.validate('lastName');
          }
         }
         onChange={
           (e)=>this.setState({
                lastName:e.target.value
         })
         }
         />
         <FormControl.Feedback/>
         <HelpBlock>{this.getErrorText('lastName')}</HelpBlock>
         </FormGroup>
         
         
         <ControlLabel>Gender</ControlLabel>
         <FormGroup validationState={this.getClasses('gender')}>
     <Radio  inline name="gender" value="Male"
     name="gender"
     onBlur={()=>{
  
           this.props.validate('gender');
          }
         }
     checked={this.state.gender === 'Male'}
     onClick={
       ()=>{
           this.setState({'gender':'Male'})
       }
      }
      >Male</Radio>
      <Radio inline name="gender" value="Female"
      name="gender"
      onBlur={()=>{

           this.props.validate('gender');
          }
         }
       checked={this.state.gender === 'Female'}
     onClick={
       ()=>{
           this.setState({'gender':'Female'})
       }
      }>Female</Radio>
       <FormControl.Feedback/>
         <HelpBlock>{this.getErrorText('gender')}</HelpBlock>
 
         </FormGroup>
          
         <ControlLabel>Status</ControlLabel>
          <FormGroup validationState={this.getClasses('status')}>
      <Radio inline name="status" value="Single"
      name="status"
      onBlur={()=>{

           this.props.validate('status');
          }
         }
           checked={this.state.status === 'Single'}
     onClick={
       ()=>{
           this.setState({'status':'Single'})
       }
     }
     >Single</Radio>
     
      <Radio inline name="status" value="Married"
      name="status"
      onBlur={()=>{

           this.props.validate('status');
          }
         }
          checked={this.state.status === 'Married'}
     onClick={
       ()=>{
           this.setState({'status':'Married'})
       }
     }>Married</Radio>
     
      <Radio inline name="status" value="Widowed"
      name="status"
      onBlur={()=>{

           this.props.validate('status');
          }
         }
          checked={this.state.status === 'Widowed'}
     onClick={
       ()=>{
           this.setState({'status':'Widowed'})
       }
     }>Widowed</Radio>
     <FormControl.Feedback/>
         <HelpBlock>{this.getErrorText('status')}</HelpBlock>
      </FormGroup>
      
         <ControlLabel>Favorite Movie/s</ControlLabel>
          <FormGroup validationState={this.getClasses('movie')}>
      <Checkbox inline checked={this.state.movie['Jungle Book']===1}
     onClick={
       ()=>{
         var movie=this.state.movie;
         if(movie['Jungle Book']===1)
           movie['Jungle Book']=undefined;
           else
           movie['Jungle Book']=1;
           
           this.setState({
             movie:movie
           });
       }
     }>Jungle Book</Checkbox>
     
  <Checkbox inline checked={this.state.movie['Civil War']===1}
     onClick={
       ()=>{
          var movie=this.state.movie;
         if(movie['Civil War']===1)
           movie['Civil War']=undefined;
           else
           movie['Civil War']=1;
           
           this.setState({
             movie:movie
           });
       }
     }>Civil War</Checkbox>
     <FormControl.Feedback/>
     <HelpBlock>{this.getErrorText('movie')}</HelpBlock>
</FormGroup>

      <FormGroup controlId="formControlsSelect" validationState={this.getClasses('location')}>
        <ControlLabel>Location</ControlLabel>
        <FormControl componentClass="select" placeholder="select"
        name="location"
        value={this.state.location}
        onBlur={()=>{

           this.props.validate('location');
          }
         }
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
        <FormControl.Feedback/>
         <HelpBlock>{this.getErrorText('location')}</HelpBlock>
        </FormGroup>
        
         <FormGroup controlId="formControlsTextarea" validationState={this.getClasses('comment')}>
           <ControlLabel>Comment</ControlLabel>
           <FormControl componentClass="textarea" placeholder="Comment"
           name="comment"
           onBlur={()=>{

           this.props.validate('comment');
          }
         }
            value={this.state.comment || ''}
         onChange={
           (e)=>this.setState({
                comment:e.target.value
         })
         } />
         <FormControl.Feedback/>
         <HelpBlock>{this.getErrorText('comment')}</HelpBlock>
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

export default validation(strategy)(Register);