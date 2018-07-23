import React, { Component } from 'react';
import axios from 'axios';
import Tutorials from './components/Tutorials';
import Form from './components/Form';

const token = document
.querySelector('meta[name="csrf-token"]')
.getAttribute('content');

const headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN':     token
}

class TutorialEdit extends Component {

  state = { tutorials: [] }

  componentDidMount() {
    axios.get(`/tutorials.json`)
    .then((response) => {
      this.setState({ tutorials: response.data})
    })
  .catch((error) => {console.log(error) })
  }

  createTutorial  = (tutorial) => {
    axios.post(`/tutorials.json`, {
      tutorial: {
        name: tutorial.name,
        description: tutorial.description,
        link: tutorial.link
      }
    },
    {headers: headers})
    .then((response) => {
      let { tutorials } = this.state;
      tutorials.push(response.data);
      this.setState({tutorials});
    })
    .catch((error) => {console.log(error) })
  }

deleteTutorial = (tutorial) => {
  let { tutorials } = this.state;
  axios.delete(`/tutorials/${tutorial.id}.json`, {
    headers: headers
  })
  .then((response) => {
    tutorials = tutorials.filter((tutorial) => {
      return tutorial.id !== response.data.id
    });

    this.setState({ tutorials });
  })
  .catch((error) => { console.log(error) }
  )
}


  render() {
    return (
      <div>
        <Form createTutorial={this.createTutorial} />
        <Tutorials tutorials={this.state.tutorials}
        deleteTutorial={this.deleteTutorial}/>
        </div>
    );
  }
}

export default TutorialEdit;
