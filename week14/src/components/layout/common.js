// src/components/layout/common.js

import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Button = styled.button`
all: unset;
background-color: ${props=>props.mode};
color: white;
padding: 10px;
border-radius: 24px;
margin-top: 10px;

`

export const Title = styled.div`
font-size: 30px;
margin: 20px;
`