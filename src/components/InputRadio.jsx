/* eslint-disable react/prop-types */
import styled from "styled-components";

export const Radio = styled.div`
  background-color: #efeeee;
  display: flex;
  justify-content: space-between;
  padding: 0.875rem;
  border-radius: 4px;
  input[type="radio"] {
    display: flex;
    accent-color: #000;
    appearance: none;
    -webkit-appearance: none; /* Para suporte ao Webkit */
    -moz-appearance: none; 
    width: 20px;
    border: solid 1px black;
    border-radius: 999px;
    transition: .3s;
  }
  input[type="radio"]:checked {
      background-color: #000000;
      border: 0;
      
    }

  input[type="radio"]::after{
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    background-image: url('https://img.icons8.com/?size=100&id=3061&format=png&color=ffffff');
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

function InputRadio({ label, type = "radio", name = "pagamentos", id }) {
  return (
    <Radio>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} />
    </Radio>
  );
}

export default InputRadio;