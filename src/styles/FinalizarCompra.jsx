import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  padding: 0 2rem;
`;

export const Endereco = styled.div`
  input[type="text"] {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

export const StyledDivIcon = styled.div`
  background-color: #efeeee;
  padding: 0.875rem;
  background-image: ${props => `url(${props.bg})` };
  background-repeat: no-repeat;
  background-size: ${props => `${props.size}`};
  background-position: ${props => `${props.position}%`};
  border-radius: 4px;
  input {
    width: 80%;
    background-color: transparent;
    border: none;
    outline: none;
    height: 100%;
    &::placeholder {
      color: #000;
      font-size: 1rem;
    }
  }
`;
