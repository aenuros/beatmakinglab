import React, { Component } from 'react';
import Button from '../../../../../../node_modules/@material-ui/core/Button/Button.js';

const checkUser = (props) => {
  if (props.user) {
    return(
      <Button color="inherit" onClick={ handleLogout } >Logout </Button>
    );
  }
  else if (props.user === null) {
    return(
      <div>
      <a href="/users/sign_in"><Button>Log in</Button></a> | <a href="/users/sign_up"><Button>Sign up</Button></a>
      </div>
    );
  }
}

const handleLogout = () => {
  let link = document.createElement('a');
  link.setAttribute('href', '/users/sign_out');
  link.setAttribute('rel', 'nofollow');
  link.setAttribute('data-method', 'delete');
  document.body.appendChild(link);
  link.click();
}
const UserInfo = (props) => {

  console.log(props.user);
    return(
    <div>
    {checkUser(props)}
    </div>

    )
  }

export default UserInfo;
