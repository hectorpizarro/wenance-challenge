import styled from 'styled-components';

const Container = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.tiny};
  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  & button {
    margin-left: ${({ theme: { dim } }) => dim.d2};
    width: ${({ theme: { dim } }) => dim.d10};
  }
`;

const Styles = {
  Container
};

export default Styles;
