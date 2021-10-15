import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 80%;
  height: 50px;
  margin: 20px auto;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  i {
    padding: 15px 0 0 25px;
    color: #757575;
  }
  input {
    width: 85%;
    outline: none;
    font-family: 'Space Grotesk', sans-serif;
    border: none;
  }
  button {
    background-color: #266b99;
    border: none;
    width: 8%;
    border-top-right-radius: 8px;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    border-bottom-right-radius: 8px;
    font-family: 'Space Grotesk', sans-serif;
  }
  @media only screen and (max-width: 720px) {
    width: 90%;
    input {
      width: 70%;
    }
    button {
      width: 25%;
    }
  }
`

export const ImageContain = styled.div`
  flex: 0 0 33.333333%;
  //padding:0 100px;
  height: 200px;
  margin-top: 30px;
  padding-right: 20px;
  img {
    object-fit: 100%;
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 720px) {
    flex: 0 50%;
  }
`

export const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media only screen and (max-width: 720px) {
    width: 90%;
  }
`
