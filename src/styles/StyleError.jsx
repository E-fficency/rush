import styled from 'styled-components'

export const MainContainerError = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;   
    height: 100vh;
    font-family: "Barlow", sans-serif;
    `

export const ContentContainer = styled.div`
    display: flex;
    gap: 16px;
    flex-direction: column;
    align-items: center;
`

export const MainText = styled.h1`
    font-size: 3rem;

`

export const PageNotFound = styled.p`
    color: #7e7e7e;
`

export const ErrorMessage = styled.h2`
    text-align: center;
`

export const ButtonError = styled.button`
    background-color: #065ed2;
    border: 0;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    a{
        color: white;
        text-decoration: none;
        font-size: 1rem
    }
`