import React from 'react';
import styled from 'styled-components';
import Home from './Images/home.svg';
import Discover from './Images/discover.svg';
import Photos from './Images/photos.svg';
import Contact from './Images/mail.svg';
import Avatar from './Images/christopher-campbell-28567-unsplash.png';

const OverlayWrap = styled.div`
    padding: 40px 0 0 0;
    box-shadow: 0 0 60px #00000099;
    display: none;
    height: 100vh;
    max-width: 288px;
    width: 100%;
    position: absolute;
    background-color: #f6f8f9;
    transition: opacity 2s;
    animation: 300ms ease-in slidein;

    @media all and (max-width: 767px) {
        display: block;
    }

    @keyframes slidein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const Logo = styled.div`
    font-size: 13px;
    font-weight: bold;
    color: #fa6980;
    text-transform: uppercase;
    margin-bottom: 86px;
    padding-left: 40px;
`;

const NavList = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 40px;
`;

const NavItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 34px;
`;

const NavIcon = styled.div`
    width: 16px;
    height: 16px;
    margin-right: 30px;

    img {
        width: 100%;
    }
`;

const NavLink = styled.div`
    font-size: 11px;
    color: #343638;
    text-transform: uppercase;
    opacity: ${({ home }) => (home ? '1' : '0.5')};
    cursor: pointer;
    font-weight: bold;
`;

const OverlayFooter = styled.div`
    background-color: #000000;
    opacity: 0.23;
    padding: 58px 65px 10px 40px;
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const FooterList = styled.div`
    display: flex;
    flex-direction: column;
`;

const FooterListItem = styled.div`
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    font-size: 11px;
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 28px;
`;

const FooterSocial = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 140px;
    margin-top: 32px;
`;

const FooterSocialIcon = styled.div`
    width: 16px;
    height: 16px;
`;

const icons = [Home, Discover, Photos, Contact, Avatar];

function Overlay(props) {
    const {
        linksColumn1,
        linksColumn2,
        linksColumn3,
        socialIcons,
        toggleOverlay,
    } = props;

    return (
        <OverlayWrap>
            <Logo>Logo</Logo>
            <NavList>
                {linksColumn1.map((item, index) => (
                    <NavItem key={item} onClick={toggleOverlay}>
                        <NavIcon>
                            <img src={icons[index]} alt="" />
                        </NavIcon>
                        <NavLink home={index === 0}>{item}</NavLink>
                    </NavItem>
                ))}
                <NavItem onClick={toggleOverlay}>
                    <NavIcon>
                        <img src={Avatar} alt="" />
                    </NavIcon>
                    <NavLink>profile</NavLink>
                </NavItem>
            </NavList>
            <OverlayFooter>
                <FooterList>
                    {linksColumn2.map((item) => (
                        <FooterListItem key={item}>{item}</FooterListItem>
                    ))}
                </FooterList>
                <FooterList>
                    {linksColumn3.map((item) => (
                        <FooterListItem key={item}>{item}</FooterListItem>
                    ))}
                </FooterList>
                <FooterSocial>
                    {socialIcons.map((item, index) => (
                        <FooterSocialIcon key={index}>
                            <img src={item} alt={''} />
                        </FooterSocialIcon>
                    ))}
                </FooterSocial>
            </OverlayFooter>
        </OverlayWrap>
    );
}

export default Overlay;
