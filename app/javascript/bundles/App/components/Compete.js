import React, { Component } from 'react';
import { Card, CardTitle, Row, Col } from 'react-materialize';
class Compete extends Component {
    render() {
      return (

       <div>
        <h1>Compete</h1>
           <p>
        Think your beats are up to the test? Compete with your beats online and in person!
        </p>
        <Row>
          <Col s={12} m={4}>
            <Card className='small'
              header={<CardTitle image='https://cdn.shopify.com/s/files/1/0648/6207/files/RocBattle_-_Sell_Beats_Online_large.png?8691899791655564979'></CardTitle>}
              actions={[<a href='https://www.rocbattle.com'>www.rocbattle.com</a>]}>
              Compete with your beats online
            </Card>
          </Col>
          <Col s={12} m={4}>
            <Card className='small'
              header={<CardTitle image='data:image/jpeg;base64,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'></CardTitle>}
              actions={[<a href='https://www.illmuzik.com/beat-battles'>www.illmuzik.com/beat-battles</a>]}>
              Compete with your beats online
            </Card>
          </Col>
          <Col s={12} m={4}>
            <Card className='small'
              header={<CardTitle image='https://images.sxsw.com/uDgxQ0X2vgFXDY4qfId23NHsuVw=/0x68:900x711/950x/images.sxsw.com/3/034fe882-d58a-4833-b2c4-29d8754c565e/artist-16849'></CardTitle>}
              actions={[<a href='https://www.istandardproducers.com/showcase/producer-experience'>www.istandardproducers.com</a>]}>
              Compete in NYC and other major cities with your beats
            </Card>
          </Col>
          <Col s={12} m={4}>
          <Card className='small'
              header={<CardTitle image='http://cdn.shopify.com/s/files/1/1345/5155/t/5/assets/logo.png?15140930161716290694'></CardTitle>}
              actions={[<a href='https://battleofthebeatmakers.com'>www.battleofthebeatmakers.com</a>]}>
              Compete in Toronto with your beats
      </Card>
          </Col>
          <Col s={12} m={4}>
          <Card className='small'
              header={<CardTitle image='https://i.imgur.com/81Kwoy7.png'></CardTitle>}
              actions={[<a href='http://beatroyale.com/'>www.beatroyale.com/</a>]}>
              Sell your beats and submit to music industry opportunties
          </Card>
          </Col>
          <Col s={12} m={4}>
          <Card className='small'
              header={<CardTitle image='https://image-ticketfly.imgix.net/00/02/36/04/47-og.png?w=480&h=480'></CardTitle>}
              actions={[<a href='http://jaxbeatbattle.com'>www.jaxbeatbattle.com</a>]}>
             Compete in Flordia with your beats
          </Card>
          </Col>
          <Col s={12} m={4}>
          <Card className='small'
              header={<CardTitle image='http://freshproducestl.com/wp-content/uploads/2017/07/FP-Podcast-image-1024x1024.jpg'></CardTitle>}
              actions={[<a href='http://freshproducestl.com'>www.freshproducestl.com/</a>]}>
              Compete in St Louis with your beats
          </Card>
          </Col>
          <Col s={12} m={4}>
          <Card className='small'
              header={<CardTitle image='https://i.imgur.com/HX4QFHc.jpg'></CardTitle>}
              actions={[<a href='http://www.thebeatacademy.com'>www.thebeatacademy.com</a>]}>
              Compete in London with your beats
          </Card>
          </Col>

        </Row>

      </div>
      );
    }
  }




export default Compete;
