import styled from "styled-components";

const Wrapper = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    height: 4rem;
    background: white;
    color: black;
    /* font-style: italic; */
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: 0 1px 14px var(--light-shadow-color);
    padding: 0 4rem;
    z-index: 9999;
  }
  .header .brand {
    font-size: 1.25rem;
    font-weight: 500;
  }
  @media screen and (max-width: 1000px) {
    .header {
      padding: 0 2rem;
    }
  }
`;

export default Wrapper;
