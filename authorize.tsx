import app, {Component} from 'apprun';
import { user, authorize } from './firebase-auth';

export default class authorizeComponent extends Component {

  auth = () => !!user;

  state = {
    content: 'Sign in as admin',
  }

  view = (state) => {
    console.log('--> [auth render]')
    return <div>
      <h1>{state.content}</h1>
      <div id="authorize-container"></div>
    </div>
  }

  update = { 
    '#authorize': state => {
      if(!this.auth()) {
        console.log('--> [update authorizeComponent] !this.auth(): true)')
        setTimeout(()=> authorize("#authorize-container"));
      }
      return state
    },
  }
}

