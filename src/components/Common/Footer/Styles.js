import styled from "styled-components"

const Footer = styled.footer`
  background-color: ${props =>
    props.theme.primaryColor};
  padding: 1rem 0;
  text-align: center;
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid white;

  p {
    padding: 1rem 0;
    font-family: ${props => props.theme.primaryFont};
  }
`

export default Footer
