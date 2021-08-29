/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'

function Ranking() {
    return (
        <Nav>
            <Position1>1°</Position1>
            <Position2>2°</Position2>
            <Position3>3°</Position3>
            <Position4>4°</Position4>
            <Position5></Position5>
            <RankMenu>
                <span>#RANKING DA SEMANA</span>
            </RankMenu>
             <Logo src="https://hermes.digitalinnovation.one/users/student/c3e5b168-30e1-458c-bbe6-00b5947cb419.jpg" alt="Thiago Bernegossi" />
            <Perfil>
                <h3>Thiago Bernegossi</h3>
                <h4>XP 19000/19000</h4>
                <Flag src="https://hermes.digitalinnovation.one/school/flags/328b2afb-b47b-49cb-9e87-9cd08dc77798.png" />
                <div class="progress2">
                    <div className="progress-bar2"></div>
                </div> 
            </Perfil>
            <Logo2 src="https://hermes.digitalinnovation.one/users/student/ed410fe2-f2da-491e-9d0f-37261e717ef7.jpg" alt="Eduardo Hörnke" />
            <Perfil2>
                <h3>Eduardo Hörnke</h3>
                <h4>XP 11325/19000</h4>
                <Flag2 src="https://hermes.digitalinnovation.one/school/flags/328b2afb-b47b-49cb-9e87-9cd08dc77798.png" />
                <div class="progress-3">
                    <div className="progress-bar-3"></div>
                </div>  
            </Perfil2>
            <Logo3 src="https://hermes.digitalinnovation.one/users/student/7750f306-e4f5-4b4a-ade5-f7831bafc12b.jpg" alt="Vinicius Cortez" />
            <Perfil3>
                <h3>Vinicius Cortez</h3>
                <h4>XP 8190/19000</h4>
                <Flag3 src="https://hermes.digitalinnovation.one/school/flags/328b2afb-b47b-49cb-9e87-9cd08dc77798.png" />
                <div class="progress-4">
                    <div className="progress-bar-4"></div>
                </div>  
            </Perfil3>
            <Logo4 src="https://hermes.digitalinnovation.one/users/student/513b97e7-f3e8-4b62-8654-0fc4d96bd22e.png" alt="Ricardo Shikata" />
            <Perfil4>
                <h3>Ricardo Shikata</h3>
                <h4>XP 7572/19000</h4>
                <Flag4 src="https://hermes.digitalinnovation.one/school/flags/328b2afb-b47b-49cb-9e87-9cd08dc77798.png" />
                <div class="progress-5">
                    <div className="progress-bar-5"></div>
                </div>
            </Perfil4>
             <Logo5 src="https://hermes.digitalinnovation.one/users/student/0ee46ea9-e38a-4de5-86fb-e4d458975636.jpg" alt="Jair Reis" />
            <Perfil5>
                <h3>Jair Reis</h3>
                <h4>XP 7444/19000</h4>
                <Flag5 src="https://hermes.digitalinnovation.one/school/flags/328b2afb-b47b-49cb-9e87-9cd08dc77798.png" />
                <div class="progress-6">
                    <div className="progress-bar-6"></div>
                </div>                
            </Perfil5>
            <span>5°</span>
        </Nav>
    )
}

export default Ranking

const Nav = styled.div`
    position: absolute;
    margin-top: 140px;
    background-color: rgba(50,50,50,.6);
     
    span {
        font-size:14px;
        margin-left: 1342px;
        margin-bottom: 318px;
    }
`

const RankMenu = styled.div`
    span {
        position: relative;
        font-size: 19px;
        font-weight: bold;
        display: flex;
        flex: 1;
        margin-left: 69.6%;
        margin-top: -468px;
        color: rgb(247, 149, 51);        
    }
` 

// Estlizando a imagem do perfil 1 no Ranking
const Logo = styled.img`
    position: relative;
    float: right;
    margin-right: 513px;
    margin-top: -468px;
    width: 32px;
    border: 3px solid rgb(247, 149, 51);
    border-radius: 50%;
    
`

// Estlizando a imagem do perfil 2 no Ranking
const Logo2 = styled.img`
    float: right;
    margin-right: 515px;
    margin-top: -395px;
    width: 32px;
    border: 3px solid rgb(247, 149, 51);
    border-radius: 50%;
`

const Logo3 = styled.img`
    float: right;
    margin-right: 513px;
    margin-top: -322px;
    width: 32px;
    border: 3px solid rgb(247, 149, 51);
    border-radius: 50%;
`

const Logo4 = styled.img`
    float: right;
    margin-right: 512px;
    margin-top: -255px;
    width: 32px;
    border: 3px solid rgb(247, 149, 51);
    border-radius: 50%;
`

const Logo5 = styled.img`
    float: right;
    margin-right: 510px;
    margin-top: -185px;
    width: 32px;
    border: 3px solid rgb(247, 149, 51);
    border-radius: 50%;
`

