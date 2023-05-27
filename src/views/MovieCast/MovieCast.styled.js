import styled from 'styled-components';



export const CastGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const CastName = styled.h3`
  color: red;
  font-weight: bold;
`;
export const Character = styled.p`
  display: flex;
  flex-direction: column;
  color: darkblue;
  font-weight: bold;
`;
export const CharacterValue = styled.span`
  color: blue;
  font-weight: bold;
`;
