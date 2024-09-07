import styled from "styled-components";

export const StyledNavDesktop = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 1rem;

    button{
        font-size: 1.1rem;
        background: transparent;
        border: 0;
        cursor: pointer;
    }
`

export const ItemNavDesktop = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    img{
        width: 150px;
    }   
`
