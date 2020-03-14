import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';
import { FiLoader } from 'react-icons/fi';


const loading = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 0.1;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(360deg);
    opacity: 0.1;
  }
`;


export const Loading = styled(FiLoader)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${loading} 3s linear infinite;
`;


export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  li {
    max-width: 300px;
    background: white;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > img {
      max-width: 200px;
      align-self: center;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      strong {
        font-size: 14px;
        line-height: 16px;
        color: #333;
      }

      span {
        font-size: 18px;
        font-weight: bold;
        color: black;
        margin: 5px 0;
      }
    }

    button {
      border: none;
      border-radius: 4px;
      background-color: #333;
      color: white;
      display: flex;
      align-items: center;
      margin-top: auto;
      transition: background-color .2s;
      overflow: hidden;

      &:hover {
        background-color: ${darken(0.05, '#333')}
      }

      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 5px 10px;
        justify-content: center;
        font-weight: bold;
        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        font-size: 14px;
        font-weight: bold;
        justify-content: center;
      }
    }
  }
`;
