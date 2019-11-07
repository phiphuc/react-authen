import { AUTHENTICATION } from '../constants/constants';
export const authentication = user => dispatch => 
    fetch(`http://localhost:8000/api/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => dispatch({type: AUTHENTICATION, payload: res.data.token}))
    .catch(err => console.log(err));