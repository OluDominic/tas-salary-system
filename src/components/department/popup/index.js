import React from 'react';
import './index.scss';

const Popup =(props)=> {

    return (
        <div className="popup">
            <div className="popup-div">
                <span className="close" onClick={props.handleClose}>X</span>
                {props.content}
            </div>
        </div>
    );
}

export default Popup;