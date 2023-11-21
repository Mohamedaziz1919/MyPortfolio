import React from 'react';
import './Intro.css';
import { HiAnnotation } from 'react-icons/hi';
import { Link } from 'react-scroll';
// import Me from '../../Assets/ger.jpg'
function Intro() {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'> Hello </span>
        <span className='introText'> I'm <span className='introName'> Mohamed Aziz Guerfala </span> <br />Web & Mobile Developer  </span>
        <p className='introP'>Full-stack developer capable of working in both front-end and back-end development processes,<br />
          highly skilled in programming, design, development and implementation of functional specifications.</p>
        <Link><button className='btn'> <HiAnnotation className='btnImg' /> Hire Me</button></Link>
      </div>
      {/* <img src={Me} alt='Profile' className='bg'/> */}
    </section>)
}

export default Intro