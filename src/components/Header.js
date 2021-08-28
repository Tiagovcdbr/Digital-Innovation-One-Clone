/* eslint-disable jsx-a11y/anchor-is-valid */
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
                    <span2>PRO</span2>
                </a>
                <a>
                    <span4><b>Labs</b></span4>
                </a>
                <a>
                    <span3>PRO</span3>
                </a>
                <a>
                    <span5><b>Acelerações</b></span5>
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
// Todos os spans acima e UserImg estão classificados com nomes diferentes para facilitar o entendimento e suas estilizações......
export default Header  
// Definindo o estilo do Header --- ↙↙
const Nav = styled.nav`   
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 10px;
`
// Definindo o estilo do Logo do Header --- ↙↙
const Logo = styled.img`
    width: 134px;
    margin-top: -1px;
    margin-bottom: 1px;
    margin-left: -9px;
    cursor: pointer;
`
// Definindo o estilo NavMenu do Header no caso a imagem do perfil --- ↙↙ ⇩⇩
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 10px;

    a {
        display: flex;
        align-item: center;
        padding: 0 12px;       

        span {
            font-size: 16px;

            cursor: pointer;
            position: relative;

            &::after {
                content: "";
                display: flex;
                margin-bottom: -16px;
                height: 4px;
                background-color: rgb(247, 149, 51);
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacty: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        
        span2 {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 11px;
            margin-top: 3px;
            width: 30px;
            height: 16px;
            box-sizing: border-box;

            content: "pro";
                border-radius: 5px;
                background: rgb(247, 149, 51);
                position: relative; bottom:16px; right: 38px;
                font-weight: bold
        }
        
        span3 {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 11px;
            margin-top: 3px;
            width: 30px;
            height: 16px;
            box-sizing: border-box;

            content: "pro";
                border-radius: 5px;
                background: rgb(247, 149, 51);
                position: relative; bottom:16px; right: 38px;
                font-weight: bold
        }

        span4 {
            font-size: 16px;
            
            cursor: pointer;
            position: relative;
            margin-left: -34px;

            &::after {
                content: "";
                display: flex;
                margin-bottom: -16px;
                height: 4px;
                margin-top: 8px;
                background-color: rgb(247, 149, 51);
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacty: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        span5 {
            font-size: 16px;

            cursor: pointer;
            position: relative;
            margin-left: -42px;

            &::after {
                content: "";
                display: flex;
                margin-bottom: -16px;
                height: 4px;
                background-color: rgb(247, 149, 51);
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacty: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
                
            }
        }
        
        &:hover { 
            span:after {
                transform: scaleX(1);  
                opacity: 1;
            }
        }

        &:hover {
            span4:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }

        &:hover {
            span5:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
// A personalização acima const NavMenu = styled.div está toda configuração do Header foi criado varios spans ↖
// pois fica mais facil trabalhar e fazer alterações de acordo com o gosto próprio.

// Estilizando a imagem do perfil ------------- ↙↙
const UserImg = styled.img`
    border-radius: 50%;
    border: 3px solid rgb(247, 149, 51);
    width: 48px;
    height: 48px;
    cursor: pointer;
    margin-right: 35px;
    position: relative;
`
// estilizando o icone da bandeira do País do perfil --- ↙↙
const UserImg2 = styled.img`
    width: 9px;
    height: 8px;
    align-items: center;
    display: flex;
    margin-top: 55px;
    position: relative; bottom:7px; right: 65px;
`
// estilizando o sino de alerta --- ↙↙
const UserImg3 = styled.img`
    cursor: pointer;
    margin-left: 12px;   
`
// estilizando o icone seta para baixo ao lado da foto altera o perfil --- ↙↙
const Button = styled.img`
    position: relative; bottom:1px; right: 43px;
    cursor: pointer;
`
// estilizando o painel de hearts --- ↙↙
const UserImg4 = styled.img`
    margin-right: 5px;
    cursor: pointer;
`


