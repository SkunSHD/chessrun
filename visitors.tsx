import app, {Component} from 'apprun';
import {db} from './firebase-auth'

export default class visitorsComponent extends Component {
    state = {
        pageName: 'visitors',
        visitors: []
    };

    view = (state) => {
        return <div>
            <h1>{state.pageName}</h1>
            { state.visitors.map((visitor)=> <p>{ visitor.name }</p>) }
        </div>
    }

    update = {
        '#visitors': async(state) => {
            const querySnapshot = await db.collection("visitors").get();
            let result = [];
            querySnapshot.forEach(item => result.push(item.data()));

            return {
                ...state,
                visitors: result
            };
        }
    }
}

