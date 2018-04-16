import app, {Component} from 'apprun';
import { db } from './firebase-auth'


export default class visitorsComponent extends Component {
    state = {
        pageName: 'visitors',
        visitors: []
    };

    view = (state) => {
        if(state && state.then) return null;

        return <div className="row">
            <h1>{state.pageName}</h1>
            { state.visitors.map((visitor)=> <div style={{width: 400, border: '1px black solid'}}>
                <p>{ visitor.name }</p>
                <button onClick={ ()=> console.log('%%---> 123')
                }>Delete</button>
            </div>) }
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
        '#deleteVisitor': (state, visitorId)=> {
            console.log('%%---> state, visitorId', state, visitorId)
        }
    }
}

