import React from 'react'
// style
import styled from 'styled-components'
// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../../animation'

const ContactMe = () => {
    return (
        <StyledContact exit="exit" variants={pageAnimation} initial='hidden' animate="enter" style={{ color: '#fff' }} >
            <h1>Contact Me</h1>
        </StyledContact>
    )
}

const StyledContact = styled(motion.div)`
    min-height: 100vh;
    color: white;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }
`;

export default ContactMe