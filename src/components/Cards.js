/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'

function Cards() {
    return (
        <CardSlick>
            <Card1 src="/images/slide1.png" alt="slide1" />
            <Card2 src="/images/slide2.png" alt="slide2" />
            <Card3 src="/images/slide3.png" alt="slide3" />
            <Card4 src="/images/slide4.png" alt="slide4" />
            <Card5 src="/images/slide5.png" alt="slide5" />
            <Card6 src="/images/slide6.png" alt="slide6" />
            <Card7 src="/images/slide7.png" alt="slide6" />
            <Card8 src="/images/feed1.png" alt="feed1" />
            <Card9 src="/images/feed2.png" alt="feed2" />
            <Card10 src="/images/feed3.png" alt="feed3" />
            <Card11 src="/images/feed4.png" alt="feed4" />
            <Card12 src="/images/feed5.png" alt="feed5" />
            <Feed>
                <span>Feed</span>                
            </Feed>
            <Todos>
                <span2>Todos</span2>
            </Todos>
            <Topicos>
                <span3>Tópicos</span3>
            </Topicos>
            <Artigos>
                <span4>Artigos</span4>
            </Artigos>
        </CardSlick>
    )
}

export default Cards

const CardSlick = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    margin-top: 35px;
    margin-left: 952px;
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
    margin-top: 21px;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
`

const Card3 = styled.img`
    position: absolute;
    width: 687px;
    height: 180px;
    display: flex;
    justify-content: center;
    margin-top: 221px;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
`

const Card4 = styled.img`
    position: absolute;
    width: 692px;
    height: 180px;
    display: flex;
    justify-content: center;
    margin-top: 422px;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
`

const Card5 = styled.img`
    position: absolute;
    width: 688px;
    height: 180px;
    display: flex;
    justify-content: center;
    margin-top: 625px;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
`
const Card6 = styled.img`
    position: absolute;
    width: 688px;
    height: 180px;
    display: flex;
    justify-content: center;
    margin-top: 830px;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
`

const Card7 = styled.img`
    position: absolute;
    width: 684px;
    height: 180px;
    display: flex;
    justify-content: center;
    margin-top: 1036px;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
`

const Card8 = styled.img`
    position: absolute;
    cursor: pointer;
    margin-top: 1280px;
`

const Card9 = styled.img`
    position: absolute;
    cursor: pointer;
    margin-top: 1550px;
`

const Card10 = styled.img`
    position: absolute;
    cursor: pointer;
    margin-top: 1815px;
`

const Card11 = styled.img`
    position: absolute;
    cursor: pointer;
    margin-top: 2080px;
`

const Card12 = styled.img`
    position: absolute;
    cursor: pointer;
    margin-top: 2352px;
`

const Feed = styled.div`
    span {
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        position: relative;
        display: flex;
        font-size: 22px;
        font-weight: bold;
        margin-top: 1230px;
        margin-left: -630px;        
    }    
`

const Todos = styled.div`
    span2 {
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        position: relative;
        display: flex;
        font-size: 15px;
        font-weight: bold;
        margin-top: 1235px;
        margin-right: -150px; 

        cursor: pointer;
        color: rgb(247, 149, 51);                       
    }
`

const Topicos = styled.div`
    span3 {
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        position: relative;
        display: flex;
        font-size: 15px;
        font-weight: bold;
        margin-top: 1234px;
        margin-right: -370px;

        cursor: pointer;
    }
`

const Artigos = styled.div`
    span4 {
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        position: relative;
        display: flex;
        font-size: 15px;
        font-weight: bold;
        margin-top: 1234px;
        margin-right: -590px;

        cursor: pointer;
    }
`
