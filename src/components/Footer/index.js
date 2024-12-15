import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';

const FooterContainer = styled.div`
  width: 100%;
  background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
  color: ${({ theme }) => theme.text_primary};
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;`
  ;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  text-align: center;`
  ;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;`
  ;
const Logo = styled.h1`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 1rem;
  color: transparent;
  background: linear-gradient(70deg, #be1adb, #854CE6,#fff ); 
  -webkit-background-clip: text;
  transition: all 0.3s ease-in-out;
  `
  ;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  // color: #d1d1d1;
  max-width: 300px;`
  ;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  // text-decoration: none !important;`
  ;

const NavLink = styled.a`
  color: #d1d1d1;
  text-decoration: none !important;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  &:hover {
    color: #be1adb;
  }`
  ;

const ContactInfo = styled.div`
   font-size: 1rem;
  // color: transparent;
  // background: linear-gradient(70deg, #be1adb, #854CE6, #fff); 
  // -webkit-background-clip: text;
  `;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;`
  ;

const SocialMediaIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: ${({ theme }) => theme.text_primary};
  font-size: 2rem;
  transition: background 0.3s ease, transform 0.3s ease;
  &:hover {
    transform: scale(1.6);
    color:#be1adb;
  }`
  ;

const Copyright = styled.p`
  margin-top: 2rem;
  font-size: 0.9rem;
  text-align: center;
  color: transparent;
  background: linear-gradient(70deg, #be1adb, #854CE6, #fff); 
  -webkit-background-clip: text;`

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Section>
          <Logo>Sohail Dawoodi</Logo>
          <Description>
            A passionate developer creating impactful web experiences. Let's build the future together!
          </Description>
        </Section>
        <Section>
          
          <Logo>Quick Links</Logo>
          <Nav>
            <NavLink href="#about">About</NavLink>
            <NavLink href='#skills'>Skills</NavLink>
            <NavLink href='#experience'>Experience</NavLink>
            <NavLink href='#projects'>Projects</NavLink>
            <NavLink href='#education'>Education</NavLink>
          </Nav>
        </Section>
        <Section>
         <Logo>Contact Us</Logo>
          <ContactInfo>
            Email:sohaildavoodi41@gmail.com <br />
            Phone: +93 729896899
          </ContactInfo>
          <SocialMediaIcons>
            <SocialMediaIcon href={Bio.facebook} target="_blank">
              <FacebookIcon />
            </SocialMediaIcon>
            <SocialMediaIcon href={Bio.telegram} target="_blank">
              <TelegramIcon />
            </SocialMediaIcon>
            <SocialMediaIcon href={Bio.linkedin} target="_blank">
              <LinkedInIcon />
            </SocialMediaIcon>
            <SocialMediaIcon href={Bio.instagram} target="_blank">
              <InstagramIcon />
            </SocialMediaIcon>
          </SocialMediaIcons>
        </Section>
      </FooterWrapper>
      <Copyright>With passion and expertise, we bring your online projects to life. Contact us for web design and development, and take your business to the next level.</Copyright>
    </FooterContainer>
  );
}

export default Footer;