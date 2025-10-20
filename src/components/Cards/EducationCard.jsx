import React from 'react'
import styled from 'styled-components'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color:lightgray;
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    `
const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 4px 16px rgba(57, 127, 226, 0.45));
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    // overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    border: 0.5px solid #3980e3;
    &:hover{
        box-shadow: 0px 0px 20px rgba(7, 173, 62, 0.3);
        transform: translateY(-10px);
        // border: 0.1px solid  lightgray;
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }

    // box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`


const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled.img`
    height: 50px;
    width:50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
    height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Name = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: transparent;
    background: linear-gradient(90deg, #3980e3,#07ad3e);
    -webkit-background-clip: text;
    transition: all 0.3s ease-in-out;
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Degree = styled.div`
    font-size: 14px;
    font-weight: 500;
    color:lightgray;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color:gray;
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Grade = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: gray;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`



const EducationCard = ({ education }) => {
    return (
        <Card>
            <Top>
                <Image src={education.img} />
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
            </Top>
            <Grade><b>Grade: </b>{education.grade}</Grade>
            <Description>
                <Span>{education.desc}</Span>
            </Description>
        </Card>
    )
}

export default EducationCard