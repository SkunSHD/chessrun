import app, { Component } from 'apprun';
import home from './home';
import signin, { user } from './firebase-auth';
import about from './about';
import contact from './contact';
import authorize from './authorize';

const app_id = 'my-app';
const main_id = 'main';

new home().mount(main_id);
new about().mount(main_id);
new contact().mount(main_id);
new authorize().mount(main_id);
new signin().mount();

// global routing
app.on('//', route => {
  console.log('[route]: ', route)
  const menus = document.querySelectorAll('.navbar-nav li');
  for (let i = 0; i < menus.length; ++i) menus[i].classList.remove('active');
  const item = document.querySelector(`[href='${route}']`);
  item && item.parentElement.classList.add('active');
})

class AppComponent extends Component {

  state = {}

  view = state => {
    return <div className=''>
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
              aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#/">Project name</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              { !!user ?
                <li><a href="#signout">Sign Out</a></li>
                :
                <li><a href="#authorize">Authorize</a></li>
              }
            </ul>
          </div>
        </div>
      </nav>
      <div className="container" id="main"></div>
    </div>
  }

  update = {
    '#auth': state => state
  }

}

new AppComponent().mount(app_id);
