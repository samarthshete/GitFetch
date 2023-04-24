import styled from "styled-components";

const Wrapper = styled.nav`
  text-align: center;
  background-color: white;
  padding: 1.5rem;
  display: grid;
  margin-bottom: 4rem;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  gap: 1.5rem;
  h4 {
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    margin-top: 10px;
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`;

export default Wrapper;
