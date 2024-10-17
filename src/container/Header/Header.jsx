import React from 'react';
import './Header.scss'
import { easeInOut, motion } from 'framer-motion'
import { images } from '../../constants'
import moin from "../../assets/moin.png"
import { AppWrap } from '../../wrapper';
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}
const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className='app__header-info'
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello there, I am</p>
              {/* <h1 className="head-text" style={{ whiteSpace: "nowrap" }}>Moin Khan.</h1> */}
              <h1 className="head-text" >MoinKhan.</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p style={{ marginLeft: 20 }} className='p-text'>Front End Developer </p>
            <p style={{ marginLeft: 20 }} className='p-text'>Back End Developer </p>
            <p style={{ marginLeft: 20 }} className='p-text'>Freelancer </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        {/* <img src={images.profile} alt="profile_bg" /> */}
        <img src={moin} alt="profile_bg" />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: easeInOut }}
          src={images.circle}
          alt='profile-circle'
          className='overlay_circle'
        >

        </motion.img>
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {
          [images.python, images.react, images.node].map((circle, index) => {
            return <div className="circle-cmp app__flex" key={`circle-${index}}`}>
              <img src={circle} alt="" />
            </div>
          })
        }
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, 'home');
