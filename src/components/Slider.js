import React from 'react'
import styled from 'styled-components'

function Slider() {
    return (
        <Card>
            <h4>ACELERE O SEU APRENDIZADO COM TODA A COMUNIDADE</h4>
            <CardList >
                <CardImg src="/images/card.png" />
            </CardList>
        </Card>
    )
}

export default Slider

const Card = styled.div`
    display: flex;
    justify-content: center;

    h4{
        font-size: 23px;
        margin-top: -100px;
        position: fixed;
    }

`

const CardList = styled.div`
    
`

const CardImg = styled.img`
    position: relative;
    border-radius: 8px;
    margin-right: 487px;
    margin-top: -52px;
    width: 164px;
`
