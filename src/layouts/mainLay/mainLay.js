import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'

const MainLayout =(props)=> {
    
    return (
        <div>
            <Header {...props}/>
                <div className="mainLay">
                    {props.children}
                </div>
            <Footer />
        </div>
    );
}

export default MainLayout;