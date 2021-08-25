import React from 'react'
import styled from 'styled-components'


function Menu() {
    return (
        <Nav>
            <List src="/images/Cursos.png" />
                <h3>Cursos</h3>               
            <List src="/images/Bootcamps.png" />
                <h3>Bootcamps</h3>
            <List src="/images/Labs.png" />
                <h3>Labs</h3>
            <List src="/images/Acelerações.png" />
                <h3>Acelerações</h3>
            <List src="/images/Artigos.png" />
                <h3>Artigos</h3>
        </Nav>
    )
}

export default Menu

const Nav = styled.nav`
    cursor: pointer;
    margin-top: 37px;
    
    justify-content: center;
    align-items: center;
    margin-top: 28px;
    margin-left: 15%;    

    h3 {
        margin-left: 45px;
        margin-top: -33px;                                             
    }
    
    height: 233px;
    width: 155px;

    position: absolute;
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
const List = styled.img`
    justify-content: center;
    align-items: center; 
       
`
