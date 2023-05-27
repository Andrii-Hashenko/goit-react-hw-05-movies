import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const CardMovie = styled.div`
  display: flex;
  margin-bottom: 10px;
  /* border-bottom: 1px solid #2a363b; */
`;
export const MovieInfo = styled.div`
  display: block;
  margin-left: 20px;
`;
export const Horizontal = styled.div`
  height: 12px;
  border: 0;
  box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);
`;
export const Titleh2 = styled.h2`
  color: #2314f7;
`;
export const Titleh3 = styled.h3`
  color: #2314f7;
`;

export const LinkElem = styled(NavLink)`
  display: inline-block;
  /* display: flex; */
  text-decoration: none;
  padding: 10px;
  font-weight: 700;
  color: #30ebfc;
  font-size: 26px;
  background: #fcfccf;
  /* border: 5px solid #30ebfc; */
  border-radius: 8px;
  margin-right: 20px;
  margin-bottom: 10px;
  box-shadow: 0 0 10px 1px #30ebfc;

  &.active {
    /* composes: link; */
    color: #2314f7;
  }
`;
