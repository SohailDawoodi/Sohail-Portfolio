import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
// import _default from '../../themes/default';
export const Nav = styled.div
  `background-color: #171721;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        transition: 0.8s all ease;
    }`
  ;

export const NavbarContainer = styled.div
  `display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;

export const NavLogo = styled(LinkR)
  `width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
        padding: 0 0px;
    }
`;

export const Span = styled.span
  `font-weight: bold;
    font-size: 24px;
    color: lightgray;
`;

export const NavItems = styled.ul
  `width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 22px;
    padding: 0 6px;
    margin-left: 20px;
    list-style: none;
    @media screen and (max-width: 768px) {
        display: none;
    }`
  ;

export const NavLink = styled.a
  `position: relative; 
    font-weight: 750;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    transition: all 0.3s ease-in-out;

    &:hover {
    color: transparent;
    background: linear-gradient(90deg, #3980e3,#07ad3e);
    -webkit-background-clip: text;}
    &::after {
        content: ''; 
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 0;
        height: 3px; 
        border-radius: 20px;
        background: linear-gradient(270deg, #3980e3,#07ad3e);

        transition: width 0.3s ease-in-out; 
    }

    &:hover::after {
        width: 100%; 
    }

    &.active::after {
        width: 100%; 
    }
`;

export const GitHubButton = styled.a
  `justify-content: center;
    display: flex;
    align-items: center;
    height: 70%;
    border-radius: 20px;
    background: linear-gradient(75deg, #3980e3,#07ad3e);
    color: white;
    cursor: pointer;
    padding: 0 20px;
    font-weight: 500;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.5s ease-in-out;
    &:hover {
    background: linear-gradient(270deg, #3980e3,#07ad3e);
    color:black;
    // background: #3980e2;
    border: none;
    }
    @media screen and (max-width: 768px) { 
        font-size: 14px;
        padding: 0 16px;
    }
`;

export const ButtonContainer = styled.div
  ` width: 80%;  
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 6px;
    @media screen and (max-width: 768px) {
        display: none;
    }`
  ;

export const MobileIcon = styled.div
  `display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.5rem;
        cursor: pointer;
        color: #fff; /* سفید */
    }
`;

export const MobileMenu = styled.div
  `display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: #171721; /* پس‌زمینه تیره */
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`;

export const MobileLink = styled.a
  `font-weight: 750;
    cursor: pointer;
    text-decoration: none;
    color: #fff; 
    transition: all 0.3s ease-in-out;
    &:hover {
        color: #07ad3e; 
    }
`;