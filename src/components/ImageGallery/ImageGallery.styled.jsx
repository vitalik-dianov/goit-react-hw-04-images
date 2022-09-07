import styled from 'styled-components';

export const ImagesList = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: ${p => p.theme.space[4]};
  line-height: 0;
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  max-width: ${p => p.theme.sizes[11]};
`;
