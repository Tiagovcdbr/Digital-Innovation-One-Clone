/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <Nav>
            <Status>
                <span><b>LEVEL 21</b></span>
            </Status>
            <Logo src="/images/Tiago.jpg" />
            <NavMenu>
                <h3>Tiago Silva</h3>
                <h4>Experiência 46692/47089</h4>
                <a>
                    <span><b>PRO</b></span>
                </a>                
                <div class="progress">
                    <div className="progress-bar"></div>
                </div>                
            </NavMenu>
        </Nav>
    )
}

export default Home 
{/* Estilizando o perfil principal e adicionando os efeitos de leve de transição que surge ao passar o
mouse o efeito é aplicado com uma duração de 2s e junto a isso o efeito de cor ao fundo somando os 2 efeitos */}
const Nav = styled.nav` 
    justify-content: center;
    align-items: center;
    width: 340px;
    height: 95px;
    margin-top: 28px;
    margin-left: 14%;
    position: relative;
    border: 1px solid transparent;
    color: white;
    border-radius: 6px;
    border-style: solid;

    cursor: pointer;
    transition: .2s ease all;

    &&:hover {
        background-color: rgba(22,22,22,.3);
    }    
        
`
    
// Estilizando o logo do perfil 
const Logo = styled.img`
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 3px solid rgb(247, 149, 51);
    width: 60px;
    height: 64px;
    position: relative;
     display: flex;
     aling-items: center;
     justify-content: center;
     margin-left: 20px;
     margin-top: 10px;
       
`

const NavMenu = styled.div`
    h3 {
        font-size: 17px;
        aling-items: center;
        justify-content: center;
        margin-left: 120px;
        margin-top: -65px;
    }

    h4 {
        font-size: 15px;
        margin-top: -15px;
        margin-left: 120px;
    }

    a {
        display: flex;
        font-size: 14px;
        align-item: center;
        justify-content: center;
        padding: 0 20px;
        margin-left: 65px;
        margin-top: -55px;
        border-radius: 4px;
                max-width: 1px;
                border-right: 25px;
                background: rgb(247, 149, 51);
                position: relative; bottom:4px; right: 5px;
                font-weight: bold
    }   

    .progress {
    margin-top: 31px;
    border-radius: 8px;
    margin-left: 120px;
    width: 53%;
    height: 10px;
    background-color: #777;
    position: relative;
}

.progress .progress-bar {
   position: absolute;
   height: 87%;
   border-radius: 8px;
   background-color: #32a929;
   animation: progress-animation 6s infinite;
}

@keyframes progress-animation {
    0% { width: 0%; }
    
    100% { width: 94%}
    
}
                
`

const Status = styled.div`
    font-size: 12px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    content: LEVEL 21;
    margin-left: 220px;
    margin-top: 18px;
    border-radius: 8px;
     background: #32a929 !important;
     color: white;
     display: flex;
     position: absolute; width: 62px;
    font-weight: bold
`
