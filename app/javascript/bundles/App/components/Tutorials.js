import React, { Component} from 'react';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';

export default class Tutorials extends Component {


 handleClick = (event, tutorial) => {

   this.props.deleteTutorial(tutorial);
 }

  render() {
    const { tutorials } = this.props;
    return(
      
      <table>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Link</th>
        <th></th>
      </tr>
      {tutorials.map((tutorial) => {
        return(
          <tr key={tutorial.id}>
            <td>{tutorial.name}</td>
            <td>{tutorial.description}</td>
            <td>{tutorial.link}</td>
            <td><button onClick={ (e) => { this.handleClick(e, tutorial) } }> Delete</button>
            </td>
          </tr>
        )
      })}
      </table>
    
    )
  }
}
