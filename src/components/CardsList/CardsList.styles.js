/**
 * CardsList styled components
 */
import styled from 'styled-components';

const Message = styled.div`
  padding: ${({ theme: { dim } }) => dim.d10};
  text-align: center;
`;

const ListContainer = styled.div`
  border: 1px solid ${({ theme: { color } }) => color.gray600};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  margin: ${({ theme: { dim } }) => dim.d3} 0;
  padding: ${({ theme: { dim } }) => dim.d2};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Styles = {
  Message,
  ListContainer,
  Grid
};

export default Styles;
