import React, { Component } from 'react';
import { Card, CardTitle, Row, Col } from 'react-materialize';
class Sell extends Component {
    render() {
      return (

       <div class="sell">
       <h1 class="com">Sell</h1>
           <p class="com">
        Sell your beats on the online market.
        </p>
        <Row>
          <Col s={12} m={4}>
            <Card className='small'
              header={<CardTitle image='https://blog.beatstars.com/wp-content/uploads/2017/03/beatstars-full-logo.png'></CardTitle>}
              actions={[<a href='https://www.beatstars.com'>zbeatstars</a>]}>
              Online Community of Beat Makers!
            </Card>
          </Col>
          <Col s={12} m={4}>
            <Card className='small'
              header={<CardTitle image='https://static.tumblr.com/501bb4dafb1217628d4b54af9ef01355/floyzco/PA9nom9ky/tumblr_static_cc9cwcik4lk44gok0gs4o88sk_2048_v2.png'></CardTitle>}
              actions={[<a href='https://www.beatbrokerz.com'>beatbrokerz</a>]}>
              Place to sell your beats online!
            </Card>
          </Col>
          <Col s={12} m={4}>
            <Card className='small'
              header={<CardTitle image='https://lh5.ggpht.com/Gls3i0OfLo4khwGk5f_n7h8MEooJGEWYDBHZh78cTjmcnKkUjSolRbaqDUiZW7pr5uI'></CardTitle>}
              actions={[<a href='https://www.soundclick.com'>soundclick</a>]}>
              Similar to Soundcloud but for selling beats!
            </Card>
          </Col>
          <Col s={12} m={4}>
          <Card className='small'
              header={<CardTitle image='http://xlay.vision/wp-content/uploads/2017/04/Airbit-Logo-Black.png'></CardTitle>}
              actions={[<a href='https://airbit.com'>airbit</a>]}>
              Great place online to sell beats!
      </Card>
          </Col>
          <Col s={12} m={4}>
          <Card className='small'
              header={<CardTitle image='https://pbs.twimg.com/media/DWmZBPHWkAEdloD.jpg'></CardTitle>}
              actions={[<a href='https://www.musicfeedpro.com'>musicfeedpro</a>]}>
              Sell your beats and submit to music industry opportunties!
          </Card>
          </Col>

        </Row>

      </div>
      );
    }
  }




export default Sell;
