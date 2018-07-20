import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Form extends Component {

  state = {
      tutorial: {
        name: '',
        description: '',
        link: ''
      }
  }

  handleNameChange = (event) => {
    let {tutorial} = this.state;
    tutorial.name = event.target.value;
    this.setState({tutorial});
  }


  handleDescChange = (event) => {
    let {tutorial} = this.state;
    tutorial.description = event.target.value;
    this.setState({tutorial});
  }

  handleLinkChange = (event) => {
    let {tutorial} = this.state;
    tutorial.link = event.target.value;
    this.setState({tutorial});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let {tutorial} = this.state;
    this.props.createTutorial(tutorial);
    tutorial = { name: '',description:'',link:'' }
    this.setState({tutorial});
  }

  render(){

      const { tutorial } = this.state;
      return(
        <Paper style= {{margin: 10, padding: 10}}>
          <form
            style={{display: 'flex', flexWrap:'wrap'}}
            noValidate
            onSubmit={this.handleSubmit}
            >
          <TextField
            label="Name"
            value={tutorial.name}
            onChange={this.handleNameChange}
            margin="normal"
            fullWidth
            />
            <TextField
              label="Description"
              value={tutorial.description}
              onChange={this.handleDescChange}

              margin="normal"
              fullWidth
              />
              <TextField
                label="Link"
                value={tutorial.link}
                onChange={this.handleLinkChange}

                margin="normal"
                fullWidth
                />
          <Button
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
              disabled={tutorial.name.trim() === ''}
            >
            Create Tutorial
            </Button>
            </form>
            </Paper>
    )
  }
}
