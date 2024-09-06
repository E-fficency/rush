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
