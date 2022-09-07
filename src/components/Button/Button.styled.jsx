import styled from 'styled-components';

export const LoadBtn = styled.button`
  text-align: center;
  width: ${p => p.theme.sizes[4]};
  height: ${p => p.theme.sizes[2]};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.sm};
  text-transform: uppercase;
  font-weight: 700;
  margin: 0 auto;
  display: block;
  margin-bottom: ${p => p.theme.sizes[1]};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary}; ;
`;
