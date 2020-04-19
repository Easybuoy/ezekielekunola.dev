import styled from "styled-components"
export const primaryColor = "#2118a2"
export const secondaryColor = "#031a6b"
export const tertiaryColor = "#031a6b"

const Navigation = styled.nav`
  background-color: ${primaryColor};
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

const Header = styled.header`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: space-around;
  padding: 2rem 0;

  .content {
    display: flex;
    align-items: center;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 6px 0px;
    margin: 1rem;
    justify-content: center;
    width: 100%;

    border-radius: 10px;

    .header-content {
      width: 50%;
      justify-content: center;
      display: flex;
      flex-direction: column;
      text-align: center;

      @media (max-width: 800px) {
        width: 100%;
      }

      .header-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 3rem;

        h1 {
          margin: 1rem 0;
          font-family: "Concert One", cursive;
          font-size: 7rem;

          .name {
            color: ${primaryColor};
          }

          @media (max-width: 500px) {
            padding: 0 1rem;
            font-size: 4.5rem;
          }

          @media (max-width: 350px) {
            padding: 0 1rem;
            font-size: 4rem;
          }
        }

        .Typist {
          font-size: 4rem;

          @media (max-width: 450px) {
            font-size: 3rem;
          }

          @media (max-width: 350px) {
            font-size: 2rem;
          }
          .Cursor {
            padding: 0 0.1rem;
          }
        }
        .header-actions {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
          button {
            margin: 0 1rem;
          }
        }
      }
    }
  }
`

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
      color: ${secondaryColor};
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
      color: ${primaryColor};
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(1.02);
        color: ${tertiaryColor};
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
    background-color: #fbfbf2;
    text-align: center;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);

    padding-bottom: 1rem;

    h3 {
      color: ${primaryColor};
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

const BlogsList = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 5rem 0;
  justify-content: center;

  .blog {
    background-color: #170a1c;
    margin: 1rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 6px 0px;
    border-radius: 10px;
    min-height: 50vh;
    padding: 2rem 0;

    .blog-header {
      text-align: center;
      width: 100%;
      padding-bottom: 2rem;
      color: white;
      h3 {
        font-family: "Concert One", cursive;
      }
    }
  }
`

const Blog = styled.div`
  width: 30%;
  margin: 1rem auto;
  padding: 2rem;
  margin: 0 auto;
  transition: all 0.3s ease-in-out;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${primaryColor};
    transform: scale(1.01);

    @media (max-width: 570px) {
      transform: scale(1);
      background-color: inherit;

      .blog-content {
        background-color: inherit;
        color: inherit;
      }
    }

    .blog-content {
      background-color: ${primaryColor};
      border: 2px solid white;
      color: white;
      p {
        color: white;
      }
    }
  }

  @media (max-width: 950px) {
    width: 45%;
  }

  @media (max-width: 570px) {
    width: 45%;
  }

  @media (max-width: 550px) {
    width: 100%;
  }

  .blog-content {
    border: 1px solid black;
    margin: 2rem 0;
    padding: 2rem;
    background-color: white;
    color: black;

    h3 {
      padding-bottom: 1rem;
    }

    p {
      padding: 0.5rem 0;
      color: #8c8c8c;
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
  Navigation,
  ProjectsList,
  Project,
  Header,
  SkillsList,
  Skill,
  BlogsList,
  Blog,
  Contact,
  Footer,
  About,
  ProjectDetail,
  Success,
  StyledHireMe,
  Projects,
}
