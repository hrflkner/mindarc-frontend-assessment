// Hooks
import { useState } from 'react';

// Packages
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

// Data
import { providedData } from './data/ProvidedData';

const StyledTabIndex = styled.section`
    /* Layout */
    width: 100%;
    height: 80rem;
    padding: 4rem;

    /* Design */
    background: rgb(103, 170, 252);

    h2 {
        color: black;
        font-size: 6rem;
        font-weight: bold;
        font-family: 'Oswald', sans-serif;
        margin-bottom: 8rem;
    }
    .data__display {
        /* Layout */
        width: 800px;
        height: 500px;
        margin: 0 auto;
        padding: 2rem;

        /* Design */
        background: black;
        border: 3px solid white;
        border-radius: 5px;
    }
    .tab__navbar {
        /* Layout */
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;

        button {
            /* Layout */
            margin-right: 2rem;
            padding: 0.5rem 1rem;

            /* Typography */
            color: white;
            font-size: 1.8rem;
            font-weight: bold;

            background: black;
            border: 3px solid white;
            border-radius: 8px;

            &:hover {
                color: rgb(103, 170, 252);
                border-color: rgb(103, 170, 252);
            }
            &:focus {
                color: #fd7f7f;
                border: 3px solid #fd7f7f;
            }
        }
        p {
            font-size: 1.6rem;
        }
    }
    .dangerous__content {
        width: 75%;
        height: 60%;
        margin: 6rem auto 0;
        padding: 2rem;

        /* Design */
        background: #ffffff;
        border-radius: 15px;

        /* Typography */
        font-size: 1.8rem;
        font-family: sans-serif;
        line-height: 1.5;

        p {
            margin-bottom: 2rem;
        }
    }

    /*
        Tablets
    */
    @media all and (max-width: 880px) {
        padding-left: 1rem;
        padding-right: 1rem;
        text-align: center;

        .data__display {
            text-align: left;
            padding-left: 2rem;
            padding-right: 2rem;
            width: 600px;
        }
        .dangerous__content {
            width: 90%;
            height: 300px;
        }
    }

    /*
        Small Tablets and Mobile
    */
    @media all and (max-width: 650px) {
        h2 {
            font-size: 4.2rem;
        }

        .data__display {
            width: 500px;
            height: 550px;
            padding-bottom: 0;
        }
        .dangerous__content {
            width: 90%;
            height: 350px;
        }
    }
`;

export default function TabIndex() {
    const [tabIndex, setTabIndex] = useState<string>('Section 1');

    const handleTabChange = (e: any) => {
        setTabIndex(e.target.value);
    };

    // Must set dangerous HTML as variable
    // to be passed as prop in parent
    const filteredHTMLString = providedData.filter((entry) => {
        return entry.title === tabIndex;
    })[0].content;

    return (
        <StyledTabIndex>
            <h2>Provied Data for Task 2:</h2>
            <section className="data__display">
                <div className="tab__navbar">
                    {providedData.map((entry) => {
                        return (
                            <motion.button
                                onClick={(e) => handleTabChange(e)}
                                value={entry.title}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {entry.title}
                            </motion.button>
                        );
                    })}
                </div>
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        className="dangerous__content"
                        key={tabIndex ? tabIndex : 'empty'}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <section
                            dangerouslySetInnerHTML={{
                                __html: filteredHTMLString,
                            }}
                        ></section>
                    </motion.div>
                </AnimatePresence>
            </section>
        </StyledTabIndex>
    );
}
