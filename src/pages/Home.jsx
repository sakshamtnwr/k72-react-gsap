import React from 'react';
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText';
import HomeBottomText from '../components/home/HomeBottomText';
const Home = () => {
    return (
        <div className='text-white overflow-x-hidden'>
            <div className='h-screen w-full fixed inset-0'>
            <Video/>
            </div>
            <div className='min-h-screen h-screen w-full relative px-5 sm:px-6 lg:px-4 pt-14 sm:pt-16 lg:pt-0 pb-6 sm:pb-8 lg:pb-5 overflow-hidden flex flex-col lg:justify-between'>
                <HomeHeroText></HomeHeroText>
                <HomeBottomText></HomeBottomText>
            </div>
        </div>
    );
};

export default Home;