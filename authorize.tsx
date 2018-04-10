import app, {Component} from 'apprun';
import { user } from './firebase-auth';

export default class authorizeComponent extends Component {

  state = 'Sign in as admin'

  view = (state) => {
    return <div>
      <h1>{state.content}</h1>
      <div id="authorize-container"></div>
    </div>
  }

  update = {
    '#authorize': state => {
        !user && setTimeout(()=> app.run("#signin", "authorize-container"))
        return state
    },
  }
}

