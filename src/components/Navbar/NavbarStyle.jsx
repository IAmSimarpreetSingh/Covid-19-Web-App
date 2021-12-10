import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    top: 0;
    width: 100%;
    justify-content: space-between;
    border-bottom: 2px solid #000;
    a {
        margin-left: 10%;
        
        @media (max-width: 768px) {
            margin-left: 2%;
        }
    }

    img {
        width: 80px;
        height: 80px;
        float: inline-start;

        @media (max-width: 768px) {
            width: 60px;
            height: 60px;
        }
       
    }

`;