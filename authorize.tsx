import app, {Component} from 'apprun';
import { user, authorize } from './firebase-auth';

export default class authorizeComponent extends Component {

  auth = () => !!user;

  state = {
    content: 'Sign in as admin',
  }

  view = (state) => {
    return <div>
      <h1>{state.content}</h1>
      <div id="authorize-container"></div>
    </div>
  }

  update = {
    '#authorize': state => {
      setTimeout(()=> authorize("authorize-container"), 1000);
      return state
    },
  }
}

