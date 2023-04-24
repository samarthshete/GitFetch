import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  background: var(--clr-white);
  
  .github-repo-card {
    display: grid;
    grid-template-rows: 1fr auto;
    box-shadow: var(--shadow-2);
    padding: 1rem 1.5rem;
    align-items: center;
  }
  .repo-card-body-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    @media (min-width: 800px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1200px) {
      grid-template-columns: 1fr 2fr;
    }
  }
  .repo-card-header {
    margin: 0;
    margin-bottom: 0.5rem;
    overflow: hidden;
  }

  .repo-card-header h4 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    
  }

  .repo-card-header p {
    font-size: 1rem;
    color: #586069;
    overflow: hidden;
  }

  .repo-card-body {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 0.875rem;
  }

  .repo-card-body > div {
    display: flex;
    align-items: center;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
  }

  .repo-card-body > div:last-child {
    margin-right: 0;
  }

  .language-icon {
    font-size: 1.125rem;
    margin-right: 0.25rem;
  }

  @media screen and (max-width: 768px) {
    .github-repo-card {
      padding: 0.75rem;
    }

    .repo-card-header h4 {
      font-size: 1.25rem;
    }

    .repo-card-header p {
      font-size: 0.875rem;
    }

    .repo-card-body {
      font-size: 0.75rem;
    }

    .repo-card-body > div {
      margin-right: 0.5rem;
    }

    .language-icon {
      font-size: 1rem;
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 576px) {
    .repo-card-header h4 {
      font-size: 1.125rem;
    }

    .repo-card-header p {
      font-size: 0.75rem;
    }

    .repo-card-body {
      font-size: 0.625rem;
    }

    .language-icon {
      font-size: 0.875rem;
      margin-right: 0.25rem;
    }
  }
`;

export default Wrapper;
