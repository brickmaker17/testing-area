import React from 'react'
import styled from 'styled-components'

const Lines = styled.svg`
    width: 100vw; 
    height: 100vh;
    
`
const Diag = styled.line`
    stroke:grey;
    stroke-width:40px;
    
`


const Nav = () => (
        <Lines>
            <h1>luke</h1>`
            <Diag x1="0" y1="100%" x2="100%" y2="0"/>
            <Diag x1="0" y1="0" x2="100%" y2="100%"/>
        </Lines>
);

export default Nav;