import app, { Component } from 'apprun';
import home from './home';
import signin, { user } from './firebase-auth';
import about from './about';
import contact from './contact';
import authorize from './authorize';
import visitors from './visitors';

const app_id = 'my-app';
const main_id = 'main';

new home().mount(main_id);
new about().mount(main_id);
new contact().mount(main_id);
new authorize().mount(main_id);
new visitors().mount(main_id);
new signin().mount();

// global routing
app.on('//', route => {
  console.log('[route]: ', route)
  const menus = document.querySelectorAll('.navbar-nav li');
  for (let i = 0; i < menus.length; ++i) menus[i].classList.remove('active');
  const item = document.querySelector(`[href='${route}']`);
  item && item.parentElement.classList.add('active');
});

class AppComponent extends Component {

  state = {}

  view = state => {
    return <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Chess Lessons &#9813;</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            { user &&
              <li className="nav-item">
                <a className="nav-link" href="#visitors">Visitors</a>
              </li>
            }
            { user ?
                <li className="nav-item">
                  <a className="nav-link" href="#signout">Sign Out</a>
                </li>
                :
                <li className="nav-item">
                  <a className="nav-link" href="#authorize">Authorize</a>
                </li>
            }
          </ul>
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
