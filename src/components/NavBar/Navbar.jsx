import React from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './Navbar.scss'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const menus = ['home', 'about', 'work', 'skills', 'contact']
    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <h1>Emmanuel SARR</h1>
            </div>
            <ul className='app__navbar-links'>
                {menus.map((menu) => {
                    return (
                        <li key={`link-${menu}`} className='app__flex p-text'>
                            <div />
                            <a href={`#${menu}`}>{menu}</a>
                        </li>
                    )
                })}
            </ul>

            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)} />


                {toggle && (
                    <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }}>
                        <ul >
                            <HiX onClick={() => setToggle(false)} />
                            {menus.map((menu) => {
                                return (
                                    <li key={menu}>
                                        <a href={`#${menu}`} onClick={() => setToggle(false)}>{menu}</a>
                                    </li>
                                )
                            })}

                        </ul>
                    </motion.div>)
                }
            </div>
        </nav>
    )
}

export default Navbar