import React from 'react';
import worldMap from '../../assets/worldmap.png'

const WorldMap = () => {
    return (
        <section className=''>
            <div>
                <h1 className='text-4xl mt-10 lg:text-4xl  font-bold text-white text-center'>30+ Premium Servers Worldwide</h1>
                <p className='text-center text-[#CCD9F1] my-8 mb-16'>Learn Why 10000+ people use FastVPN</p>
            </div>
            <div className='pb-10'>
                <img className='mx-auto p-5' src={worldMap} alt="" />
            </div>
        </section>
    );
};

export default WorldMap;