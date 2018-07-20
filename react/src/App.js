import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Tutorials from './components/Tutorials';
import Form from './components/Form';

class App extends Component {

  state = { tutorials: [] }

  componentDidMount() {
    axios.get(`http://localhost:5000/tutorials.json`)
    .then((response) => {
      this.setState({ tutorials: response.data})
    })
  .catch((error) => {console.log(error) })
  }

  createTutorial  = (tutorial) => {
    axios.post(`http://localhost:5000/tutorials.json`, {
      tutorial: { name: tutorial.name, description: tutorial.description, link: tutorial.link }
    })
    .then((response) => {
      let { tutorials } = this.state;
      tutorials.push(response.data);
      this.setState({tutorials});
    })
    .catch((error) => {console.log(error) })
  }

deleteTutorial = (tutorial) => {
  let { tutorials } = this.state;
  axios.delete(`http://localhost:5000/tutorials/${tutorial.id}.json`)
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

export default App;
