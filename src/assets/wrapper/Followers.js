import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--clr-white);
  position: relative;
  .followers {
    overflow: scroll;
    height: 260px;
    display: flex;  
    flex-direction: column;  
    gap: 1.25rem 1rem;
    padding: 1rem 2rem;
  }
  .followers-list {
    transition: var(--transition);
    padding: 0.15rem 0.5rem;
    border-radius: var(--radius);
    display: flex;
    align-items: center;
    column-gap: 1rem;
    img {
      height: 100%;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
    }
    h4 {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-grey-5);
    }
  }
`;

export default Wrapper;
