import React from 'react';
import arrowBack2 from '../../assets/arrow_back 2.png'

const WhyFastVpn = () => {
    return (
        <section className='py-14'>
            <div>
                <h1 className='text-4xl mt-10 lg:text-4xl  font-bold text-white text-center'>Why Fast VPN is Better?</h1>
                <p className='text-center text-[#CCD9F1] my-8'>Learn Why 10000+ people use FastVPN</p>
                <div className='grid lg:grid-cols-4  gap-20 px-20 mt-10'>
                    <div className='bg-[#ccd9f124] p-8 rounded-xl'>
                        <img src={arrowBack2} alt="" />
                        <h1 className='text-2xl font-bold text-white mt-4'>Fast and</h1>
                        <h1 className='text-2xl font-bold text-white'>Stable</h1>
                    </div>
                    <div className='bg-[#ccd9f124] p-8 rounded-xl'>
                        <img src={arrowBack2} alt="" />
                        <h1 className='text-2xl font-bold text-white mt-4'>Top Notch</h1>
                        <h1 className='text-2xl font-bold text-white'>Security</h1>
                    </div>
                    <div className='bg-[#ccd9f124] p-8 rounded-xl'>
                        <img src={arrowBack2} alt="" />
                        <h1 className='text-2xl font-bold text-white mt-4'>Real</h1>
                        <h1 className='text-2xl font-bold text-white'>Anonymous</h1>
                    </div>
                    <div className='bg-[#ccd9f124] p-8 rounded-xl'>
                        <img src={arrowBack2} alt="" />
                        <h1 className='text-2xl font-bold text-white mt-4'>No Data</h1>
                        <h1 className='text-2xl font-bold text-white'>Limit</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyFastVpn;