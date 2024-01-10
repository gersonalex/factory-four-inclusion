import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #b3b3b3;
  width: 100%;
  height: 100vh;
`;

export const CardWrapperStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  height: 80vh;
  margin: 0 auto;
  padding: 2rem 0rem;
`;

export const CardStyle = styled.div`
  background: #fff;
  width: 12rem;
  height: 20vh;
  margin: 1rem 1rem;
  text-align: center;
  padding: 1rem 0.7rem;
  line-height: 1.5rem;
  box-shadow: 2px 14px 33px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 14px 33px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 14px 33px -10px rgba(0, 0, 0, 0.75);

  p {
    margin: 0.2rem 0rem;
  }

  .name {
    font-size: 1.5rem;
  }

  .success {
    background: green;
    color: #fff;
  }

  .error {
    background: red;
    color: #fff;
    padding: 0.1rem 0.5rem;
  }

  .error ~ p {
    color: red;
  }

  .error + p {
    font-size: 20px;
  }

  .hostname {
    font-size: 14px;
  }
`;
