import styled from "styled-components";

const Wrapper = styled.section`
  padding: 1rem 0;
  position: relative;

  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    gap: 1rem 2rem;
    flex-direction: row;
  }

  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 3rem;
  }
  span {
    width: 3rem;
    height: 3rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
  }
  .icon {
    font-size: 1.5rem;
  }
  h3 {
    margin-bottom: 0;
    letter-spacing: 0;
  }
  p {
    margin-bottom: 0;
    text-transform: capitalize;
  }
  .pink {
    background: #ffe0f0;
    color: #da4a91;
  }
  .green {
    background: var(--clr-primary-10);
    color: var(--clr-primary-5);
  }
  .purple {
    background: #e6e6ff;
    color: #5d55fa;
  }
  .yellow {
    background: #fffbea;
    color: #f0b429;
  }
`;

export default Wrapper;
