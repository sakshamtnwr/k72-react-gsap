import React from 'react';

const contactBottom = () => {
    return (
        <div>
            <div className='min-h-[32vh] sm:min-h-[38vh] md:min-h-[40vh] w-full bg-black flex flex-col justify-center items-center gap-5 sm:gap-4 px-5 py-10 sm:py-8'>
                <div>
                    <h4 className='font-[font1] text-xs sm:text-sm md:text-[1.5vw] text-white uppercase tracking-wide'>Suivez-nous</h4>
                </div>
                <div className='flex flex-wrap gap-3 sm:gap-4 md:gap-5 items-center justify-center max-w-md sm:max-w-none'>
                    <a target='_blank' rel='noreferrer' className='font-[font1] text-xl sm:text-2xl md:text-[5vw] text-white border-white border-2 rounded-full uppercase px-4 sm:px-5 pt-1.5 sm:pt-2 leading-[1] min-w-[3.5rem] text-center' href="https://www.facebook.com/K72.ca/">fb</a>
                    <a target='_blank' rel='noreferrer' className='font-[font1] text-xl sm:text-2xl md:text-[5vw] text-white border-white border-2 rounded-full uppercase px-4 sm:px-5 pt-1.5 sm:pt-2 leading-[1] min-w-[3.5rem] text-center' href="https://www.instagram.com/k72_creation/">ig</a>
                    <a target='_blank' rel='noreferrer' className='font-[font1] text-xl sm:text-2xl md:text-[5vw] text-white border-white border-2 rounded-full uppercase px-4 sm:px-5 pt-1.5 sm:pt-2 leading-[1] min-w-[3.5rem] text-center' href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQF3NvjYH2HhNgAAAZ0HpBDwQ_fr3HmY5FBXXBAUnPEGsLzAM-V2ZzJLlnpXNjAO2Za9Tqa0KeG_1EfrEt5iK8R-yZw6jx3emlhy2WJr4h0dt6yJcVU_TxUxd5ViM3Ww2G6I2FI=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fk72">in</a>
                    <a target='_blank' rel='noreferrer' className='font-[font1] text-xl sm:text-2xl md:text-[5vw] text-white border-white border-2 rounded-full uppercase px-4 sm:px-5 pt-1.5 sm:pt-2 leading-[1] min-w-[3.5rem] text-center' href="https://www.behance.net/agenceK72">be</a>                
                </div>
            </div>
        </div>
    );
};

export default contactBottom;