import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    margin-top: 1.5rem;
    border-bottom: solid 1px #00000060;
    gap: 8px;
    h3{
        font-size: 1.3rem;
        font-weight: 500;
    }
    p{

    }
`

const CardPerfil = ({ titulo, conteudo }) => {
    return (  
        <>
            <Card>
                <h3>{titulo}</h3>
                <p>{conteudo}</p>
            </Card>
        </>
    );
}
 
export default CardPerfil;