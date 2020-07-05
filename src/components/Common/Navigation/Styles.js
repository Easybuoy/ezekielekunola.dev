import styled from "styled-components"

const Navigation = styled.nav`
  background-color: ${props =>
    props.theme.type === "light"
      ? props.theme.primaryColor
      : props.theme.tertiaryColor};
  opacity: 1;
  border-bottom: 0.1px solid #8c8c8c;
  margin: 0;
  padding: 1rem 0;

  img {
    width: 100px;
    height: auto;
    margin-left: 3rem;
    cursor: pointer;
  }
`

export default Navigation
