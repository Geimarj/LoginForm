import React from 'react';
import {Well} from 'react-bootstrap'

export default  class Register extends React.Component{
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
         </Well>
         </div>
       );
  }   
}