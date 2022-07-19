import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledButton = styled.button`
    /* Layout */
    width: 15rem;
    margin: 2rem auto 0;

    /* Typography */
    color: black;
    font-family: sans-serif;
    font-size: 1.4rem;
    font-weight: 900;
    letter-spacing: 1px;

    /* Design */
    border: 3px solid black;
    border-radius: 50px;
    padding: 1rem 2rem;
    background: none;

    @media screen and (max-width: 950px) {
        font-size: 1.2rem;
    }
    @media screen and (max-width: 650px) {
        font-size: 1rem;
        width: 14rem;
    }
`;

export const CardButton = () => {
    return (
        <StyledButton
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            READ MORE
        </StyledButton>
    );
};
