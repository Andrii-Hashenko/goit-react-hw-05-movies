import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkElem = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  font-weight: 500;
  color: #2a363b;
  font-size: 22px;
  margin-right: 10px;
  box-shadow: 0 0 10px 1px #30ebfc;
  &.active {
    /* composes: link; */
    color: #2314f7;
  }
`;
