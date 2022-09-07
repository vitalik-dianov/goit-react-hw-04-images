import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: ${p => p.theme.sizes[5]};
  object-fit: cover;
`;

export const ImageItem = styled.li`
  position: relative;
  box-shadow: ${p => p.theme.shadows.all};
`;
