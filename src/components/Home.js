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
                <h4>Experiência 46774/47089</h4>
                <a>
                    <span><b>PRO</b></span>
                </a>
                <Flag src="https://hermes.digitalinnovation.one/school/flags/328b2afb-b47b-49cb-9e87-9cd08dc77798.png" />
                <div class="progress1">
                    <div className="progress-bar1"></div>
                </div>                
            </NavMenu>
        </Nav>
    )
}

export default Home 
{/* Estilizando o perfil principal e adicionando os efeitos de leve de transição que surge ao passar o
mouse o efeito é aplicado com uma duração de 2s e junto a isso o efeito de cor ao fundo somando os 2 efeitos ... ↙↙↙↙ */} 
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
        background-color: rgba(50,50,50,.6);
    }    
        
`

const Flag = styled.img`
    width: 18px;
    height: 16px;
    align-items: center;
    display: flex;
    position: absolute;
    margin-top: 22px;
    margin-left: 45px;
    border-radius: 50%;
`
    
// Estilizando o logo do perfil ... ↙↙↙↙
const Logo = styled.img`
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 3px solid rgb(247, 149, 51);
    width: 58px;
    height: 60px;
    position: relative;
     display: flex;
     aling-items: center;
     margin-left: 20px;
     margin-top: 10px;
       
`
// Estilizando o NavMenu que contem o h3 e h4, os span que está no link <a></a> 
//Também o progress-bar altura, largura e progresso são definidos ... ↙↙↙↙
const NavMenu = styled.div`
    h3 {
        font-size: 17px;
        aling-items: center;
        justify-content: center;
        margin-left: 120px;
        margin-top: -55px;
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
        margin-top: -60px;
        border-radius: 4px;

                display: flex;
                width: 0.1px;
                height: 19px;
                background: rgb(247, 149, 51);
                position: relative; bottom:5px; right: 5px;
                
    }   

    .progress1 {
    margin-top: 22px;
    border-radius: 8px;
    margin-left: 120px;
    width: 53%;
    height: 8px;
    background-color: rgb(250, 250, 250);
    position: relative;
}

.progress1 .progress-bar1 {
   position: relative;
   height: 100%;
   border-radius: 8px;
   background-color: #32a929;
   animation: progress-animation 6s infinite;
}

@keyframes progress-animation {
    0% { width: 0%; }
    
    100% { width: 97%}    
}
                
`
// Estilizando o status que no caso é o level 21 ... ↙↙↙↙
const Status = styled.div`
    font-size: 12px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

            content: LEVEL 21;
            margin-left: 228px;
            margin-top: 23px;
            border-radius: 8px;
            background: #32a929 !important;
            color: white;
            display: flex;
            position: absolute; width: 62px;
            font-weight: bold
`

    
    
