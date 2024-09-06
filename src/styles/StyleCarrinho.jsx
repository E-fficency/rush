import styled from "styled-components";

export const MainContainer = styled.main`
    padding: 0 1rem;
`

export const CardCarrinho = styled.div`
    img{
        width: 100px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
    display: flex;
    align-items: center;
    position: relative;
    gap: 1rem;
    padding: 1.5rem;
    margin-top: 1.5rem;
    border-bottom: solid 1px #00000060;
    h2{
        font-size: 1.1rem;
        font-weight: 400;
        text-align: start;
    }
`
export const CardCarrinhoInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`


export const CardCarrinhoBottom = styled.div`
    display: flex;
    justify-content:space-between;
    p{
        color: #B02B2B;
        font-size: 1.1rem
    }
    span{
        color: #868686;
        font-size: 1.1rem
    }
`

export const CarrinhoFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0.7rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #fff4f4;

`

export const CarrinhoFooterInfos = styled.div`
    display: flex;
    justify-content: space-between;
    h2{
        font-size: 1.5rem;
        font-weight: 400;
    }
    p{
        font-size: 1.1rem;
        font-weight: 600;
    }
`

export const FinalizarCompra = styled.button`
    width: 100%;
    background-color: black;
    color: white;
    border-radius: 10px;
    font-size: 1.3rem;
    padding: 0.5rem 2rem;
`