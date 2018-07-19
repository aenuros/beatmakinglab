import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';
class Sell extends Component {
    render() {
      return (
       
        <Card className='small'
  header={<CardTitle image='https://blog.beatstars.com/wp-content/uploads/2017/03/beatstars-full-logo.png'>Card Title</CardTitle>}
  actions={[<a href='#'>https://www.beatstars.com/</a>]}>
  BeatStars: online marketplace to sell beats
</Card>
       
      );
    }
  }




export default Sell;