import React from 'react';
import { FooterContainer, FooterContents, FooterIcons } from './FooterStyle';
import { Facebook, Github, Linkedin } from './img';

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterContents>
                    <h3>Simarpreet Singh</h3>
                    <FooterIcons>
                        <a href="https://github.com/IAmSimarpreetSingh">
                            <img src={Github} alt="GithubIco" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100075353605328">
                            <img src={Facebook} alt="FacebookIco" />
                        </a>
                        <a href="https://www.linkedin.com/in/simarpreet-singh-b9293121b/">
                            <img src={Linkedin} alt="LinkedinIco" />
                        </a>
                    </FooterIcons>
                    <a className='apiLink' href="https://corona.lmao.ninja/v2/countries/">API Link</a>
                    <br />
                    <a href="https://icons8.com">Covid-19 icon by Icons8</a>
                </FooterContents>
            </FooterContainer>
        </>
    )
}

export default Footer;
