import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import Avatar from './Images/christopher-campbell-28567-unsplash.png';
import Mountain from './Images/Mountain.png';
import Arrowleft from './Images/arrow back.svg';
import ArrowRight from './Images/arrow.svg';
import Clock from './Images/clock.svg';
import Sky from './Images/sky.png';
import Umbrella from './Images/umbrella.png';
import Lake from './Images/lake.png';
import Bridge from './Images/bridge.png';
import Forest from './Images/forest.png';
import Elephant from './Images/elephant.png';
import Bird from './Images/bird.png';
import Road from './Images/road.png';
import Send from './Images/send.svg';
import Instagram from './Images/instagram.svg';
import Twitter from './Images/twitter.svg';
import Facebook from './Images/facebook.svg';
import Planet from './Images/planet.svg';
import Overlay from './Overlay';

const ContainerWrap = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    background-color: #f6f8f9;
`;

const NavBar = styled.div`
    background-color: #f6f8f9;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 5;
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    width: 100%;
    padding: 0 20px;
    height: 50px;
    margin: 0 auto;
`;

const Logo = styled.div`
    font-size: 13px;
    font-weight: bold;
    color: #fa6980;
    text-transform: uppercase;
`;

const NavItemsWrap = styled.div`
    max-width: 340px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #343638;

    @media all and (max-width: 767px) {
        width: auto;
    }
`;

const NavItem = styled.div`
    font-size: 11px;
    opacity: 0.5;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    :first-of-type {
        opacity: 1;
    }

    @media all and (max-width: 767px) {
        display: none;
    }
`;

const NavIconWrap = styled.div`
    width: 30px;
`;

const NewsSection = styled.section`
    display: flex;
    flex-wrap: nowrap;

    @media all and (max-width: 1024px) {
        flex-wrap: wrap;
    }
`;

const NewsMain = styled.div`
    max-width: 840px;
    width: 100%;
    color: white;
    background-image: url(${Mountain});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 600px;
    padding: 174px 140px;
    background-position: center;

    @media all and (max-width: 1024px) {
        max-width: 100%;
    }
    @media all and (max-width: 767px) {
        padding: 40px 24px;
        min-height: auto;
    }
`;

const NewsMainContainer = styled.div`
    width: 100%;
    max-width: 560px;
`;

const Title = styled.div`
    font-size: 24px;
    color: ${({ color }) => color || '#202124'};
    text-transform: uppercase;
    font-weight: bold;
`;

const Subtitle = styled.div`
    color: white;
    padding: 40px 0 10px;
    border-top: 2px solid white;
    font-weight: bold;
    font-size: 24px;
    margin-top: 40px;
`;

const NewsList = styled.div`
    padding: 100px 120px 90px 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    width: 100%;
    background-color: #fff;

    @media all and (max-width: 1024px) {
        max-width: none;
    }

    @media all and (max-width: 767px) {
        padding: 40px 24px;
    }
`;

const NewsListContainer = styled.div`
    max-width: 380px;
    width: 100%;
`;

const NewsListTitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 40px;
    border-bottom: 2px solid #ebeded;
`;

const NewsArrowsWrap = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 52px;
    width: 100%;
    align-items: center;
`;

const NewsArrowWrap = styled.div`
    width: 6px;
    height: 10px;
    display: flex;
    cursor: pointer;
`;

const NewsTextBlock = styled.div`
    margin-bottom: 30px;
`;

const Button = styled.button`
    background-color: #fa6980;
    padding: 13px 36px;
    border-radius: 6px;
    color: white;
    text-transform: uppercase;
    font-size: 11px;
    cursor: pointer;
    border: none;
    font-weight: bold;
`;

const NewsCardsWrap = styled.div``;

const NewsCard = styled.div``;

const NewsCardTitle = styled.div`
    color: #fa6980;
    font-weight: bold;
    text-transform: uppercase;
    margin: 40px 0 20px;
`;

const NewsSubtitle = styled.div`
    font-weight: bold;
    margin-bottom: 10px;
`;

const NewsDesc = styled.div`
    color: #a6adb4;
    margin-bottom: 12px;
`;

const TimeWrap = styled.div`
    display: flex;
    align-items: flex-end;
`;

const ClockWrap = styled.div`
    width: 16px;
    height: 16px;
    margin-right: 10px;
