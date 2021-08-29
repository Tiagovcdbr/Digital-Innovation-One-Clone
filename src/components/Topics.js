/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import styled from 'styled-components'

function Topics() {
    return (
        <Menu>
            <SubMenu>
                <h2>#ÚLTIMOS TOP ARTIGOS</h2>
                <span><b>10 anos de Kotlin - #DIOProGrátis<p>#Kotlin</p></b></span>
                <img src="/images/views.png" alt="image" />
                <span2><b>3080</b></span2>
                <Img2 src="/images/comments.png" alt="image2" />
                <span3><b>1</b></span3>
            </SubMenu>
            <SubMenu2>
                <span><b>A DIO VAI DAR UM MÊS DE DIO PRO GRATIS</b></span>
                <img src="/images/views.png" alt="image" />
                <span2><b>3029</b></span2>
                <Img2 src="/images/comments.png" alt="image2" />
                <span3><b>33</b></span3>
            </SubMenu2>
            <SubMenu3>
                <span><b>MSN em desenvolvimento (clássico)<p>#JavaScript#Node.js#MongoDB</p></b></span>
                <img src="/images/views.png" alt="image" />
                <span2><b>2671</b></span2>
                <Img2 src="/images/comments.png" alt="image2" />
                <span3><b>4</b></span3>
            </SubMenu3>
            <SubMenu4>
                <span><b>#DIOProGrátis | Como medir o desenvolvimento de um aluno?</b></span>
                <img src="/images/views.png" alt="image" />
                <span2><b>2671</b></span2>
                <Img2 src="/images/comments.png" alt="image2" />
                <span3><b>4</b></span3>
            </SubMenu4>
            <SubMenu5>
                <span><b>Primeira pesquisa salarial na área de tecnologia da DIO</b></span>
                <img src="/images/views.png" alt="image" />
                <span2><b>1827</b></span2>
                <Img2 src="/images/comments.png" alt="image2" />
                <span3><b>11</b></span3>
                <span4>VER TODOS</span4>
            </SubMenu5>
        </Menu>
    )
}

export default Topics

const Menu = styled.div`    
        
`

const SubMenu = styled.div`
    font-size: 12px;
    position: absolute;
    margin-left: 1320px;
    margin-top: 59px;
    height: 590px;
    color: rgb(247, 149, 51);
    padding: 4px;

    border: 4px;
        width: 280px;
        border-radius: 5px;
        border: 1px none rgb(250, 250, 250);
        background-color: #20212c;

        span {
            cursor: pointer;
            position: absolute;
            margin-top: -10px;
            font-size: 14px;
            color: white;

            &:hover {
                color: rgb(247, 149, 51);
                transition: .2s ease all;
            }
        }

        img {
            cursor: pointer;
            position: absolute;
            margin-top: 55px;
        }

        span2 {
            cursor: pointer;
            font-size: 14px;
            position: absolute;
            color: white;
            margin-left: 27px;
            margin-top: 58px;
        }

        span3 {
        cursor: pointer;
        position: absolute;
        font-size: 12px;
        color: white;
        margin-left: 105px;
        margin-top: 58px;
    }
    
`

const SubMenu2 = styled.div`
    font-size: 12px;
    position: absolute;
    margin-left: 1320px;
    margin-top: 218px;
    height: 770px;
    color: rgb(247, 149, 51);
    padding: 4px;

    border: 4px;
        width: 280px;

        span {
            cursor: pointer;
            position: absolute;
            margin-top: -10px;
            font-size: 14px;
            color: white;

            &:hover {
                color: rgb(247, 149, 51);
                transition: .2s ease all;
            }
        }

        img {
            cursor: pointer;
            position: absolute;
            margin-top: 50px;
        }

        span2 {
            cursor: pointer;
            font-size: 14px;
            position: absolute;
            color: white;
            margin-left: 27px;
            margin-top: 54px;
        }

        span3 {
        cursor: pointer;
        position: absolute;
        font-size: 12px;
        color: white;
        margin-left: 105px;
        margin-top: 54px;
    }
`

const SubMenu3 = styled.div`
    font-size: 12px;
    position: absolute;
    margin-left: 1320px;
    margin-top: 325px;
    height: 770px;
    color: rgb(247, 149, 51);
    padding: 4px;

    border: 4px;
        width: 280px;

        span {
            cursor: pointer;
            position: absolute;
            margin-top: -10px;
            font-size: 14px;
            color: white;

            &:hover {
                color: rgb(247, 149, 51);
                transition: .2s ease all;
            }
        }

        img {
            cursor: pointer;
            position: absolute;
            margin-top: 55px;
        }

        span2 {
            cursor: pointer;
            font-size: 14px;
            position: absolute;
            color: white;
            margin-left: 27px;
            margin-top: 58px;
        }

        span3 {
        cursor: pointer;
        position: absolute;
        font-size: 12px;
        color: white;
        margin-left: 105px;
        margin-top: 58px;
    }
`

const SubMenu4 = styled.div`
    font-size: 12px;
    position: absolute;
    margin-left: 1320px;
    margin-top: 432px;
    height: 770px;
    color: rgb(247, 149, 51);
    padding: 4px;

    border: 4px;
        width: 280px;

        span {
            cursor: pointer;
            position: absolute;
            margin-top: -10px;
            font-size: 14px;
            color: white;

            &:hover {
                color: rgb(247, 149, 51);
                transition: .2s ease all;
            }
        }

        img {
            cursor: pointer;
            position: absolute;
            margin-top: 49px;
        }

        span2 {
            cursor: pointer;
            font-size: 14px;
            position: absolute;
            color: white;
            margin-left: 27px;
            margin-top: 52px;
        }

        span3 {
        cursor: pointer;
        position: absolute;
        font-size: 12px;
        color: white;
        margin-left: 105px;
        margin-top: 54px;
    }
`

const SubMenu5 = styled.div`
    font-size: 12px;
    position: absolute;
    margin-left: 1320px;
    margin-top: 532px;
    height: 770px;
    color: rgb(247, 149, 51);
    padding: 4px;

    border: 4px;
        width: 280px;

        span {
            cursor: pointer;
            position: absolute;
            margin-top: -10px;
            font-size: 14px;
            color: white;

            &:hover {
                color: rgb(247, 149, 51);
                transition: .2s ease all;
            }
        }

        img {
            cursor: pointer;
            position: absolute;
            margin-top: 49px;
        }

        span2 {
            cursor: pointer;
            font-size: 14px;
            position: absolute;
            color: white;
            margin-left: 27px;
            margin-top: 52px;
        }

        span3 {
        cursor: pointer;
        position: absolute;
        font-size: 12px;
        color: white;
        margin-left: 105px;
        margin-top: 54px;
    }

    span4 {
        cursor: pointer;
        position: absolute;
        font-size: 16px;
        color: white;
        margin-top: 87px;
        margin-left: 180px;
    }
`

const Img2 = styled.img`
    position: absolute;
    margin-left: 70px;    
`
    
