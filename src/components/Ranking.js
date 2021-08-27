import React from 'react'
import styled from 'styled-components'

function Ranking() {
    return (
        <Nav>
            <RankMenu>
                <span>#RANKING DA SEMANA</span>
            </RankMenu>
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
        position: relative;
        flex: 1;
        margin-left: 70.1%;
        margin-top: -390px;
        color: rgb(247, 149, 51);        
    }
`
