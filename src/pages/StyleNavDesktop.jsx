import styled from "styled-components";

export const StyledNavDesktop = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 1rem;
    span{
        font-size: 1.1rem;
    }
    @media (max-width: 768px){
        display: none;
    }
`

export const ItemNavDesktop = styled.div`
    display: flex;
    gap: 1rem;
    img{
        width: 150px;
    }   
`
