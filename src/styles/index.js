import styled from "styled-components"
export const primaryColor = "#2118a2"
export const secondaryColor = "#031a6b"
export const tertiaryColor = "#031a6b"

const ProjectDetail = styled.section`
  width: 100%;
  margin: 1rem 0;
  min-height: 100vh;
  display: flex;

  .project-detail {
    margin: 2rem;
    box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.2),
      0 -1px 5px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 100%;

    h2 {
      width: 100%;
      text-align: center;
      font-family: "Concert One", sans-serif;
      padding: 2rem 0;
      color: ${primaryColor};
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
        color: ${primaryColor};
        padding: 1rem 0;
      }
      .project-technologies {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        margin: 1rem auto;

        span {
          background-color: ${primaryColor};
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
          color: ${primaryColor};
          transition: all 0.3s ease-in-out;

          &:hover {
            transform: scale(1.09);
            color: black;
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
            color: ${primaryColor};
          }
        }
      }
    }
  }
`

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
          color: ${primaryColor};
          margin: 2rem auto;
          i {
            padding: 0 2rem;
          }
          h3 {
            margin: 1 2rem;
            font-family: "Concert One", cursive;
          }
        }

        .skills-body-content-details {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          padding: 1rem;

          span {
            color: ${primaryColor};
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
      background-color: ${primaryColor};
      color: white;
      margin: 1rem;
      border-radius: 5px;
      text-align: center;
      display: flex;
      align-items: center;
    }
  }
`

const Contact = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0;
  justify-content: center;
  align-items: center;

  .contact {
    width: 100%;
    margin: 2rem;
    padding: 2rem 0;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 6px 0px;

    h3 {
      width: 100%;
      text-align: center;
      color: white;
      font-family: "Concert One", cursive;
    }

    .contact-form {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 900px) {
        width: 70%;
      }

      @media (max-width: 750px) {
        width: 90%;
      }
    }

    .contact-form-image {
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 750px) {
        display: none;
      }

      img {
        width: 300px;
        height: 300px;

        @media (max-width: 900px) {
          width: 200px;
          height: 200px;
        }
      }
    }
  }
`

const Footer = styled.footer`
  background-color: #2118a2;
  padding: 1rem 0;
  text-align: center;
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    padding: 1rem 0;
  }
`
const Projects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .projects {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    height: 95vh;
    align-items: center;
    text-align: center;
    box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.2),
      0 -1px 5px 0 rgba(0, 0, 0, 0.1);
    margin: 1rem;
    border-radius: 10px;
    padding: 0 5rem;
    overflow: scroll;

    .home {
      width: 100%;
      text-align: center;
      color: white;
      font-size: 2rem;
      margin: 3rem 0;
    }

    .projects-list {
      display: flex;
      flex-wrap: wrap;
      width: 70%;
      flex-direction: column;

      @media (max-width: 1000px) {
        width: 80%;
      }

      @media (max-width: 800px) {
        width: 90%;
      }

      @media (max-width: 700px) {
        width: 100%;
      }

      .project {
        background-color: white;
        margin: 2rem 0;
        padding: 2rem 0;
        min-height: 200px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 6px 0px;
        border-radius: 10px;

        h3 {
          width: 100%;
          text-align: center;
          color: ${primaryColor};
          font-family: "Concert One", cursive;
        }

        p {
          font-size: 1.6rem;
          margin: 2rem 0;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
          margin: 1rem auto;

          span {
            background-color: ${secondaryColor};
            padding: 1rem;
            margin: 1rem;
            font-size: 1.3rem;
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
            color: ${secondaryColor};
            transition: all 0.3s ease-in-out;

            &:hover {
              transform: scale(1.09);
              color: black;
            }
            i {
              padding: 0 2rem;
            }
          }
        }
      }
    }
  }
`
const Success = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .success {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    height: 95vh;
    align-items: center;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 6px 0px;

    margin: 1rem;
    border-radius: 10px;
    padding: 0 5rem;

    @media (max-width: 1030px) {
      padding: 0 2rem;
    }

    @media (max-width: 875px) {
      flex-direction: column;
    }
    .success-image {
      display: flex;
      justify-content: center;
      width: 50%;
      img {
        width: 450px;
        height: 450px;

        @media (max-width: 875px) {
          width: 350px;
          height: 350px;
        }

        @media (max-width: 450px) {
          width: 300px;
          height: 300px;
        }

        @media (max-width: 350px) {
          width: 250px;
          height: 250px;
        }

        @media (max-width: 250px) {
          width: 150px;
          height: 150px;
        }
      }
    }

    .success-content {
      display: flex;
      justify-content: center;
      width: 50%;

      .success-content-detail {
        display: flex;
        flex-direction: column;

        h2 {
          font-size: 3rem;
          @media (max-width: 380px) {
            font-size: 2.5rem;
          }
        }
        a {
          font-size: 2.5rem;
          text-align: center;
          padding: 2rem 0;
          text-decoration: none;
          color: #2118a2;
          @media (max-width: 300px) {
            font-size: 2rem;
          }
        }
      }

      @media (max-width: 875px) {
        margin: 3rem 0;
      }
    }
  }
`

const StyledHireMe = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0;
  justify-content: center;
  align-items: center;

  .hire {
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
      width: 100%;
      text-align: center;
      color: white;
      font-family: "Concert One", cursive;

      @media (max-width: 750px) {
        width: 100%;
        text-align: center;
      }
    }

    iframe {
      width: 800px;
      height: 400px;

      @media (max-width: 900px) {
        width: 60%;
      }

      @media (max-width: 800px) {
        width: 70%;
      }

      @media (max-width: 700px) {
        width: 80%;
      }

      @media (max-width: 500px) {
        width: 95%;
        height: 300px;
        margin-bottom: 2rem;
      }

      @media (max-width: 450px) {
        height: 250px;
      }
    }
  }
`

export {
  SkillsList,
  Skill,
  Contact,
  Footer,
  ProjectDetail,
  Success,
  StyledHireMe,
  Projects,
}
