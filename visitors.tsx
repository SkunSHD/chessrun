import app, { Component } from 'apprun';
import { db } from './firebase-auth'


export default class visitorsComponent extends Component {
    state = {
        pageName: 'visitors',
        visitors: []
    };

    view = (state) => {
        if (state && state.then) return null;
        return <div className="row">
            <div className="col-3">
                <h3>Filters:</h3>
                <div className="btn-group-vertical" role="group">
                    <button type="button" className="btn btn-info">Visitors</button>
                    <button type="button" className="btn btn-secondary mt-1">Anonymous</button>
                    <button type="button" className="btn btn-danger mt-1">Deleted</button>

                    <form className="form-inline mt-4" onsubmit={e => console.log('--> [e]', e)}>
                        <input className="form-control w-75" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success w-25" type="submit">&#9823;</button>
                    </form>
                </div>
            </div>
            <div className="col-9">
                <h1>{state.pageName}</h1>
                { state.visitors.map((visitor) => <div style={{width: 400, border: '1px black solid'}}>
                    <p>{visitor.name}</p>
                    <button className="btn btn-danger" onclick={(e) => app.run('#deleteVisitor', visitor.timestamp)}>Delete</button>
                </div>)
                }
            </div>
        </div>
    }

    update = {
        '#visitors': async (state) => {
            const querySnapshot = await db.collection("visitors").get();
            let result = [];
            querySnapshot.forEach(item => result.push(item.data()));

            return {
                ...state,
                visitors: result
            };
        },
        '#deleteVisitor': (state, visitorId) => {
            console.log('%%---> state, visitorId', state, visitorId);
            return state;
        },
        '#filter': (state, e) => {
            console.log('e', e)
            alert(e.target.value)
            return state;
        }
    }
}

