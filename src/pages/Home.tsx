import React, { Fragment } from "react";
import {ButtonsHeader, Container, HeaderHome, HireMe,ContainerButtons} from "../style/home";
import { Apresentation } from "../components/Apresentation";
import { Skills } from "../components/Skills";

export function Home(){


    const ListButtons = ()=>{
        return(
            <Fragment>
                <ButtonsHeader>Home</ButtonsHeader>
                <ButtonsHeader>About</ButtonsHeader>
                <ButtonsHeader>Skills</ButtonsHeader>
                <ButtonsHeader>Portfolio</ButtonsHeader>
                <ButtonsHeader>Contact</ButtonsHeader>
            </Fragment>
        )
    }

    const Header = () =>{
        return(
            <HeaderHome>
                <div>
                    <svg width="91" height="66" viewBox="0 0 91 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.2736 56.6403C36.8257 59.1031 33.5009 57.6664 32.2695 56.6403L26.3177 52.7409L21.0303 48.8414C20.2094 48.431 17.8004 46.3786 17.1309 43.7106C16.5054 41.218 17.6782 37.6905 18.7728 36.5275L26.3177 33.449L26.7282 33.6542C39.5347 41.0426 42.9416 44.1211 42.5311 47.8153V51.3042C42.5995 52.604 42.2438 55.491 40.2736 56.6403Z" fill="url(#paint0_linear_6_6)" stroke="#FFB742"/>
                        <path d="M12 27.7676V38.4397C12.6157 44.6497 20.825 49.2518 21.0302 48.8413C20.4145 47.8836 18.5674 45.4177 18.157 42.9607C17.7548 40.5533 19.0463 38.4456 20.0041 37.6247C22.8773 35.7776 30.309 31.2481 36.8332 26.5363C44.2215 21.2002 42.3744 20.4322 42.3744 12.2229C41.5535 6.68165 35.1913 7.91304 33.9599 8.681C30.1289 11.2806 21.5535 17.5271 17.3361 19.9688C13.4366 22.2264 12.0684 25.8521 12 27.7676Z" fill="#FFB742"/>
                        <path d="M49.8858 9.35973C53.3338 6.89693 56.6585 8.33356 57.8899 9.35973L63.8417 13.2591L69.1291 17.1586C69.95 17.569 72.359 19.6214 73.0285 22.2894C73.6541 24.782 72.4812 28.3095 71.3867 29.4725L63.8417 32.551L63.4312 32.3458C50.6247 24.9574 47.2178 21.8789 47.6283 18.1847V14.6958C47.5599 13.396 47.9156 10.509 49.8858 9.35973Z" fill="url(#paint1_linear_6_6)" stroke="#FFB742"/>
                        <path d="M78.1594 38.2324V27.5603C77.5437 21.3503 69.3344 16.7482 69.1291 17.1587C69.7448 18.1164 71.5919 20.5823 72.0024 23.0393C72.4046 25.4467 71.113 27.5544 70.1553 28.3753C67.282 30.2224 59.8503 34.7519 53.3262 39.4637C45.9378 44.7998 47.7849 45.5678 47.7849 53.7771C48.6058 59.3184 54.9681 58.087 56.1995 57.319C60.0305 54.7194 68.6058 48.4729 72.8233 46.0312C76.7227 43.7736 78.091 40.1479 78.1594 38.2324Z" fill="#FFB742"/>
                        <defs>
                        <linearGradient id="paint0_linear_6_6" x1="25.9559" y1="33.449" x2="36.4228" y2="58.0769" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#BB842C"/>
                        <stop offset="1" stopColor="#FFB742"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_6_6" x1="64.2035" y1="32.551" x2="53.7366" y2="7.9231" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#BB842C"/>
                        <stop offset="1" stopColor="#FFB742"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>

                <ContainerButtons>
                    <ListButtons></ListButtons>
                </ContainerButtons>

                <div>
                    <HireMe>Hire me</HireMe>
                </div>
            </HeaderHome>
        )
    }

    return(
        <div>
            <Container>
                <Header />
                <Apresentation />
                <Skills />
                <div></div>

            </Container>
        </div>
    )
}