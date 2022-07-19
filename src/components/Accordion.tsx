import { useState } from 'react';

import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import { providedData } from './data/ProvidedData';

const StyledAccordion = styled.section`
    /* Layout */
    position: relative;
    height: 800px;
    padding-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    /* Design */
    background-color: rgb(103, 170, 252);

    h1 {
        /* Typography */
        color: black;
        font-size: 2rem;
        font-weight: bold;
        font-family: 'Oswald', sans-serif;
        padding-bottom: 2rem;
    }

    h2 {
        /* Typography */
        color: black;
        font-size: 2rem;
        font-weight: bold;
        font-family: 'Oswald', sans-serif;
        margin: 1rem 0;
    }

    .accordion__wrapper {
        /* Layout */
        width: 350px;
        height: max-content;
        position: absolute;
        margin: 2rem;
    }

    .accordion__selector {
        /* Layout */
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        /* Design */
        cursor: pointer;
        background-color: white;
        border: 1px solid black;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        margin: 1rem 0;
    }
    .accordion__icon {
        /* Typography */
        color: black;
        font-size: 2rem;
        font-weight: bold;
        font-family: 'Oswald', sans-serif;
    }
    .dangerous__content {
        margin: 1rem auto 0;
        padding: 2rem;

        /* Design */
        background: #ffffff;
        border-radius: 15px;
        border: 1px solid black;

        /* Typography */
        font-size: 1.4rem;
        font-family: sans-serif;
        line-height: 1.5;

        p {
            margin-bottom: 2rem;
        }
    }
`;

export default function Accordion2() {
    const [isOpen, setIsOpen] = useState('');

    const handleClick = (title: string) => {
        isOpen === title ? setIsOpen('') : setIsOpen(title);
    };

    // Must set dangerous HTML as variable
    // to be passed as prop in parent
    const filteredHTMLString = providedData.filter((entry) => {
        if (isOpen !== '') {
            return entry.title === isOpen;
        } else {
            return null;
        }
    })[0]?.content;

    return (
        <StyledAccordion>
            <section className="accordion__wrapper">
                <h1>Provided Data Accordion:</h1>
                {providedData.map((providedData) => (
                    <>
                        <div
                            id={providedData.title}
                            className="accordion__selector"
                            onClick={() => handleClick(providedData.title)}
                        >
                            <h2>{providedData.title}</h2>
                            <span className="accordion__icon">
                                {isOpen === providedData.title ? '-' : '+'}
                            </span>
                        </div>

                        <AnimatePresence>
                            {isOpen === providedData.title ? (
                                <motion.div
                                    style={{ overflow: 'hidden' }}
                                    initial={{ opacity: 0, height: '0px' }}
                                    animate={{
                                        opacity: 1,
                                        height: 'max-content',
                                    }}
                                    exit={{ opacity: 0, height: '0px' }}
                                    transition={{
                                        layout: { duration: 0.5 },
                                    }}
                                >
                                    <section
                                        className="dangerous__content"
                                        dangerouslySetInnerHTML={{
                                            __html: filteredHTMLString,
                                        }}
                                    ></section>
                                </motion.div>
                            ) : null}
                        </AnimatePresence>
                    </>
                ))}
            </section>
        </StyledAccordion>
    );
}
