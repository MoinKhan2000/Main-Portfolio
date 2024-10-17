import React from 'react';
import { BsTwitter, BsInstagram, BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs'
import { } from 'react-icons/bs'
const SocialMedia = () => {
    return (
        <div className='app__social'>
            <a href='https://github.com/MoinKhan2000' target='_blank' rel='noreferrer'>
                <BsTwitter />
            </a>

            <a href='https://github.com/MoinKhan2000' target='_blank' rel='noreferrer'>
                <BsFacebook />
            </a>

            <a href='https://www.linkedin.com/in/moin-khan-385608254/' target='_blank' rel='noreferrer'>
                <BsLinkedin />
            </a>

            <a href='https://github.com/MoinKhan2000' target='_blank' rel='noreferrer'>
                <BsInstagram />
            </a>
            <a href='https://github.com/MoinKhan2000' target='_blank' rel='noreferrer'>
                <BsGithub />
            </a>
        </div>
    );
}

export default SocialMedia;
