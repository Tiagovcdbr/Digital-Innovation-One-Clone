import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo-dio.png" />
            <NavMenu>
                <a>
                    <span>Home</span>
                </a>
                <a>
                    <span>Cursos</span>
                </a>
                <a>
                    <span>Bootcamps</span>
                </a>
                <a>
                    <span>Live Coding</span>
                </a>
                <a>
                    <span>Labs</span>
                </a>
                <a>
                    <span>Acelerações</span>
                </a>
                <a>
                    <span>Artigos</span>
                </a> 
            </NavMenu>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 10px;
`

const Logo = styled.img`
    width: 126px;
    margin-bottom:1px;
`

const NavMenu = styled.div`
    display: flex;

    a {
        display: flex;
        algn-item: center;
        padding: 0 12px;

        span {
            font-size: 16px;

        }
    }
`

