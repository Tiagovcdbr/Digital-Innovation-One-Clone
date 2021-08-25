import React from 'react'
import styled from 'styled-components'


function Menu() {
    return (
        <Nav>
            <Cursos src="/images/Cursos.png" />
            <h3>Cursos</h3>
            <Bootcamps src="/images/Bootcamps.png" />
            <h3>Cursos</h3>
            <Labs src="/images/Labs.png" />
            <h3>Cursos</h3>
            <Acelerações src="/images/Acelerações.png" />
            <h3>Cursos</h3>
            <Artigos src="/images/Artigos.png" />
            <h3>Cursos</h3>
        </Nav>
    )
}

export default Menu

const Nav = styled.nav`
    margin-top: 37px;
`

const Cursos = styled.img`
    justify-content: center;
    align-items: center;
`

const Bootcamps = styled.img`
    justify-content: center;
    align-items: center;
`

const Labs = styled.img`
    justify-content: center;
    align-items: center;
`

const Acelerações = styled.img`
    justify-content: center;
    align-items: center;
`

const Artigos = styled.img`
    justify-content: center;
    align-items: center;
`
