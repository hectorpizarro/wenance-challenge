/**
 * Main styled components
 */
import styled from 'styled-components';

const Container = styled.div`
  margin: ${({ theme: { dim } }) => dim.d2};
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Styles = {
  Container,
  TopRow
};

export default Styles;
