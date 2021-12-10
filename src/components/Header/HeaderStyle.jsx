import styled from 'styled-components';
import Virus from './img/virus.gif';

export const HeadContainer = styled.div`
    /* border: 2px solid red; */
    position: relative;
    padding: 2rem;
    width: 100%;
    top: 12%;
    height: 80%;
    overflow: hidden;
`;

export const MainHeading = styled.div`
    /* border: 2px solid green; */
    position: relative;
    h1 {
        color: #fff;
        font-size: 36px;
        @media (max-width: 615px) {
            font-size: 32px;
        }
        @media (max-width: 460px) {
            font-size: 28px;
        }
    }

    .covid_19 {
        position: absolute;
        background-image: url(${Virus}) ;
        background-repeat: no-repeat;
        background-size: cover;
        /* border: 2px solid blue ; */
        height: 220px;

        font-size: 110px;
        font-weight: 900;
        font-family: 'Raleway', sans-serif;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip:text;
        background-clip: text;

        @media (max-width: 1238px) {
            font-size: 100px;
        }
        @media (max-width: 615px) {
            font-size: 80px;
        }
        @media (max-width: 460px) {
            font-size: 60px;
        }
    }

    .virus-img {
        position: absolute;
        top: 40%;

        img {
            width: 600px;
            mix-blend-mode: luminosity;

            /* @media (max-width: 750px ){
            width: 300px;
            } */
            
        }
        
    }

    .precautions {
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        width: 40%;
        /* background-color: #fff; */
        border: transparent;
        border-radius: 20px;
        height: 500px;
        margin-left: 50%;

        @media (max-width: 1421px ){
            margin-left: 70%;
            width: 60%;
        }
        @media (max-width: 1145px ){
            margin-left: 80%;
            width: 60%;
        }
        
        @media (max-width: 988px ){
            margin-left: 0;
            margin-top: 30%;
            width: 880px;
        }
        @media (max-width: 988px ){
            width: 800px;
        }
        @media (max-width: 850px ){
            width: 700px;
        }
        @media (max-width: 750px ){
            width: 600px;
        }
        @media (max-width: 660px ){
            width: 500px;
        }
        @media (max-width: 455px ){
            width: 500px;
        }

        div {
            position: relative;
            display: block;
            /* border: 1px solid red; */
            padding: 50px;
            width: 170px;
            justify-content: center;
            align-content: center;
            margin-top: 2px;

            @media (max-width: 1360px ){
                width: 150px;
            }
            @media (max-width: 1205px ){
                width: 130px;
            }
            @media (max-width: 1055px ){
                width: 140px;
                padding: 20px;
            }
            @media (max-width: 757px ){
                width: 120px;
            }
            @media (max-width: 657px ){
                width: 160px;
            }
            @media (max-width: 550px ){
                width: 130px;
            }
            @media (max-width: 455px ){
                width: 180px;
                padding: 20px;
            }

            img {
                width: 100px;
                @media (max-width: 455px ){
                width: 80px;
                }
            }
            h3 {

                color: #fff;
            }
        }

        
    }
    
        @media (max-width: 1860px) {
            margin-top: 5.5%;
        }
        @media (max-width: 1420px) {
            margin-top: 6%;
        }
    }

    @media (max-width: 1420px) {
        width:70%;
    }
    @media (max-width: 820px) {
        width:90%;
    }
    @media (max-width: 630px) {
        width:100%;
    }
`;