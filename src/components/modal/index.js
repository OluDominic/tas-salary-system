import React from 'react'
import './index.scss'

const Modal =({ hideModal, toggleModal, children }) => {
    if(hideModal) return null;

    return(
        <>
            <div className="modalOver" onClick={()=> toggleModal()} />,
            <div className="modalWrap">
                <div className="modal">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Modal;