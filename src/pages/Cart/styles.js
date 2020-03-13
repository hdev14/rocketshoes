import styled from 'styled-components';
import { darken } from 'polished';

export const Product = styled.div`
  padding: 30px;
  background-color: white;
  border-radius: 5px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      display: flex;
      align-items: center;
      background-color: #333;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      text-transform: uppercase;
      font-weight: 700;
      transition: background-color .2s;

      &:hover {
        background-color: ${darken(0.1, '#333')};
      }

      svg {
        margin-left: 5px;
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    text-align: left;
    color: #666;
    text-transform: uppercase;
    padding: 12px;
  }

  img {
    height: 100px;
    border-radius: 4px;
  }

  tbody td {
    padding: 12px;

    strong {
      font-size: 14px;
      color: #333;
    }

    span {
      display: block;
      color: black;
      margin-top: 5px;
      font-size: 16px;
      font-weight: bold;
    }

    button {
      background: #666;
      border-radius: 4px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      transition: background-color .2s;
      outline: none;

      &:hover {
        background-color: ${darken(0.1, '#666')};
      }
    }

    div {
      display: flex;
      align-items: center;

      button {
        background: none;
        transition: background-color .2s, color .2s;

        &:hover {
          color: white;
        }

        &:first-child {
          border-radius: 4px 0 0 4px;
        }

        &:last-child {
          border-radius: 0 4px 4px 0;
        }
      }

      input {
        height: 30px;
        width: 50px;
        text-align: center;
        border: 1px solid #eee;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  strong {
    color: #666;
    font-size: 14px;
    text-transform: uppercase;
  }

  span {
    color: #333;
    font-size: 24px;
    font-weight: bold;
    margin-left: 5px;
  }
`;
