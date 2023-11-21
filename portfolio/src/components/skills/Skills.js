import React from 'react';
import './Skills.css';
import {
    BiLogoJavascript,
    BiLogoCss3,
    BiLogoBootstrap,
    BiLogoTailwindCss,
    BiLogoReact,
    BiLogoVuejs,
    BiLogoNodejs
} from 'react-icons/bi'
import { ImHtmlFive } from 'react-icons/im'
import { DiAngularSimple } from 'react-icons/di'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiNestjs ,SiExpress ,SiTypescript ,SiMysql ,SiMongodb ,SiPrisma ,SiPostgresql } from 'react-icons/si'


function Skills() {
    return (
        <section id='skills'>
            <span className='skillsTit'> What i do ? </span>
            <span className='skillsDesc'>
                I'm a Full Stack JavaScript Web & Mobile Developer, and I bring ideas to life through code.<br />
                My skills span the entire software development spectrum, from crafting engaging user interfaces to building scalable and efficient back-end systems.<br />
                I'm passionate about creating seamless experiences for web and mobile users, and I thrive on staying up to date with the latest technologies and best practices in the industry.<br />
                My goal is to help businesses and individuals translate their visions into functional, reliable, and elegant digital solutions.<br />
                I believe that the key to success in the modern digital landscape is adaptability, and I'm committed to delivering versatile and cutting-edge solutions for a wide range of projects.</span>
            <div >
                {/* <span className='skillsTit'> Technologies : <br/></span> */}
                <span className='skillsTit'> Frontend <br /></span>

                <ImHtmlFive fontSize={65} color='red' className="icon-container"/>
                <BiLogoCss3 fontSize={75} color='#264de4'className="icon-container" />
                <BiLogoBootstrap fontSize={75} color='#563d7c' className="icon-container" />
                <BiLogoTailwindCss fontSize={75} color='#4dc0b5'  className="icon-container"/>
                < BiLogoReact fontSize={75} color='blue' className="icon-container" />
                <TbBrandNextjs fontSize={75} color='white' className="icon-container" />
                <BiLogoVuejs fontSize={75} color='#41B883'  className="icon-container"/>
                <DiAngularSimple fontSize={75} color='#a6120d' className="icon-container" />
            </div>
            <div >
                    <span className='skillsTit'> Backend <br/></span>
                    <div >
                    <BiLogoJavascript fontSize={75} color='yellow' className="icon-container"/>
                    <SiTypescript fontSize={75} color='blue' className="icon-container"/>
                    <BiLogoNodejs fontSize={75} color='#68a063' className="icon-container"/>
                    <SiNestjs fontSize={65} color='#E0234E'className="icon-container" />
                    <SiExpress fontSize={75} color=' #303030' className="icon-container"/>
                    </div>
                </div>

                <div >
                    <span className='skillsTit'> Databases<br/></span>
                    <div >
                     <SiMysql fontSize={75} color='#00758F' className="icon-container"/>
                    <SiMongodb fontSize={75} color='green' className="icon-container"/>
                    <SiPrisma fontSize={75} color='purple' className="icon-container"/>
                    <SiPostgresql  fontSize={75} color=' #0064a5' className="icon-container"/>

                    </div>
                </div>
        </section>
    )
}

export default Skills