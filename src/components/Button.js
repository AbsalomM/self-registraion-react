import styled from 'styled-components'
import { Link } from 'react-router-dom';


export const Button = styled(Link)`
 border-radius: 50px;
 background: #43aa8b;
  border-radius: 30px;
  padding: 12px 30px 12px 30px;
  margin: 5px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;

  &:hover {
   background: #4d908e;
  }

`