/**
 * Paginator styled components
 */
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme: { fontSize } }) => fontSize.tiny};
  justify-content: center;

  & button {
    margin: 0 ${({ theme: { dim } }) => dim.d1};
    width: ${({ theme: { dim } }) => dim.d10};
  }

  & div {
    text-align: center;
    margin-bottom: ${({ theme: { dim } }) => dim.d2};
  }

  @media (min-width: 640px) {
    display: inline-flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    & button {
      margin-left: ${({ theme: { dim } }) => dim.d2};
      width: ${({ theme: { dim } }) => dim.d10};
    }
    & div {
      text-align: left;
    }
  }
`;

const Styles = {
  Container
};

export default Styles;
