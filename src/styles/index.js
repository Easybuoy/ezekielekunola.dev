import styled from "styled-components"

const Navigation = styled.nav`
  background-color: #031a6b;
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
    box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.2),
      0 -1px 5px 0 rgba(0, 0, 0, 0.1);
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

      .contact-details {
        margin: 0 auto;

        a {
          padding: 0 1rem;
          color: #031a6b;

          i {
            transition: all 0.3s ease-in-out;

            @media (max-width: 800px) {
              margin: 1rem 0;
              font-size: 4.5rem;
            }

            @media (max-width: 500px) {
              font-size: 4rem;
            }

            @media (max-width: 365px) {
              font-size: 3.5rem;
            }
            &:hover {
              transform: scale(1.1);
              color: black;
            }
          }
        }
      }

      .header-text {
        display: flex;
        flex-direction: column;
        justify-content: center;

        margin-top: 3rem;

        h1 {
          margin: 1rem 0;
          font-family: "Concert One", cursive;

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
          font-size: 3rem;
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
    width: 40%;
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
      color: #b2b2b2;
      font-size: 2rem;
    }
  }
  .about-image {
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    @media (max-width: 750px) {
      width: 90%;
    }

    img {
      -webkit-box-shadow: 10px 10px 2px 2px rgba(3, 26, 107, 1);
      -moz-box-shadow: 10px 10px 2px 2px rgba(3, 26, 107, 1);
      box-shadow: 10px 10px 2px 2px rgba(3, 26, 107, 1);
      width: 400px;
      background-color: white;

      margin: 0 auto;
      border-radius: 10px;
      height: 400px;

      @media (max-width: 910px) {
        width: 100%;
      }

      @media (max-width: 750px) {
        border-radius: 50%;
        width: 300px;
        height: 300px;
        -webkit-box-shadow: 0px 0px 5px 3px rgba(3, 26, 107, 1);
        -moz-box-shadow: 0px 0px 5px 3px rgba(3, 26, 107, 1);
        box-shadow: 0px 0px 5px 3px rgba(3, 26, 107, 1);
      }

      @media (max-width: 400px) {
        width: 250px;
        height: 250px;
      }
    }
  }
`

const ProjectsList = styled.div`
  background-color: white;
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
  }

  h3 {
    margin-bottom: 5rem;
    width: 100%;
    text-align: center;
  }
`

const Project = styled.div`
  width: 23%;
  margin: 1rem auto;
  color: white;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
  
  @media (max-width: 950px) {
    width: 30%;
  }

  @media (max-width: 750px) {
    width: 45%;
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

    padding-bottom: 1rem;

    .project-technologies {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      width: 100%;

      span {
        background-color: #754ef9;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 1.2rem;
        border-radius: 0.2rem;
      }
    }

    h3 {
      color: #031a6b;
      padding: 1rem 0;
      margin: 0;
    }
  }
`

const SkillsList = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 5rem 0;
  justify-content: center;
  color: white;
  h2 {
    text-align: center;
    width: 100%;
  }
`

const Skill = styled.div`
  width: 10%;
  margin: 1rem auto;
  padding: 0 0.5rem;
  margin: 2rem;
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    width: 15%;
  }

  @media (max-width: 570px) {
    width: 20%;
  }

  .skill {
    width: 100%;
    text-align: center;
    color: white;

    img {
      /* height: 150px; */
      width: 100%;
    }
  }
`

const BlogsList = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 5rem 0;
  justify-content: center;
  background-color: #170a1c;
  color: white;

  .blog-header {
    text-align: center;
    width: 100%;
    padding-bottom: 2rem;
  }
`

const Blog = styled.div`
  width: 20%;
  margin: 1rem auto;
  padding: 2rem;
  margin: 0 auto;

  transition: all 0.3s ease-in-out;
  border: none;

  &:hover {
    background-color: #754ef9;
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
      background-color: #754ef9;
      border: 2px solid white;
      color: white;

      p {
        color: white;
      }
    }
  }

  @media (max-width: 950px) {
    width: 30%;
  }

  @media (max-width: 770px) {
    width: 40%;
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
  background-color: indigo;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem 0;

  h3 {
    width: 100%;
    text-align: center;
    color: white;
  }
`

const Footer = styled.footer`
  background-color: #031a6b;
  padding: 2rem 0;
  text-align: center;
  color: white;
`

const Particle = styled.div`
  .particles {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-color: black;
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
  Particle,
  About,
}
