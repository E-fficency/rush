import { TbMoodSad } from "react-icons/tb";
import { Link } from "react-router-dom";
import { ButtonError, ContentContainer, ErrorMessage, MainContainerError, MainText, PageNotFound } from "../styles/StyleError";
import { useEffect } from "react";

function Erro() {

  useEffect(() => {
    document.title = 'Rush | Error'
  })
  return (
    <MainContainerError>
      <ContentContainer>
        <TbMoodSad fontSize={'12rem'}/>
        <MainText>404</MainText>
        <PageNotFound>Page not found</PageNotFound>
        <ErrorMessage>Oops! Está página não pode ser encontrada!</ErrorMessage>
        <ButtonError><Link to={'/'}>Voltar ao início</Link></ButtonError>
      </ContentContainer>
    </MainContainerError>
  )
}

export default Erro