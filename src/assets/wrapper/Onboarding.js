import styled from "styled-components";

const Wrapper = styled.div`
  .card span {
    font-size: 1rem;
  }

  .card input {
    margin: 1rem 0;
    padding: 1rem;
    font-size: 1rem;
    font-family: inherit;
    display: block;
    border: 1px solid #ddd6fe;
    border-radius: 5px;
    width: 100%;
  }

  .card select {
    margin: 1rem 0;
    padding: 0.8rem;
    font-size: 1rem;
    font-family: inherit;
    display: block;
    border: 1px solid #ddd6fe;
    border-radius: 5px;
    width: 100%;
    background: transparent;
  }

  .card .button {
    border: none;
    outline: none;
    background-color: #3b82f6;
    margin-top: 1.25rem;
    padding: 0.5rem 3rem;
    border-radius: 3px;
    color: white;
    cursor: pointer;
    display: block;
  }

  .card .button:hover {
    background-color: #1d4ed8;
  }

  .card .butotn:disabled {
    opacity: 0.5;
  }
  .card h1 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
`;

export default Wrapper;
