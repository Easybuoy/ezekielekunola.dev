import styled from 'styled-components';

const Button = styled.button`
padding: 1.5rem;
/* background-color: #754ef9; */
/* color: white; */
border: none;
outline: none;
font-size: 1.5rem;
border-radius: 3rem;
cursor: pointer;
transition: all 0.3s ease-in-out;


&:hover {
    background-color: #754ef9;
    color: white;
    transform: scale(1.03);

}
`

export {
    Button
}