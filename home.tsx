import app, { Component } from 'apprun';

export default class homeComponent extends Component {

  state = {
    content: 'home'
  }

  view = state => {
    return <div>
      <h1>{state.content}</h1>
    </div>
  }

  update = {
    '#': state => state
  }
}
