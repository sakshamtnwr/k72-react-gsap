import React from 'react';

const contactBottom = () => {
    return (
        <div>
            <div className='h-[40vh] w-full bg-black flex flex-col justify-center items-center gap-4'>
                <div>
                    <h4 className='font-[font1] text-[1.5vw] text-white uppercase'>Suivez-nous</h4>
                </div>
                <div className='flex gap-5 items-center justify-center'>
                    <a target='_blank' className='font-[font1] text-[5vw] text-white border-white border-2 rounded-full uppercase px-5 pt-2 leading-[1] ' href="https://www.facebook.com/K72.ca/">fb</a>
                    <a target='_blank' className='font-[font1] text-[5vw] text-white border-white border-2 rounded-full uppercase px-5 pt-2 leading-[1] ' href="https://www.instagram.com/k72_creation/">ig</a>
                    <a target='_blank' className='font-[font1] text-[5vw] text-white border-white border-2 rounded-full uppercase px-5 pt-2 leading-[1] ' href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQF3NvjYH2HhNgAAAZ0HpBDwQ_fr3HmY5FBXXBAUnPEGsLzAM-V2ZzJLlnpXNjAO2Za9Tqa0KeG_1EfrEt5iK8R-yZw6jx3emlhy2WJr4h0dt6yJcVU_TxUxd5ViM3Ww2G6I2FI=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fk72">in</a>
                    <a target='_blank' className='font-[font1] text-[5vw] text-white border-white border-2 rounded-full uppercase px-5 pt-2 leading-[1] ' href="https://www.behance.net/agenceK72">be</a>                
                </div>
            </div>
        </div>
    );
};

export default contactBottom;