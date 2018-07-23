import React, { Component } from 'react';
import { Card, CardTitle, Row, Col } from 'react-materialize';

export default class Sounds extends Component {
    render() {
      return (
        <div id="sounds">
          <div>
            <h3>
              Explore these sites to find the best drum kits, loops, samples and more!
            </h3>

            <div><h5>Free Sounds:</h5></div>

         <Row>
           <Col s={12} m={2}>
             <Card className='small'
               header={<CardTitle image='http://blackberrywednesday.com/_images/looperman.png'></CardTitle>}
               actions={[<a href='https://www.looperman.com'>www.looperman.com</a>]}>
               1000's of free loops and other audio resources to keep you making music.
             </Card>
           </Col>
           <Col s={12} m={2}>
             <Card className='small'
               header={<CardTitle image='https://upload.wikimedia.org/wikipedia/commons/3/3c/Freesound_project_website_logo.png'></CardTitle>}
               actions={[<a href='https://freesound.org/browse/'>www.audacityteam.org</a>]}>
               collaborative database of creative-commons licensed sound for musicians and sound lovers.
             </Card>
           </Col>
           <Col s={12} m={2}>
             <Card className='small'
               header={<CardTitle image='https://i.imgur.com/c3inZJM.png'></CardTitle>}
               actions={[<a href='https://soundpacks.com'>www.soundpacks.com</a>]}>
               SoundPacks.com is a comprehensive source for free sound packs, drum kits, sample packs, and presets created by music producers and sound designers.
             </Card>
           </Col>
           <Col s={12} m={2}>
           <Card className='small'
               header={<CardTitle image='https://producergrind.com/wp-content/uploads/2017/01/logo.png'></CardTitle>}
               actions={[<a href='https://producergrind.com/category/free-downloads/drumsound-kits/'>www.producergrind.com</a>]}>
               We Help Producers Get to Business
             </Card>
           </Col>
           <Col s={12} m={2}>
           <Card className='small'
               header={<CardTitle image='https://i.imgur.com/UNiS75V.png'></CardTitle>}
               actions={[<a href='https://hiphopmakers.com/40-free-music-producer-free-drum-kits'>www.musicfeedpro.com</a>]}>
               Here are over 40 free drum kits from your favorite music producers. You will find over 2GB of free drums samples.
           </Card>
           </Col>
           <Col s={12} m={2}>
           <Card className='small'
               header={<CardTitle image='https://cdn.freebiesupply.com/logos/large/2x/ableton-logo-png-transparent.png'></CardTitle>}
               actions={[<a href='https://www.ableton.com/en/packs/#?item_type=free'>www.ableton.com</a>]}>
               Ableton makes Push and Live, hardware and software for music production, creation and performance.
           </Card>
           </Col>
         </Row>

       </div>

       <div><h5>Paid Sounds:</h5></div>

       <Row>
         <Col s={12} m={2}>
           <Card className='small'
             header={<CardTitle image='https://s2-cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/192/800/original/Splice-Identity-Black-Logotype.png?1528212721'></CardTitle>}
             actions={[<a href='https://splice.com/'>www.splice.com</a>]}>
             The cloud platform for music creation, collaboration and sharing. Create fearlessly with Splice.
           </Card>
         </Col>
         <Col s={12} m={2}>
           <Card className='small'
             header={<CardTitle image='https://howtomakeelectronicmusic.com/wp-content/uploads/2011/07/20-Free-Loops-By-Loopmasters.jpg'></CardTitle>}
             actions={[<a href='https://www.loopmasters.com/'>www.loopmasters.com</a>]}>
             Loopmasters is the number one website dedicated to providing 100% Royalty Free Sample Libraries for Producers Worldwide from the best Sample Labels on the Planet.
           </Card>
         </Col>
         <Col s={12} m={2}>
           <Card className='small'
             header={<CardTitle image='https://i.imgur.com/l4DEYqK.png'></CardTitle>}
             actions={[<a href='https://www.platinumloops.com/'>www.platinumloops.com</a>]}>
             Platinumloops is the producers choice when it comes to finding musical inspiration when you need it the most. Since 2001
           </Card>
         </Col>
         <Col s={12} m={2}>
         <Card className='small'
             header={<CardTitle image='https://cdn.shopify.com/s/files/1/0234/4281/t/14/assets/logo.png?2135833849022394236'></CardTitle>}
             actions={[<a href='https://blapkits.com/'>www.blapkits.com</a>]}>
             Premier drum kits & instruments by !llmind used by Grammy Winning Platinum music producers on albums by Drake, Kanye West, J Cole, Kendrick Lamar and more!
     </Card>
         </Col>
         <Col s={12} m={2}>
         <Card className='small'
             header={<CardTitle image='https://img.audiofanzine.com/images/u/manufacturer/thumb3/producers-choice-8183.png'></CardTitle>}
             actions={[<a href='https://www.theproducerschoice.com/'>www.theproducerschoice.com</a>]}>
             Quality Hip Hop Drum Kits, Hip Hop Sounds & Hip Hop Drum Samples/Loops. Mixed By PRO Sound Engineer.
         </Card>
         </Col>
         <Col s={12} m={2}>
         <Card className='small'
             header={<CardTitle image='https://i.imgur.com/tlppvuD.png'></CardTitle>}
             actions={[<a href='https://theproducersplug.com/'>www.theproducersplug.com</a>]}>
             We find the best Drum Kits, Plugins, Sample Packs, Virtual Instruments, Products & Gear on the market so you don't have to.
         </Card>
         </Col>
         <Col s={12} m={2}>
         <Card className='small'
             header={<CardTitle image='https://seeklogo.com/images/R/Reason-logo-480937FCA9-seeklogo.com.png'></CardTitle>}
             actions={[<a href='https://shop.propellerheads.se/browse/?q=&product_type=plugins-sounds&pl=&format=refills&developer=Propellerhead'>www.ableton.com</a>]}>
             Propellerhead creates Reason, ReCycle and Rack Extensions. Tools for creative music production, recording, mixing and remixing.
         </Card>
         </Col>
       </Row>

     </div>
      );
    }
  }
