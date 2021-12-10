import styled from 'styled-components';

export const FooterContainer = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;

    /* border: 2px solid red; */
    background-color: #fff;
    width: 100%;
    height: 200px;
    margin-top: 5%;
`;

export const FooterContents = styled.div`
    margin-top: -4%;
    h3 {
        color: #5961A4;
        font-size: 24px;
    }
    .apiLink {
        margin-left: 70px;
    }
`;

export const FooterIcons = styled.div`
    margin-top: 2%;
    position: relative;
    justify-content: space-between;
    align-content: space-between;
    display: flex;
`;