import React, { Component } from 'react';
import { Card, CardTitle, Row, Col } from 'react-materialize';

export default class Sounds extends Component {
    render() {
      return (
        <div id="sounds">
          <div class="sounds-page">
            <h3 class="com headerText">Sound Packs</h3>
              <p class="com headerText">Explore these sites to find the best drum kits, loops, samples and more!</p>
            </div>



  <div>
  <h5 class="com">Free Sounds:</h5>
  

         <Row>
           <Col s={12} m={2}>
             <Card className='small'
               header={<CardTitle image='http://blackberrywednesday.com/_images/looperman.png'></CardTitle>}
               actions={[<a href='https://www.looperman.com' target="_blank">looperman</a>]}>
               1000s of free loops!
             </Card>
           </Col>
           <Col s={12} m={2}>
             <Card className='small'
               header={<CardTitle image='https://upload.wikimedia.org/wikipedia/commons/3/3c/Freesound_project_website_logo.png'></CardTitle>}
               actions={[<a href='https://freesound.org/browse/' target="_blank">audacityteam</a>]}>
               Collaborative database of creative-commons licensed sound!
             </Card>
           </Col>
           <Col s={12} m={2}>
             <Card className='small'
               header={<CardTitle image='https://i.imgur.com/c3inZJM.png'></CardTitle>}
               actions={[<a href='https://soundpacks.com' target="_blank">soundpacks</a>]}>
               Comprehensive source for free sound packs, drum kits, sample packs, and presets.
             </Card>
           </Col>
           <Col s={12} m={2}>
           <Card className='small'
               header={<CardTitle image='https://producergrind.com/wp-content/uploads/2017/01/logo.png'></CardTitle>}
               actions={[<a href='https://producergrind.com/category/free-downloads/drumsound-kits/' target="_blank">producergrind</a>]}>
               Producer-focused website.
       </Card>
           </Col>
           <Col s={12} m={2}>
           <Card className='small'
               header={<CardTitle image='https://i.imgur.com/IKBVMdv.png'></CardTitle>}
               actions={[<a href='https://hiphopmakers.com/40-free-music-producer-free-drum-kits' target="_blank">musicfeedpro</a>]}>
               Over 40 free drum kits from your favorite music producers.
           </Card>
           </Col>
           <Col s={12} m={2}>
           <Card className='small'
               header={<CardTitle image='https://cdn.freebiesupply.com/logos/large/2x/ableton-logo-png-transparent.png'></CardTitle>}
               actions={[<a href='https://www.ableton.com/en/packs/#?item_type=free' target="_blank">ableton</a>]}>
               Music production, creation and performance.
           </Card>
           </Col>
         </Row>

       </div>

       <div>
         
         <h5 class="com">Paid Sounds:</h5>

       <Row>
         <Col s={12} m={2}>
           <Card className='small'
             header={<CardTitle image='https://s2-cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/192/800/original/Splice-Identity-Black-Logotype.png?1528212721'></CardTitle>}
             actions={[<a href='https://splice.com/' target="_blank">splice</a>]}>
             Cloud platform for music creation.
           </Card>
         </Col>
         <Col s={12} m={2}>
           <Card className='small'
             header={<CardTitle image='https://howtomakeelectronicmusic.com/wp-content/uploads/2011/07/20-Free-Loops-By-Loopmasters.jpg'></CardTitle>}
             actions={[<a href='https://www.loopmasters.com/' target="_blank">www.loopmasters.com</a>]}>
             100% Royalty Free Sample Libraries.
           </Card>
         </Col>
         <Col s={12} m={2}>
           <Card className='small'
             header={<CardTitle image='https://i.imgur.com/l4DEYqK.png'></CardTitle>}
             actions={[<a href='https://www.platinumloops.com/' target="_blank">platinumloops</a>]}>
             10+ years of quality loops.
           </Card>
         </Col>
         <Col s={12} m={2}>
         <Card className='small'
             header={<CardTitle image='https://cdn.shopify.com/s/files/1/0234/4281/t/14/assets/logo.png?2135833849022394236'></CardTitle>}
             actions={[<a href='https://blapkits.com/' target="_blank">blapkits</a>]}>
             Premier drum kits & instruments.
     </Card>
         </Col>
         <Col s={12} m={2}>
         <Card className='small'
             header={<CardTitle image='https://img.audiofanzine.com/images/u/manufacturer/thumb3/producers-choice-8183.png'></CardTitle>}
             actions={[<a href='https://www.theproducerschoice.com/' target="_blank">theproducerschoice</a>]}>
             Quality Hip Hop Drum Sounds.
         </Card>
         </Col>
         <Col s={12} m={2}>
         <Card className='small'
             header={<CardTitle image='https://i.imgur.com/tlppvuD.png'></CardTitle>}
             actions={[<a href='https://theproducersplug.com/' target="_blank">theproducersplug</a>]}>
             Virtual Instruments.
         </Card>
         </Col>
         <Col s={12} m={2}>
         <Card className='small'
             header={<CardTitle image='https://seeklogo.com/images/R/Reason-logo-480937FCA9-seeklogo.com.png'></CardTitle>}
             actions={[<a href='https://shop.propellerheads.se/browse/?q=&product_type=plugins-sounds&pl=&format=refills&developer=Propellerhead' target="_blank">propellerhead</a>]}>
             Reason, ReCycle and Rack Extensions.
         </Card>
         </Col>
       </Row>
        </div>

     </div>
      );
    }
  }