`;

const Time = styled.div`
    color: ${({ color }) => color || '#a6adb4'};
    font-size: 13px;
`;

const ArticlesSection = styled.section`
    background-color: #f6f8f9;
`;

const ArticlesContainer = styled.div`
    max-width: 1160px;
    margin: 0 auto;

    @media all and (max-width: 1024px) {
        padding: 0 10px;
    }
    @media all and (max-width: 767px) {
        padding: 0 24px;
    }
`;

const TrendingTitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
`;

const TrendingCardsWrap = styled.div`
    display: flex;
    justify-content: space-between;

    @media all and (max-width: 767px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const TrendingCard = styled.div`
    max-width: 360px;
    width: 100%;
    border-radius: 6px;
    background-color: #fff;

    @media all and (max-width: 1024px) {
        max-width: 320px;
    }
    @media all and (max-width: 768px) {
        max-width: 240px;
    }
    @media all and (max-width: 767px) {
        max-width: 100%;
        margin-bottom: 40px;
        :last-of-type {
            margin-bottom: 0;
        }
    }
`;

const TrendingCardImage = styled.div`
    background-image: ${({ image }) => `url(${image})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 180px;
    border-radius: 6px 6px 0 0;
`;

const TrendingCardDescWrap = styled.div`
    padding: 40px;

    @media all and (max-width: 767px) {
        padding: 32px 24px;
    }
`;

const TrendingDesc = styled.div`
    font-size: 13px;
    line-height: 20px;
    color: #a6adb4;
    margin-bottom: 10px;
`;

const HappeningWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const HappeningLargeArticles = styled.div`
    width: 100%;
    max-width: 760px;
    @media all and (max-width: 767px) {
        margin-bottom: 40px;
        border-bottom: 2px solid #ebeded;
    }
`;

const LargeArticleCard = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #ffffff;
    background-image: ${({ image }) => `url(${image})`};
    margin-bottom: 40px;
    height: 430px;
    border-radius: 6px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media all and (max-width: 767px) {
        height: 300px;
        padding: 32px 24px;
    }
`;

const LargeArticleLabel = styled.div`
    font-weight: bold;
`;

const LargeArticleDescWrap = styled.div``;

const LargeArticleTitle = styled(Title)`
    margin-bottom: 10px;
    font-size: 24px;
    color: white;
    text-transform: none;
`;

const LargeArticleDesc = styled.div`
    margin-bottom: 10px;
`;

const SmallArticlesWrap = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 360px;
    width: 100%;

    @media all and (max-width: 1024px) {
        flex-direction: row;
        max-width: none;
        justify-content: space-between;
    }

    @media all and (max-width: 767px) {
        flex-direction: column;
    }
`;

const SmallArticle = styled.div`
    margin-bottom: 40px;

    @media all and (max-width: 1024px) {
        max-width: 320px;
        width: 100%;
    }
    @media all and (max-width: 768px) {
        max-width: 240px;
        width: 100%;
    }
    @media all and (max-width: 767px) {
        max-width: 100%;
        width: 100%;
    }
`;

const SmallArticleImage = styled.div`
    height: 210px;
    width: 100%;
    border-radius: 6px;
    background-image: ${({ image }) => `url(${image})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const SmallArticleTitle = styled.div`
    font-weight: bold;
    margin: 20px 0 10px;
`;

const SmallArticleTime = styled(Time)`
    #link {
        text-decoration: underline;
        cursor: pointer;
    }
`;

const ArticlesWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;

    @media all and (max-width: 1200px) {
        flex-wrap: wrap;
    }

    @media all and (max-width: 1024px) {
        justify-content: center;
    }
    @media all and (max-width: 767px) {
        margin-bottom: 0;
    }
`;

const Footer = styled.div`
    background-color: #a6adb4;
    width: 100%;
    height: 200px;
    padding: 56px 0 60px;

    @media all and (max-width: 767px) {
        height: auto;
    }
`;

const FooterLogo = styled.div`
    color: white;
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    flex-grow: 1;

    @media all and (max-width: 767px) {
        margin-bottom: 10px;
    }
`;

const LinksColumn = styled.div`
    flex-grow: ${({ last }) => (last ? '2' : '1')};
`;

const FooterLink = styled.div`
    color: #cbd0d3;
    font-size: 13px;
    margin-bottom: 6px;
    font-weight: bold;
    line-height: 20px;
`;

const FooterContainer = styled(ArticlesContainer)`
    display: flex;

    @media all and (max-width: 1200px) {
        padding: 0 10px;
    }

    @media all and (max-width: 767px) {
        flex-direction: column;
        padding: 0 24px;
    }
`;

const FooterForm = styled.div`
    flex-grow: 2;

    @media all and (max-width: 767px) {
        margin: 10px 0;
    }
`;

const FooterInput = styled.div`
    border: 2px solid rgba(255, 255, 255, 0.1);
    padding: 12px 20px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 262px;
    border-radius: 6px;
`;

const InputPlaceholder = styled.div`
    opacity: 0.5;
    color: #cbd0d3;
    font-size: 13px;
`;

const InputIcon = styled.div`
    width: 16px;
    height: 16px;
    cursor: pointer;
`;

const InputDesc = styled.div`
    color: #cbd0d3;
    font-size: 11px;

    @media all and (max-width: 767px) {
        margin-bottom: 10px;
    }
`;

const FooterSocial = styled.div`
    display: flex;
    justify-content: space-between;
    width: 150px;
`;

const FooterSocialIcon = styled.div`
    width: 16px;
    height: 16px;
`;

const Page = styled.div`
    animation: 300ms ease-in slideinpage;
    @media all and (max-width: 767px) {
        display: ${({ overlay }) => (overlay ? 'none' : 'block')};
    }
    display: ${({ overlay }) => (overlay ? 'none' : 'block')};
    background-color: #f6f8f9;
    @keyframes slideinpage {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const OverlayBtn = styled.div`
    display: none;
    width: 16px;
    height: 14px;
    @media all and (max-width: 767px) {
        display: flex;
        align-items: center;
    }
    border-top: 2px solid #202124;
    border-bottom: 2px solid #202124;
`;

const OverlayBtnLine = styled.div`
    background-color: #202124;
    height: 2px;
    width: 50%;
`;

const OverlayNavList = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 30px;
    left: -24px;
    height: 180px;
    justify-content: space-between;
    animation: 300ms ease-in slideinoverlay;
    background-color: #f6f8f9;
    padding: 24px;
    z-index: 6;
    @keyframes slideinoverlay {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const navList = ['home', 'discovery', 'photos', 'contact'];

const linksColumn1 = ['Home', 'Discovery', 'Photos', 'Contact'];
const linksColumn2 = ['About', 'Help', 'Terms', 'Guidlines'];
const linksColumn3 = ['Testimonials', 'Advertise', 'Integrations', 'Careers'];
const overlayList = [
    'WORLD NEWS',
    'TRAVEL',
    'TECHNOLOGY',
    'CITY',
    'CULTURE',
    'MORE…',
];

const socialIcons = [Instagram, Twitter, Facebook, Planet];

const newsList = [
    {
        title: 'TRAVEL',
        subtitle: 'Article title',
        desc:
            'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat…',
    },
    {
        title: 'TECHNOLOGY',
        subtitle: 'Article title',
        desc:
            'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat…',
    },
];

const trendingCards = [
    {
        image: Lake,
        title: 'Dolore magna aliqua',
        desc:
            'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.',
        time: '2m ago',
    },
    {
        image: Umbrella,
        title: 'Morbi eleifend a libero',
        desc:
            'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.',
        time: '1h ago',
    },
    {
        image: Sky,
        title: 'Morbi eleifend a libero',
        desc:
            'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.',
        time: '3h ago',
    },
];

const largeArticles = [
    {
        image: Bridge,
        label: 'CITY',
        title: 'Large article title',
        desc:
            'Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam.',
        time: '2m ago',
    },
    {
        image: Forest,
        label: 'TRAVEL',
        title: 'Large article title',
        desc:
            'Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam.',
        time: '2m ago',
    },
];

const smallArticles = [
    {
        image: Elephant,
        title: 'Small title',
        time: (
            <SmallArticleTime>
                3h ago by <span id={'link'}>Worldnews</span>
            </SmallArticleTime>
        ),
    },
    {
        image: Bird,
        title: 'Small title',
        time: (
            <SmallArticleTime>
                4h ago by <span id={'link'}>Days</span>
            </SmallArticleTime>
        ),
    },
    {
        image: Road,
        title: 'Small title',
        time: (
            <SmallArticleTime>
                3h ago by <span id={'link'}>Monica</span>
            </SmallArticleTime>
        ),
    },
];

function App() {
    const [overlay, setShowOverlay] = useState(false);
    const [overlayDesktop, setShowOverlayDesktop] = useState(false);

    const toggleOverlayHandler = () => {
        setShowOverlay(!overlay);
    };
    const toggleOverlayDesktopHandler = () => {
        setShowOverlayDesktop(!overlayDesktop);
    };

    return (
        <Fragment>
            {overlay && (
                <Overlay
                    linksColumn1={linksColumn1}
                    linksColumn2={linksColumn2}
                    linksColumn3={linksColumn3}
                    socialIcons={socialIcons}
                    toggleOverlay={toggleOverlayHandler}
                />
            )}
            <Page overlay={overlay}>
                <NavBar>
                    <NavContainer>
                        <OverlayBtn onClick={toggleOverlayHandler}>
                            <OverlayBtnLine />
                        </OverlayBtn>
                        <Logo>logo</Logo>
                        <NavItemsWrap>
                            {navList.map((item, index) => (
                                <Fragment key={item}>
                                    <NavItem
                                        onClick={
                                            index === 0
                                                ? toggleOverlayDesktopHandler
                                                : undefined
                                        }
                                    >
                                        {item}
                                        {overlayDesktop && index === 0 && (
                                            <OverlayNavList>
                                                {overlayList.map((item) => (
                                                    <NavItem
                                                        key={item}
                                                        onClick={
                                                            toggleOverlayDesktopHandler
                                                        }
                                                    >
                                                        {item}
                                                    </NavItem>
                                                ))}
                                            </OverlayNavList>
                                        )}
                                    </NavItem>
                                </Fragment>
                            ))}
                            <NavIconWrap>
                                <img src={Avatar} alt="" />
                            </NavIconWrap>
                        </NavItemsWrap>
                    </NavContainer>
                </NavBar>

                <ContainerWrap>
                    <NewsSection>
                        <NewsMain>
                            <NewsMainContainer>
                                <Title color={'white'}>WORLD NEWS</Title>
                                <Subtitle>
                                    Amazing places in America to visit.
                                </Subtitle>
                                <NewsTextBlock>
                                    For some reason — this country, this city,
                                    this neighborhood, this particular street —
                                    is the place you are living a majority of
                                    your life in.
                                </NewsTextBlock>
                                <Button>LEARN MORE</Button>
                            </NewsMainContainer>
                        </NewsMain>
                        <NewsList>
                            <NewsListContainer>
                                <NewsListTitleWrap>
                                    <Title>MORE NEWS</Title>
                                    <NewsArrowsWrap>
                                        <NewsArrowWrap>
                                            <img src={Arrowleft} alt="" />
                                        </NewsArrowWrap>
                                        <NewsArrowWrap>
                                            <img src={ArrowRight} alt="" />
                                        </NewsArrowWrap>
                                    </NewsArrowsWrap>
                                </NewsListTitleWrap>
                                <NewsCardsWrap>
                                    {newsList.map((item) => (
                                        <NewsCard key={item.title}>
                                            <NewsCardTitle>
                                                {item.title}
                                            </NewsCardTitle>
                                            <NewsSubtitle>
                                                {item.subtitle}
                                            </NewsSubtitle>
                                            <NewsDesc>{item.desc}</NewsDesc>
                                            <TimeWrap>
                                                <ClockWrap>
                                                    <img src={Clock} alt="" />
                                                </ClockWrap>
                                                <Time>2 min ago</Time>
                                            </TimeWrap>
                                        </NewsCard>
                                    ))}
                                </NewsCardsWrap>
                            </NewsListContainer>
                        </NewsList>
                    </NewsSection>

                    <ArticlesSection>
                        <ArticlesContainer>
                            <TrendingTitleWrap>
                                <Title>TRENDING</Title>
                                <NewsArrowsWrap>
                                    <NewsArrowWrap>
                                        <img src={Arrowleft} alt="" />
                                    </NewsArrowWrap>
                                    <NewsArrowWrap>
                                        <img src={ArrowRight} alt="" />
                                    </NewsArrowWrap>
                                </NewsArrowsWrap>
                            </TrendingTitleWrap>
                            <TrendingCardsWrap>
                                {trendingCards.map(
                                    ({ image, time, desc, title }) => (
                                        <TrendingCard key={time}>
                                            <TrendingCardImage image={image} />
                                            <TrendingCardDescWrap>
                                                <NewsSubtitle>
                                                    {title}
                                                </NewsSubtitle>
                                                <TrendingDesc>
                                                    {desc}
                                                </TrendingDesc>
                                                <TimeWrap>
                                                    <ClockWrap>
                                                        <img
                                                            src={Clock}
                                                            alt=""
                                                        />
                                                    </ClockWrap>
                                                    <Time>{time}</Time>
                                                </TimeWrap>
                                            </TrendingCardDescWrap>
                                        </TrendingCard>
                                    )
                                )}
                            </TrendingCardsWrap>
                            <HappeningWrap>
                                <TrendingTitleWrap>
                                    <Title>HAPPENING NOW</Title>
                                    <NewsArrowsWrap>
                                        <NewsArrowWrap>
                                            <img src={Arrowleft} alt="" />
                                        </NewsArrowWrap>
                                        <NewsArrowWrap>
                                            <img src={ArrowRight} alt="" />
                                        </NewsArrowWrap>
                                    </NewsArrowsWrap>
                                </TrendingTitleWrap>
                                <ArticlesWrap>
                                    <HappeningLargeArticles>
                                        {largeArticles.map(
                                            ({
                                                image,
                                                desc,
                                                title,
                                                label,
                                                time,
                                            }) => (
                                                <LargeArticleCard
                                                    key={label}
                                                    image={image}
                                                >
                                                    <LargeArticleLabel>
                                                        {label}
                                                    </LargeArticleLabel>
                                                    <LargeArticleDescWrap>
                                                        <LargeArticleTitle>
                                                            {title}
                                                        </LargeArticleTitle>
                                                        <LargeArticleDesc>
                                                            {desc}
                                                        </LargeArticleDesc>
                                                        <TimeWrap>
                                                            <ClockWrap>
                                                                <img
                                                                    src={Clock}
                                                                    alt=""
                                                                />
                                                            </ClockWrap>
                                                            <Time
                                                                color={
                                                                    '#CBD0D3'
                                                                }
                                                            >
                                                                {time}
                                                            </Time>
                                                        </TimeWrap>
                                                    </LargeArticleDescWrap>
                                                </LargeArticleCard>
                                            )
                                        )}
                                    </HappeningLargeArticles>
                                    <SmallArticlesWrap>
                                        {smallArticles.map(
                                            ({ image, title, time }, index) => (
                                                <SmallArticle key={index}>
                                                    <SmallArticleImage
                                                        image={image}
                                                    />
                                                    <SmallArticleTitle>
                                                        {title}
                                                    </SmallArticleTitle>
                                                    {time}
                                                </SmallArticle>
                                            )
                                        )}
                                    </SmallArticlesWrap>
                                </ArticlesWrap>
                            </HappeningWrap>
                        </ArticlesContainer>
                    </ArticlesSection>
                </ContainerWrap>
                <Footer>
                    <FooterContainer>
                        <FooterLogo>Logo</FooterLogo>
                        <LinksColumn>
                            {linksColumn1.map((item) => (
                                <FooterLink key={item}>{item}</FooterLink>
                            ))}
                        </LinksColumn>
                        <LinksColumn>
                            {linksColumn2.map((item) => (
                                <FooterLink key={item}>{item}</FooterLink>
                            ))}
                        </LinksColumn>
                        <LinksColumn last={true}>
                            {linksColumn3.map((item) => (
                                <FooterLink key={item}>{item}</FooterLink>
                            ))}
                        </LinksColumn>
                        <FooterForm>
                            <FooterInput>
                                <InputPlaceholder>Email</InputPlaceholder>
                                <InputIcon>
                                    <img src={Send} alt="" />
                                </InputIcon>
                            </FooterInput>
                            <InputDesc>
                                Stay in touch with us for the freshest products!
                            </InputDesc>
                        </FooterForm>
                        <FooterSocial>
                            {socialIcons.map((item, index) => (
                                <FooterSocialIcon key={index}>
                                    <img src={item} alt={''} />
                                </FooterSocialIcon>
                            ))}
                        </FooterSocial>
                    </FooterContainer>
                </Footer>
            </Page>
        </Fragment>
    );
}

export default App;
