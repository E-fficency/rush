import styled from 'styled-components'

export const PedidoRealizadoStyledNav = styled.nav`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1em;
`;


export const TopContainerPedidoRealizado = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
` 

export const MainContainerPedidoRealizado = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    padding: 0 1rem;
    img{
        margin-bottom: 1.5rem;
        width: 100px;
        border-radius: 999px;
        box-shadow: #0077e5c9 0px 12px 55px, #0077e5b5 1px -4px 30px, #0077e5c9 1px -1px 6px, #0077e599 0px 12px 13px, #0077e552 0px -3px 5px;
    }
`
export const PedidoRealizadoTitulo = styled.h1`
    font-size: 2rem;
    font-weight: 400;
`

export const PedidoRealizadoParagrafo = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
`
