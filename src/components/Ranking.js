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
            <Position5>5°</Position5>
            <RankMenu>
                <span>#RANKING DA SEMANA</span>
            </RankMenu>
             <Logo src="https://hermes.digitalinnovation.one/users/student/c3e5b168-30e1-458c-bbe6-00b5947cb419.jpg" alt="Thiago Bernegossi" />
            <Perfil>
                <h3>Thiago Bernegossi</h3>
                <h4>XP 19000/19000</h4>
                <Flag src="https://hermes.digitalinnovation.one/school/flags/328b2afb-b47b-49cb-9e87-9cd08dc77798.png" />
            </Perfil>
        </Nav>
    )
}

export default Ranking

const Nav = styled.div`

`

const RankMenu = styled.div`
    span {
        font-size: 20px;
        font-weight: bold;
        display: flex;
        flex: 1;
        margin-left: 69.2%;
        margin-top: -445px;
        color: rgb(247, 149, 51);        
    }
`

const Logo = styled.img`
    float: right;
    margin-right: 525px;
    margin-top: -330px;
    width: 32px;
    border: 3px solid rgb(247, 149, 51);
    border-radius: 50%;
    
`

const Perfil = styled.div`
    h3 {
        float: right;
        margin-top: -335px;
        margin-right: 392px;
        font-size: 15px;
    }

    h4 {
        float: right;
        margin-top: -315px;
        margin-right: 412px;
        font-size: 14px;
    }
`

const Position1 = styled.div`
    float:right;
    font-size: 14px;
    margin-right: 565px;
    margin-top: -318px;
`

const Position2 = styled.div`
    font-size: 11px;
    margin-left: 15px;
`

const Position3 = styled.div`
    font-size: 11px;
    margin-left: 15px;
`

const Position4 = styled.div`
    font-size: 11px;
    margin-left: 15px;
`

const Position5 = styled.div`
    font-size: 11px;
    margin-left: 15px;
`

const Flag = styled.img`
    float: right;
    width: 9px;
    height: 8px;
    margin-top: -296px;
    margin-right: 539px;    
    border-radius: 50%;
`
