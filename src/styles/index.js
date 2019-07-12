import styled from "styled-components"

const Navigation = styled.nav`
  color: white;
  /* background-color: #000b0f; */
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
        /* text-decoration: none; */
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

          .Cursor--blinking {
            /* font-size: 4rem; */
          }
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

    /* @media (max-width: 300px) {
        margin: 2rem 0;
        padding: 2rem 0;
      } */

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
  width: 100%;
  clip-path: polygon(0% 0%, 100% 10%, 100% 100%, 0% 100%);
  min-height: 100vh;
  /* background-color: #00A7E1; */
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  padding-top: 10rem;
`

const Project = styled.div`
  width: 23%;
  margin: 1rem auto;
  color: white;
  /* padding: 0 0.5rem; */
 
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
  /* border-radius: 1rem; */

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

  a {
    /* text-decoration: none; */
  }
  .project-image {
    /* border-top-right-radius: 2rem;
    border-top-left-radius: 2rem; */
    img {
      height: 100px;
      width: 100%;
      /* border-top-right-radius: 1rem;
      border-top-left-radius: 1rem; */
    }
  }

  .project-body {
    /* border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem; */
    background-color: #FBFBF2;
    text-align: center;
    margin-top: 1rem;
    padding-bottom: 1rem;

    .project-technologies {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 100%;

      span {
        background-color: #D10000;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 1.2rem;
        border-radius: 2rem;
      }
    }

    h3 {
      color: #D10000;
      padding: 1rem 0;
    }
  }
`

const SkillsList = styled.section`
  width: 100%;
  /* min-height: 100vh; */
  background-color: brown;
  display: flex;
  flex-wrap: wrap;
  padding: 5rem 0;
  justify-content: center;
`

const Skill = styled.div`
  width: 10%;
  margin: 1rem auto;
  padding: 0 0.5rem;
  border: 2px solid blue;
  margin: 2rem;
  .skill {
    width: 100%;
    text-align: center;

    img {
      height: 100px;
      width: 100%;
    }
  }
`

const BlogsList = styled.section`
  width: 100%;
  /* min-height: 100vh; */
  background-color: gray;
  display: flex;
  flex-wrap: wrap;
  padding: 5rem 0;
  justify-content: center;

  .blog-header {
    text-align: center;
    width: 100%;
  }
`

const Blog = styled.div`
  width: 20%;
  margin: 1rem auto;
  padding: 0 0.5rem;
  border: 2px solid blue;
  margin: 2rem;
  background-color: yellow;

  .blog-content {
    border: 1px solid black;
    margin: 2rem 0;
    padding: 1rem;
  }
`

const Contact = styled.section`
  text-align: center;
  background-color: indigo;
`

const Footer = styled.footer`
  background-color: #D10000;
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
