import styled from "styled-components"

const About = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin: 2rem 0;
  min-height: 50vh;

  @media (max-width: 750px) {
    flex-direction: column-reverse;
  }

  .about-content {
    width: 45%;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 750px) {
      width: 90%;
    }

    h3 {
      font-family: "Concert One", cursive;
      padding: 2rem 0;

      @media (max-width: 750px) {
        width: 100%;
        text-align: center;
      }
    }

    p {
      line-height: 3rem;
      color: ${props => props.theme.text};
      font-size: 2rem;
    }
  }
  .about-image {
    width: 45%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @media (max-width: 750px) {
      width: 90%;
    }

    img {
      -webkit-box-shadow: 10px 10px 2px 2px #a3a3a3;
      -moz-box-shadow: 10px 10px 2px 2px #a3a3a3;
      box-shadow: 10px 10px 2px 2px #a3a3a3;
      width: 400px;
      background-color: white;
      object-fit: cover;
      margin: 0 auto;
      border-radius: 10px;
      height: 400px;

      @media (max-width: 910px) {
        width: 100%;
      }

      @media (max-width: 850px) {
        border-radius: 50%;
        width: 300px;
        height: 300px;
        -webkit-box-shadow: 0px 0px 5px 3px #a3a3a3;
        -moz-box-shadow: 0px 0px 5px 3px #a3a3a3;
        box-shadow: 0px 0px 5px 3px #a3a3a3;
      }

      @media (max-width: 400px) {
        width: 250px;
        height: 250px;
      }
    }
  }
`

export default About
