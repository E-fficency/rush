import styled from "styled-components"

const StyledTittle = styled.h1`
    font-size: 1.5rem;
    font-weight: 500;
`

function Titulo({children}){
    return(
        <StyledTittle>{children}</StyledTittle>
    )
}

export default Titulo