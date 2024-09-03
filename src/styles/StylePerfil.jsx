import styled from "styled-components";

export const InfoContainerPerfil = styled.div`
    h1{
        margin-top: 2.5rem;
        margin-bottom: 1.5rem;
        font-size: 2rem;   
        font-weight: 500; 
    }
    h2{
        font-size: 1.7rem;
        font-weight: 400;
    }
    img{
        border-radius: 25px;
    }
    p{
        font-size: 0.9rem;
        color: #00000085;
        font-weight: 500;
    }
    display: flex;
    gap: 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center; 

`

export const SobreVoce = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 2rem 0;
    gap: 16px;
    h2{
        font-size: 1.7rem;
        font-weight: 400;
    }
    p{
        font-size: 0.9rem;
        width: 98%

    }
`