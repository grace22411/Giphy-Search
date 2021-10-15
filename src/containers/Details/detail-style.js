import styled from 'styled-components'

export const DetailContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 50px auto;
  background-color: #fff;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  .detail-image {
    width: 20em;
    height: 20em;
    img {
      object-fit: 100%;
      width: 100%;
      height: 100%;
    }
  }
  .detail-content {
    padding: 60px;
    position: relative;
    width: 70%;
    .info {
      width: 100%;
      display: flex;
      margin-top: 40px;
      justify-content: space-between;
      .info-item {
        flex: 0 0 33.333333%;
        p {
          font-size: 14px;
          span {
            color: #266b99;
          }
        }
      }
    }
    button {
      background-color: #266b99;
      border: none;
      width: 100px;
      color: #fff;
      height: 40px;
      font-weight: 500;
      margin-top: 50px;
      cursor: pointer;
      font-family: 'Space Grotesk', sans-serif;
    }
  }

  @media only screen and (max-width: 720px) {
    flex-direction: column;
    .detail-image {
      width: 100%;
    }
    .detail-content {
      width: 100%;
      padding: 20px;
      height: auto;
    }
  }
`
