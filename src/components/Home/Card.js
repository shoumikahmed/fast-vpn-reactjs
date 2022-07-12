import React from 'react';
import cardIcon from '../../assets/Round border.png'

const Card = () => {
    return (
        <section className='p-20 flex'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='px-10 py-20 mt-5'>
                        <h1 className='text-[#CCD9F1] text-xl tracking-wide font-semibold'>M  o  n  t  h  l  y</h1>
                        <img className='my-6' src={cardIcon} alt="" />
                        <div className='flex items-center'>
                            <h1 className='text-4xl font-bold text-[#CCD9F1]'>$18.00</h1><small className='ml-2 mt-3 text-[#646C7A]'>per month</small>
                        </div>
                        <p className='text-[#CCD9F1] mt-2 mb-6'>Bill $18.00</p>
                        <p className='text-[#CCD9F1] mb-2'>Upto 4x Speed</p>
                        <p className='text-[#CCD9F1] mb-2'>Add Free Experience</p>
                        <p className='text-[#CCD9F1] mb-2'>37 Virttual Locations</p>
                        <p className='text-[#CCD9F1] '>Upto 5 Devices</p>
                    </div>
                    <div className='px-20 py-16  bg-[#ccd9f124] rounded-lg ml-5'>
                        <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded-b-xl bottom-16 ml-32 relative">Save 40%</span>
                        <div>
                            <h1 className='text-[#CCD9F1] text-xl tracking-wide font-semibold'>Y e a r l y</h1>
                            <img className='my-6' src={cardIcon} alt="" />
                            <div className='flex items-center'>
                                <h1 className='text-4xl font-bold text-[#CCD9F1]'>$12.00</h1><small className='ml-2 mt-3 text-[#646C7A]'>per month</small>
                            </div>
                            <p className='text-[#CCD9F1] mt-2 mb-6'>Bill $144.00</p>
                            <p className='text-[#CCD9F1] mb-2'>Upto 4x Speed</p>
                            <p className='text-[#CCD9F1] mb-2'>Add Free Experience</p>
                            <p className='text-[#CCD9F1] mb-2'>37 Virttual Locations</p>
                            <p className='text-[#CCD9F1] '>Upto 5 Devices</p>
                            <button class="bg-transparent hover:bg-blue-500 text-blue-400 mt-8 font-semibold hover:text-white py-2 px-4 lg:px-8 border border-blue-400 hover:border-transparent rounded">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
                <div className='my-5 p-8 lg:p-32'>
                    <h1 className='text-4xl lg:text-5xl font-bold text-white'>Fair Cost, Better Speed, No Lies</h1>
                    <p className='text-[#CCD9F1] my-8'>It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast</p>
                    <button className="bg-blue-400 hover:bg-blue-700 text-white font-semiboldbold py-4 px-6 rounded-lg">
                        Start your free trial
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Card;