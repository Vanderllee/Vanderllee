import styled from 'styled-components';

export const Background = styled.div`
  background-color: #272727;
  color: #fff;
`;
export const Container = styled.div`
  margin: auto;
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  p {
    font-family: 'Anton', Arial, Helvetica, Sans-serif;
    font-size: 30px;
    color: #bb9878;
  }
  li {
    font-family: 'Anton', Arial, Helvetica, Sans-serif;
    text-transform: uppercase;
    font-size: 30px;
    padding-left: 25px;
  }
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
