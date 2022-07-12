import React from 'react';
import woman from '../../assets/woman.png'

const ProtectIdentity = () => {
    return (
        <section className='p-20 '>
            <div className='flex justify-center items-center mt-20 bg-[#ccd9f124] rounded-xl'>
                <div className='flex-1 text-white p-16'>
                    <h3 className='text-4xl mt-10 lg:text-4xl my-8 font-bold text-white'>Protect Your Identity</h3>
                    <p className='my-8 text-[#CCD9F1]'>It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast</p>
                    <button className="bg-blue-400 hover:bg-blue-700 text-white font-semiboldbold py-4 px-6 rounded-lg">
                        Go Anonymous
                    </button>
                </div>
                <div className='flex-1 hidden lg:block'>
                    <img className='mt-[-100px] m-0' src={woman} alt="" />
                </div>
            </div>
        </section>

    );
};

export default ProtectIdentity;