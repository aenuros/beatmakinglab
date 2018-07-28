import React, { Component } from 'react';
import { } from 'react-materialize';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import InstagramEmbed from 'react-instagram-embed';

class Social extends Component {
    render() {
      return (
<<<<<<< HEAD
        <div class="social">
        <h2>Social Media</h2>

        <div class="twitter">
=======
        <div>
        <h3>Social Media</h3>
>>>>>>> 67881461ca77a22cfa49eb135f18b3c6c96bb684
            <TwitterTimelineEmbed
sourceType="profile"
screenName="beatmakinglab"
options={{height: 500, width: 400}}
/>
</div>

<div class="instagram">
  <InstagramEmbed
  url='https://www.instagram.com/p/BfRCkATFq4n/?hl=en'
  maxWidth={500}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
</div>
        </div>
      );
    }
  }

  export default Social;


