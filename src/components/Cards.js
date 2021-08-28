/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'

function Cards() {
    return (
        <CardSlick>
            <Card1 src="/images/slide1.png" alt="slide1" />
            <Card2 src="/images/slide2.png" alt="slide2" />
            <Card3 src="/images/slide3.png" alt="slide3" />
        </CardSlick>
    )
}

export default Cards

const CardSlick = styled.div`   
    display: flex;
    justify-content: center;
`

const Card1 = styled.img`
    position: absolute;
    width: 690px;
    height: 180px;
    display: flex;
    justify-content: center;
    margin-top: -175px;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
`

const Card2 = styled.img`
    position: absolute;
    width: 690px;
    height: 180px;
    display: flex;
    justify-content: center;
    margin-top: 23px;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
`

const Card3 = styled.img`
    position: absolute;
    width: 690px;
    height: 180px;
    display: flex;
    justify-content: center;
    margin-top: 221px;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
`