// Imagem do perfil nome Level e barra de Experiência criados e configurados do perfil 1 
const Perfil = styled.div`
    h3 {
        float: right;
        margin-top: -470px;
        margin-right: 380px;
        font-size: 15px;
    }

    h4 {
        float: right;
        margin-top: -450px;
        margin-right: 400px;
        font-size: 14px;
    }

        .progress2 {
    float: right;
    margin-top: -430px;
    border-radius: 8px;
    margin-right: 323px;
    width: 9.7%;
    height: 8px;
    background-color: rgb(250, 250, 250);
    position: relative;
}

.progress2 .progress-bar2 {
   position: absolute;
   height: 100%;
   border-radius: 8px;
   background-color: #32a929;
   animation: progress-animation 6s infinite;
}

@keyframes progress-animation {
    0% { width: 0%; }
    
    100% { width: 100%}    
}
        
`

const Perfil2 = styled.div`
    h3 {
        float: right;
        margin-top: -400px;
        margin-right: 395px;
        font-size: 15px;
    }

    h4 {
        float: right;
        margin-top: -380px;
        margin-right: 399px;
        font-size: 14px;
    }
    
    .progress-3 {
    float: right;
    margin-top: -360px;
    border-radius: 8px;
    margin-right: 324px;
    width: 9.7%;
    height: 8px;
    background-color: rgb(250, 250, 250);
    position: relative;
}

.progress-3 .progress-bar-3 {
   position: absolute;
   height: 100%;
   border-radius: 8px;
   background-color: #32a929;
   animation: progress-animation 6s infinite;
}

@keyframes progress-animation {
    0% { width: 0%; }
    
    100% { width: 65%}    
}        
    
`

const Perfil3 = styled.div`
    h3 {
        float: right;
        margin-top: -325px;
        margin-right: 408px;
        font-size: 15px;
    }

    h4 {
        float: right;
        margin-top: -306px;
        margin-right: 408px;
        font-size: 14px;
    }
    
    .progress-4 {
    float: right;
    margin-top: -286px;
    border-radius: 8px;
    margin-right: 327px;
    width: 9.7%;
    height: 8px;
    background-color: rgb(250, 250, 250);
    position: relative;
}

.progress-4 .progress-bar-4 {
   position: absolute;
   height: 100%;
   border-radius: 8px;
   background-color: #32a929;
   animation: progress-animation 6s infinite;
}

@keyframes progress-animation {
    0% { width: 0%; }
    
    100% { width: 65%}    
}
    
`

const Perfil4 = styled.div`
    h3 {
        float: right;
        margin-top: -260px;
        margin-right: 402px;
        font-size: 15px;
    }

    h4 {
        float: right;
        margin-top: -242px;
        margin-right: 408px;
        font-size: 14px;
    }
    
    .progress-5 {
    float: right;
    margin-top: -221px;
    border-radius: 8px;
    margin-right: 325px;
    width: 9.7%;
    height: 8px;
    background-color: rgb(250, 250, 250);
    position: relative;
}

.progress-5 .progress-bar-5 {
   position: absolute;
   height: 100%;
   border-radius: 8px;
   background-color: #32a929;
   animation: progress-animation 6s infinite;
}

@keyframes progress-animation {
    0% { width: 0%; }
    
    100% { width: 65%}    
}

`

const Perfil5 = styled.div`
    h3 {
        float: right;
        margin-top: -190px;
        margin-right: 450px;
        font-size: 15px;
    }

    h4 {
        float: right;
        margin-top: -170px;
        margin-right: 407px;
        font-size: 14px;
    }
    
    .progress-6 {
    float: right;
    margin-top: -150px;
    border-radius: 8px;
    margin-right: 325px;
    width: 9.7%;
    height: 8px;
    background-color: rgb(250, 250, 250);
    position: relative;
}

.progress-6 .progress-bar-6 {
   position: absolute;
   height: 100%;
   border-radius: 8px;
   background-color: #32a929;
   animation: progress-animation 6s infinite;
}

@keyframes progress-animation {
    0% { width: 0%; }
    
    100% { width: 65%}    
}
`

const Position1 = styled.div`
    float:right;
    font-size: 14px;
    margin-right: 553px;
    margin-top: -460px;
`

const Position2 = styled.div`
    float:right;
    font-size: 14px;
    margin-right: 555px;
    margin-top: -385px;
`

const Position3 = styled.div`
    float:right;
    font-size: 14px;
    margin-right: 554px;
    margin-top: -312px;
`

const Position4 = styled.div`
    float:right;
    font-size: 14px;
    margin-right: 554px;
    margin-top: -246px;
`

const Position5 = styled.div`
    
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 14px;
    margin-left: 1378px;
    margin-top: -48px;
    
`

const Flag = styled.img`
    float: right;
    width: 10px;
    height: 10px;
    margin-top: -438px;
    margin-right: 527px;    
    border-radius: 50%;
`

const Flag2 = styled.img`
    float: right;
    width: 11px;
    height: 10px;
    margin-top: -365px;
    margin-right: 529px;    
    border-radius: 50%;
`

const Flag3 = styled.img`
    float: right;
    width: 11px;
    height: 10px;
    margin-top: -290px;
    margin-right: 527px;    
    border-radius: 50%;
`

const Flag4 = styled.img`
    float: right;
    width: 11px;
    height: 10px;
    margin-top: -224px;
    margin-right: 527px;    
    border-radius: 50%;
`

const Flag5 = styled.img`
    float: right;
    width: 11px;
    height: 10px;
    margin-top: -153px;
    margin-right: 525px;    
    border-radius: 50%;
`

