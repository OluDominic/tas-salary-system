import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Homepage from '../../pages/Homepage'

const HomeLayout =()=> {

    return (
        <div>
            <Header />
                <Homepage />
            <Footer />
        </div>
    );
}

export default HomeLayout