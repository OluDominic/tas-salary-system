import React from 'react'
import './index.scss'

const Modal =({ hideModal, toggleModal, children }) => {
    if(hideModal) return null;

    return(
        <>
            <div className="modalOver" onClick={()=> toggleModal(true)} />
            <div className="modal">
                {children}
            </div>
        </>
    );
}

export default Modal;