import React from 'react';
import './User.css';

const UserInput = (props) => {
    return (
        <div className='User-input'>
            <p>Start print to change user name: 
                <input type='text' onChange={props.addInput} value={props.additionalOutput} />
            </p>
            
        </div>
    )
}

export default UserInput