import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
    }
  }
  .form-center {
    background: var(--clr-white);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;
  }
  input {
    padding: 0.25rem 0.5rem;
    outline-color: var(--clr-grey-10);
  }
  button {
    border-radius: 5px;
    border-color: transparent;
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    background: var(--clr-primary-5);
    color: var(--clr-white);
    transition: var(--transition);
    cursor: pointer;
  }
  @media (max-width: 800px) {
    button,
    input,
    svg {
      font-size: 0.85rem;
    }
  }
  svg {
    color: var(--clr-grey-5);
  }
  input,
  button,
  svg {
    font-size: 1.3rem;
  }
`;

export default Wrapper;
