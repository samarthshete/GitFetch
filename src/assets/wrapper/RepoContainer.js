import styled from "styled-components";

const Wrapper = styled.div`
  .repo-content {
    display: grid;
    grid-template-columns: auto auto;
    gap: 2rem 3rem;
  }

  div {
    width: 100% !important;
  }
  .btn {
    line-height: 1.15;
  }

  .repo-title {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
    width: 120px;
  }
  .dropdown {
    position: absolute;
    top: 70%;
    left: 0;
    width: 300px;
    z-index: 2;
    border: 1px solid rgba(0, 0, 0, 0.04);
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
    visibility: hidden;
    background: var(--clr-white);
    transition: visibility 0s, opacity 0.3s ease-in-out;
  }
  .dropdown.show-dropdown {
    visibility: visible;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 8px 12px;
  }

  li:hover {
    background-color: rgba(0, 0, 0, 0.14);
    cursor: pointer;
  }

  .btn-container {
    position: relative;
    margin-top: 2rem;
  }
`;

export default Wrapper;
