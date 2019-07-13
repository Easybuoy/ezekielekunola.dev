import styled from "styled-components"

const Button = styled.button`
  padding: 1rem;
  /* background-color: #754ef9; */
  /* color: white; */
  border: none;
  outline: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #754ef9;
    color: white;
    transform: scale(1.03);
  }
`

const Input = styled.input`
  padding: 1rem;
  margin: 1rem 0;
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.5rem;
`

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  font-size: 1.5rem;
  padding: 1rem;
`

const Form = styled.form`
  padding: 2rem;
  color: white;
  font-size: 2rem;
  border: 1px solid red;

  button {
    margin: 1rem auto;
    display: flex;
    min-width: 15%;
    justify-content: center;
  }
`

export { Button, Input, Form, TextArea }
