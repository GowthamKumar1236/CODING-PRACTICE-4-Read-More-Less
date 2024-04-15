// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:40px;
min-height:100vh;
`

export const Heading = styled.h1`
font-family:"Roboto";
font-size:22px;
color:#1e293b;
font-weight:600;
`

export const Paragraph = styled.p`
font-family:"Roboto";
font-size:15px;
color:#334155;
margin-top:0px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const Img = styled.img`
  width: 80%;
  margin-top:15px;
    @media screen and (min-width: 768px) {
  width: 40%;
  }
`
export const Description = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: #334155;
   width:80%;
  line-height:1.5;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    width:40%;
  }
`

export const BtnContainer = styled.div`
text-align:left;
width:80%;
 @media screen and (min-width: 768px) {
   text-align:center;
  }
`

export const ReadButton = styled.button`
  height: 38px;
  width: 82px;
  background-color: #1f81ff;
  color: #ffffff;
  font-size: 11px;
  font-family:"Roboto";
  outline: none;
  border-width: 0px;
  border-style:solid;
  cursor: pointer;
  border-radius: 8px;
`
