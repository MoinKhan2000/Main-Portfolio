import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper';
import { Tooltip as ReactTooltip } from 'react-tooltip'

import './Skills.scss'
import { client, urlFor } from '../../client';
const Skills = () => {
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const query = '*[_type=="experiences"]';
        const skillQquery = '*[_type=="skills"]';
        client.fetch(query).then((data) => {
            // console.log(data);
            // Mapping of month names to numerical values
            const monthMap = {
                January: 0,
                February: 1,
                March: 2,
                April: 3,
                May: 4,
                June: 5,
                July: 6,
                August: 7,
                September: 8,
                October: 9,
                November: 10,
                December: 11,
            };

            // Function to extract a comparable date value from the year
            const extractDateValue = (year) => {
                const yearParts = year.split(' - ');

                // If there's a range, get the first part
                const startYear = yearParts[0].match(/\d{4}/) ? parseInt(yearParts[0].match(/\d{4}/)[0], 10) : null;

                // If the year contains month information
                if (yearParts[0].match(/[a-zA-Z]/)) {
                    const [monthName, monthYear] = yearParts[0].split(' ');
                    const month = monthMap[monthName];
                    return new Date(monthYear, month); // Year, Month
                }

                return new Date(startYear, 0);
            };

            // Sorting the experiences array
            const sortedExperiences = data.sort((a, b) => {
                return extractDateValue(a.year) - extractDateValue(b.year);
            });


            setExperience(sortedExperiences)
        })

        client.fetch(skillQquery).then((data) => {
            setSkills(data)
        })
    }, []);
    return (
        <>
            <h2 className="head-text">Skills, Education & Experiences</h2>

            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills.map((skill) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="app__skills-item app__flex"
                            key={skill.name}
                        >
                            <div
                                className="app__flex"
                                style={{ backgroundColor: skill.bgColor }}
                            >
                                <img src={urlFor(skill.icon)} alt={skill.name} />
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="app__skills-exp">
                    {experience.map((experience) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={experience.year}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {experience.works.map((work) => (
                                    <>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.8 }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for={work.name}
                                            key={work.name}
                                        >
                                            <h4 className="bold-text">{work.name}</h4>
                                            <p className="p-text">{work.company}</p>
                                        </motion.div>
                                        <ReactTooltip
                                            id={work.name}
                                            effect="solid"
                                            arrowColor="#fff"
                                            className="skills-tooltip"
                                        >
                                            {work.desc}
                                        </ReactTooltip>
                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};


// export default AppWrap(Skills, 'skills');
export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg')

