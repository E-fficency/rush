import styled from "styled-components";


export const MainContainer = styled.main`
    padding: 0 1em;
    display: flex;
    flex-direction: column;
`

export const Categories = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 0.4rem;
    margin-top: 2rem;
`

export const Item = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-between;
`

export const ItemName = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    h2{
        font-weight: 400;
        font-size: 1.25rem
    }
`

export const ItemQtd = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`


export const Search = styled.input`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00000016;
    outline: none;
    border: 0;
    border-radius: 10px;
    font-size: 1.25rem;
    padding: 1rem;
    background-image: url('https://img.icons8.com/?size=100&id=59878&format=png&color=868686');
    background-repeat: no-repeat;
    background-size: 25px;
    background-position: 95%;
    &::placeholder{
        color: #bdbdbd;
    }
    &:focus, 
    &:active{
        background-color: #00000016;
    }
`