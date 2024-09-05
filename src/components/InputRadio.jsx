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