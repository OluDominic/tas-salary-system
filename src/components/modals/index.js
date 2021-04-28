import React from 'react'
import './index.scss'

const Modals =({ hideModal, toggleModal, children }) => {
    if(hideModal) return null;

    return(
        <>
            <div className="modalOvers" onClick={()=> toggleModal()} />,
            <div className="modalWraps">
                <div className="modals">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Modals;