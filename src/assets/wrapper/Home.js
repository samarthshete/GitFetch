import styled from "styled-components";

const Wrapper = styled.section`
  .main {
    padding: 2rem 2.5rem;
  margin: 3rem auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     
  }
  .title {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
  }

  .title,
  .description {
    text-align: center;
  }
  .main .card {
    padding: 2.5rem;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    border-radius: 2px;
    border: 1px solid #f3f4f6;
    width: 550px;
    max-width: 70%;
  }
  @media screen and (max-width: 750px) {
    .main .card {
      margin: 0.5rem;
      padding: 0.5rem;
      box-shadow: none;
      border-radius: 2px;
      border: none;
      max-width: 100%;
    }
  }
`;

export default Wrapper;
