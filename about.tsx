import app, { Component } from 'apprun';
import { user } from './firebase-auth';

export default class aboutComponent extends Component {

  auth = () => !!user;

  state = {
    content: 'about'
  }

  view = state => {
    return <div>
      <h1>{state.content} - { state.authorized ? user.displayName : '[anonymous]'} </h1>
    </div>
  }

  update = {
    '#about': state => ({ ...state, authorized: this.auth() }),
  }
}
