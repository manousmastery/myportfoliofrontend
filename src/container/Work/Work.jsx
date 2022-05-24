import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Work.scss';


const Work = () => {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        const query = '*[_type == "works"]'
        client.fetch(query).then((data) => setWorks(data))
    }, [])

    return (
        <>
            <h2 className='head-text'>My Creative <span>Portfolio </span></h2>

            <motion.div
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className='app__work-portfolio'
            >
                {works.map((work, index) => {
                    return (
                        <div className='app__work-item app__flex' key={index}>
                            <div className='app__work-img app__flex'>
                                <img src={urlFor(work.imgUrl)} alt={work.title} />

                                <motion.div
                                    whileHover={{ opacity: [0, 1] }}
                                    transition={{ duration: 0.15, ease: 'easeInOut', staggerChildren: 0.5 }}
                                    className='app__work-hover app__flex'
                                >
                                    <a href={work.projectLink} target="_blank" rel='noreferrer'>
                                        <motion.div
                                            whileHover={{ scale: [1, 0.9] }}
                                            transition={{ duration: 0.25 }}
                                            className='app__flex'
                                        >
                                            <AiFillEye />
                                        </motion.div>
                                    </a>
                                    <a href={work.codeLink} target="_blank">
                                        <motion.div
                                            whileHover={{ scale: [1, 0.9] }}
                                            transition={{ duration: 0.25 }}
                                            className='app__flex'
                                        >
                                            <AiFillGithub />
                                        </motion.div>
                                    </a>
                                </motion.div>
                            </div>

                            <div className='app__work-content app__flex'>
                                <h4 className='bold-text'>{work.title}</h4>
                                <p className='p-text' style={{ marginTop: 10 }}> {work.description} </p>

                                <div className='app__work-tag app__flex'><p className='p-text'>{work.tags[0]}</p></div>
                            </div>
                        </div>)
                })}
            </motion.div>
        </>
    )
}

export default AppWrap(Work, 'work');