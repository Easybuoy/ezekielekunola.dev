import styled from "styled-components"

const Header = styled.header`
  background-color: blue;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  padding: 2rem 0;

  .header-content {
    width: 60%;
    border: 2px solid black;
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;

    .contact-details {
    }

    .header-text {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .header-actions {
        display: flex;
        justify-content: center;
        button {
          margin: 0 1rem;
        }
      }
    }
  }

  .header-image {
    width: 35%;
    border: 2px solid black;
    height: 100%;

  }
`

const ProjectsList = styled.div`
  width: 100%;
  clip-path: polygon(0% 0%, 100% 10%, 100% 100%, 0% 100%);
  min-height: 100vh;
  background-color: red;
  display: flex;
  flex-wrap: wrap;
  padding-top: 10rem;
`

const Project = styled.div`
  width: 23%;
  margin: 1rem auto;
  padding: 0 0.5rem;
  border: 2px solid blue;

  a {
    text-decoration: none;

    img {
      height: 100px;
      width: 100%;
    }
  }

  .project-body {
    background-color: green;
    text-align: center;
    /* padding-bottom: 1rem; */
  }
`


export { ProjectsList, Project, Header }
