import React from 'react';
import FColumn1 from './FColumn1/FColumn1';
import FColumn2 from './FColumn2/FColumn2';
import FColumn3 from './FColumn3/FColumn3';
import FColumn4 from './FColumn4/FColumn4';
import './FooterColumn.css';


const FooterColumn = () => {
    return (
        <div className='f_column'>
            <div className='row'>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <FColumn1/>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <FColumn2/>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <FColumn3/>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <FColumn4/> 
                </div>
            </div>
        </div>
    );
};

export default FooterColumn;