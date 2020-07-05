import styled from "styled-components"

const ProjectsList = styled.div`
  /* background-color: white;
  display: flex;
  flex-wrap: wrap;
  padding-top: 10rem;
  padding-bottom: 2rem;
  width: 100%;
  background-repeat: no-repeat;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  clip-path: polygon(0% 0%, 100% 10%, 100% 100%, 0% 100%);

  @media (max-width: 550px) {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    padding-top: 1rem;
  } */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0;
  justify-content: center;
  align-items: center;

  .projects-list {
    width: 100%;
    margin: 2rem;
    padding: 2rem 0;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 6px 0px;
    min-height: 70vh;

    h3 {
      margin-bottom: 5rem;
      width: 100%;
      text-align: center;
      font-family: "Concert One", cursive;
    }

    a {
      width: 100%;
      text-align: center;
      margin: 1rem 0;
      font-size: 1.7rem;
      font-weight: 900;
      font-family: "Concert One", sans-serif;
      color: ${props => props.theme.primaryColor};
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(1.02);
        color: ${props => props.theme.tertiaryColor};
      }
    }
  }
`

const Project = styled.div`
  width: 24%;
  margin: 1rem auto;
  color: white;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 1150px) {
    width: 30%;
  }

  @media (max-width: 900px) {
    width: 45%;
  }

  @media (max-width: 750px) {
    width: 47%;
  }

  @media (max-width: 550px) {
    width: 100%;
    margin: 1rem;
  }

  .project-image {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 250px;
    &:hover {
      .project-content {
        opacity: 1;
      }
    }

    .project-content {
      opacity: 0;
      transition: 0.8s;
      background: rgba(0, 0, 0, 0.5);
      height: 100%;
      width: 100%;
      color: #ffffff;
      display: flex;
      flex-wrap: wrap;
    }
  }

  .project-body {
    background-color: ${props =>
      props.theme.type === "light" ? "white" : props.theme.tertiaryColor};
    text-align: center;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);

    padding-bottom: 1rem;

    h3 {
      color: ${props => props.theme.text};
      padding: 1rem 0;
      margin: 0;
      font-size: 2rem;
    }
  }
`

const ProjectDetail = styled.section`
  width: 100%;
  margin: 1rem 0;
  min-height: 100vh;
  display: flex;

  .project-detail {
    margin: 2rem;

    border-radius: 10px;
    width: 100%;

    h2 {
      width: 100%;
      text-align: center;
      font-family: "Concert One", sans-serif;
      padding: 2rem 0;
      color: ${props => props.theme.primaryColor};
    }

    p {
      text-align: center;
      font-size: 2rem;
      width: 90%;
      margin: 0 auto;
    }

    .project-image {
      padding: 1rem;
    }

    .project-content {
      .contribution-text {
        color: ${props => props.theme.text};
        padding: 1rem 0;
      }
      .project-technologies {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        margin: 1rem auto;

        span {
          background-color: ${props => props.theme.primaryColor};
          padding: 1rem;
          margin: 1rem;
          font-size: 2rem;
          border-radius: 0.2rem;
          color: white;

          @media (max-width: 650px) {
            font-size: 1.5rem;
          }

          @media (max-width: 400px) {
            font-size: 1.3rem;
          }
        }
      }

      .project-links {
        display: flex;
        justify-content: center;

        a {
          color: ${props => props.theme.primaryColor};
          transition: all 0.3s ease-in-out;

          &:hover {
            transform: scale(1.09);
            color: ${props => props.theme.text};
          }
          i {
            padding: 0 2rem;
          }
        }
      }

      .project-actions {
        display: flex;
        margin: 2rem auto;
        padding: 2rem 0;
        justify-content: center;

        p {
          font-size: 3rem;

          @media (max-width: 400px) {
            font-size: 2rem;
          }
          a {
            color: ${props => props.theme.text};
          }
        }
      }
    }
  }
`

export { ProjectDetail, ProjectsList, Project }
