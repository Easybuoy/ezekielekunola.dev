import styled from "styled-components"

const Navigation = styled.nav`
  color: white;
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
  height: 100vh;
  justify-content: space-around;
  padding: 2rem 0;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }

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
        color: white;
        padding: 0 1rem;

        i {
          @media (max-width: 800px) {
            margin: 1rem 0;
          }

          @media (max-width: 500px) {
            font-size: 4rem;
          }

          @media (max-width: 350px) {
            font-size: 3rem;
          }
        }

        @media (max-width: 800px) {
          padding: 0 2rem;
        }
      }
    }

    .header-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: white;
      margin-top: 3rem;

      h1 {
        margin: 1rem 0;
        font-family: "Concert One", cursive;

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

  .header-image {
    width: 40%;
    display: flex;
    align-items: center;

    @media (max-width: 800px) {
      width: 100%;
    }

    img {
      width: 70%;
      background-color: white;
      padding: 0.5rem;
      margin: 0 auto;

      @media (max-width: 800px) {
        border-radius: 50%;
        width: 300px;
        height: 300px;
      }

      @media (max-width: 400px) {
        width: 200px;
        height: 200px;
      }

      @media (max-width: 350px) {
        width: 150px;
        height: 150px;
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
    img {
      height: 100px;
      width: 100%;
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
      color: #754ef9;
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
  background-color: #754ef9;
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
}
