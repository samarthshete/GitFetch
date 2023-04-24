import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 2fr;
  }
  div {
    width: 100% !important;
  }

  h3 {
    text-align: center;
    margin-top: 0;
  }
  .statsContainer {
    display: grid;
    grid-template-columns: auto auto;
    gap: 2rem 3rem;
  }
`;

export default Wrapper;
