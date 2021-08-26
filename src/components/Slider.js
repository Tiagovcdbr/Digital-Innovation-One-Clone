/* eslint-disable jsx-a11y/alt-text */
import { Container } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

function Slider() {
    return (
        <Card>
            <h4>ACELERE O SEU APRENDIZADO COM TODA A COMUNIDADE</h4>           
            <Container>
                <CardImg src="https://hermes.digitalinnovation.one/home/card-01.png" />
                <CardImg2 src="https://hermes.digitalinnovation.one/home/card-02.png" />
                <CardImg3 src="https://hermes.digitalinnovation.one/home/card-03.png" />
                <CardImg4 src="https://hermes.digitalinnovation.one/home/card-04.png" />
                <IconImg src="//hermes.digitalinnovation.one/home/caret.png" />
                <IconImg2 src="//hermes.digitalinnovation.one/home/caret.png" />
                <IconImg3 src="//hermes.digitalinnovation.one/home/caret.png" />
                <IconImg4 src="//hermes.digitalinnovation.one/home/caret.png" />
                <a>
                    <span><b>CONTINUAR MEU<br></br> BOOTCAMPs</b></span>
                </a>
                <a>
                    <span2><b>PRATICAR COM<br></br>PROJETOS</b></span2>
                </a>
                <a>
                    <span3><b>PUBLICAR UM<br></br>ARTIGO</b></span3>
                </a>
                <a>
                    <span4><b>ACELERAR MINHA<br></br>CARREIRA</b></span4>
                </a>
            </Container>
        </Card>
    )
}

export default Slider

const Card = styled.div`
    height: 167px;
    display: flex;
    justify-content: center;

    h4{
        font-size: 22.5px;
        margin-top: -100px;
        text-align: left;
        position: absolute;        
    }

    a {
        span {
        cursor: pointer;
        font-size: 14px;
        display: flex;
        margin-left: 320px;
        margin-top: -54px;
        }        
    }
    a {
        span2 {
        cursor: pointer;
        font-size: 14px;
        display: flex;
        margin-left: 487px;
        margin-top: -40px;
        }        
    }
    a {
        span3 {
        cursor: pointer;
        font-size: 14px;
        display: flex;
        margin-left: 657px;
        margin-top: -38px;
        }        
    }
    a {
        span4 {
        cursor: pointer;
        font-size: 14px;
        display: flex;
        margin-left: 826px;
        margin-top: -38px;
        }        
    }
`

const CardImg = styled.img`
    
    cursor: pointer;
    width: 161px;
    border-radius: 10px;
    margin-top: -54px;
    display: flex;
    margin-left: 300px;

    &&:hover {
        opacity: 1;
        background-color: #FF8C00!important;
        border-style: solid;
        border: 1px solid transparent;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: 2s        
    }
`

const CardImg2 = styled.img`
    cursor: pointer;
    width: 161px;
    border-radius: 10px;
    margin-top: -222px;
    display: flex;
    margin-left: 469px;

    &&:hover {
        opacity: 1;
        background-color: #FF8C00!important;
        border-style: solid;
        border: 1px solid transparent;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: 2s        
    }
`

const CardImg3 = styled.img`
    cursor: pointer;
    width: 162px;
    border-radius: 10px;
    margin-top: -224px;
    display: flex;
    margin-left: 638px;

    &&:hover {
        opacity: 1;
        background-color: #FF8C00!important;
        border-style: solid;
        border: 1px solid transparent;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: 2s        
    }
`

const CardImg4 = styled.img`
    cursor: pointer;
    width: 161px;
    border-radius: 10px;
    margin-top: -223px;
    display: flex;
    margin-left: 808px;

    &&:hover {
        opacity: 1;
        background-color: #FF8C00!important;
        border-style: solid;
        border: 1px solid transparent;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: 2s        
    }
`

const IconImg = styled.img`
    display: flex;
    position: absolute;
    width: 14px;
    margin-left: 412px;
    margin-top: -29px;
`

const IconImg2 = styled.img`
    display: flex;
    position: absolute;
    width: 14px;
    margin-left: 563px;
    margin-top: -29px;
`

const IconImg3 = styled.img`
    display: flex;
    position: absolute;
    width: 14px;
    margin-left: 717px;
    margin-top: -29px;
`

const IconImg4 = styled.img`
    display: flex;
    position: absolute;
    width: 14px;
    margin-left: 902px;
    margin-top: -29px;
`


