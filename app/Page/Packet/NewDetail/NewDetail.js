import React from 'react'
import Footer from '../Home/components/Footer';
import Breadcump from '../News/components/Breadcump';
import Header from '../Home/components/Header';
import ContentNewDetail from './ContentNewDetail';
function NewDetail() {
    return (
        <div className='EISMIEJITG'>
            <Header />
            {/* <Breadcump /> */}
            <ContentNewDetail />
            <Footer />
        </div>
    )
}

export default NewDetail