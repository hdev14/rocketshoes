import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity .2s;

  &:hover {
    opacity: 0.8;
  }

  div {
    text-align: right;
    margin-right: 10px;

    h5 {
      color: white;
      margin-bottom: 5px;
    }

    span {
      display: block;
      font-size: 12px;
      color: #999;
    }
  }
`;
