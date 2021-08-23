import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav> {/*Construindo o header e seus elementos */}
            <Logo src="/images/logo-dio.png" />
            <NavMenu>
                <a>
                    <span><b>Home</b></span>
                </a>
                <a>
                    <span><b>Cursos</b></span>
                </a>
                <a>
                    <span><b>Bootcamps</b></span>
                </a>
                <a>
                    <span><b>Live Coding</b></span>
                </a>
                <a>
                    <span><b>Labs</b></span>
                </a>
                <a>
                    <span><b>Acelerações</b></span>
                </a>
                <a>
                    <span><b>Artigos</b></span>
                </a> 
            </NavMenu>
            <UserImg3 src="/images/alert.png" />
            <UserImg4 src="/images/hearts.png" />
            <UserImg src="https://hermes.digitalinnovation.one/users/student/f36309d3-c46d-4c72-b9ab-a3b544b13255.jpg" />            
            <UserImg2 src="https://hermes.digitalinnovation.one/school/flags/328b2afb-b47b-49cb-9e87-9cd08dc77798.png" />
            <Button src="/images/seta.png" />
        </Nav>
    )
}

export default Header  
// Definindo o estilo do Header
const Nav = styled.nav`   
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 10px;
`
// Definindo o estilo do Logo do Header
const Logo = styled.img`
    width: 126px;
    margin-bottom:1px;
`
// Definindo o estilo NavMenu do Header
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 20px;

    a {
        display: flex;
        algn-item: center;
        padding: 0 12px;
        cursor: pointer;

        span {
            font-size: 16px;
        }        
    }
`
// Estilizando a imagem do perfil
const UserImg = styled.img`
    border-radius: 50%;
    border: 3px solid rgb(247, 149, 51);
    width: 48px;
    height: 48px;
    cursor: pointer;
    margin-right: 35px;
    position: relative;
`
// estilizando o icone da bandeira do País do perfil
const UserImg2 = styled.img`
    width: 9px;
    height: 8px;
    align-items: center;
    display: flex;
    margin-top: 55px;
    position: relative; bottom:7px; right: 65px;
`
// estilizando o sino de alerta
const UserImg3 = styled.img`
    cursor: pointer;
    margin-left: 12px;   
`
// estilizando o icone seta para baixo ao lado da foto altera o perfil
const Button = styled.img`
    position: relative; bottom:1px; right: 43px;
    cursor: pointer;
`
// estilizando o painel de hearts
const UserImg4 = styled.img`
    margin-right: 5px;
`


