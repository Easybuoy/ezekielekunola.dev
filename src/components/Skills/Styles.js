import styled from "styled-components"

const SkillsList = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .skills {
    background-color: #170a1c;
    margin: 1rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 6px 0px;
    border-radius: 10px;
    min-height: 50vh;
    padding: 2rem 0;

    .skills-header {
      text-align: center;
      width: 100%;
      padding-bottom: 2rem;

      h3 {
        font-family: "Concert One", cursive;
      }
    }

    .skills-body {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding: 1rem;
      justify-content: space-evenly;
      flex-direction: row-reverse;

      @media (max-width: 850px) {
        flex-direction: column;
      }

      .skills-body-content {
        display: flex;
        flex-wrap: wrap;
        width: 45%;

        @media (max-width: 850px) {
          width: 95%;
        }
        .skills-body-content-header {
          display: flex;
          align-items: center;
          color: ${props => props.theme.primaryColor};
          margin: 2rem auto;
          i {
            padding: 0 2rem;
            color: ${props =>
              props.theme.type === "light"
                ? props.theme.primaryColor
                : props.theme.text};
          }
          h3 {
            margin: 1 2rem;
            font-family: "Concert One", cursive;
            color: ${props => props.theme.text};
          }
        }

        .skills-body-content-details {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          padding: 1rem;

          span {
            color: ${props => props.theme.primaryColor};
            margin: 2rem auto;
            font-weight: 900;
          }
          h4 {
            font-size: 2.5rem;
            margin-bottom: 2rem;
            line-height: 3rem;
            font-family: "Jaldi", sans-serif;
          }
        }
      }

      .skills-body-items {
        display: flex;
        flex-wrap: wrap;
        width: 45%;

        @media (max-width: 850px) {
          width: 95%;
        }
      }
    }
  }
`

const Skill = styled.div`
  width: 100%;
  margin: 2rem auto;
  padding: 0 0.5rem;
  display: flex;
  flex-wrap: wrap;

  .skill-header {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    i {
      padding: 0 2rem;
      color: ${props =>
        props.theme.type === "light"
          ? props.theme.primaryColor
          : props.theme.text};
    }

    h4 {
      font-family: "Concert One", cursive;
      font-size: 2.5rem;

      @media (max-width: 400px) {
        font-size: 2.3rem;
      }
    }
  }

  .skill {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    @media (max-width: 850px) {
      justify-content: center;
    }

    p {
      padding: 0.7rem;
      background-color: ${props => props.theme.primaryColor};
      color: white;
      margin: 1rem;
      border-radius: 5px;
      text-align: center;
      display: flex;
      align-items: center;
    }
  }
`

export { SkillsList, Skill }
