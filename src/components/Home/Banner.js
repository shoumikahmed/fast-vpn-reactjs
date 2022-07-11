import React from 'react';
import banner1 from '../../assets/banner 1.png'
import arrowBack from '../../assets/arrow_back.png'

const Banner = () => {
    return (
        <section className='lg:flex justify-around items-center'>
            <div>
                <img src={banner1} alt="" />
            </div>
            <div className='p-10'>
                <h1 className='text-4xl mt-10 lg:text-5xl  font-bold text-white'>Fast, Secure,</h1>
                <h1 className='text-4xl lg:text-5xl font-bold text-white'>Smart VPN</h1>
                <p className=' text-[#CCD9F1]'>Maximum security, minimul cost.FastVPN is a top</p>
                <p className='mb-10 text-[#CCD9F1]'> rated VPN in App Store</p>
                <button className="bg-blue-400 hover:bg-blue-700 text-white font-semiboldbold py-4 px-6 rounded-lg">
                    Get Started
                </button>
                <div className='flex items-center'>
                    <img src={arrowBack} className='m-0 ' alt="" />
                    <p className='mt-10 mb-11 ml-2 text-[#646C7A]'><small>7 Days Free trial for everyone</small></p>
                </div>
            </div>

        </section>
    );
};

export default Banner;