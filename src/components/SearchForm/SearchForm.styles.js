import styled from 'styled-components';

const Container = styled.div`
  align-items: stretch;
  display: flex;
  font-size: ${({ theme: { fontSize } }) => fontSize.tiny};
  height: ${({ theme: { dim } }) => dim.d7};
  justify-content: flex-end;
  margin-bottom: ${({ theme: { dim } }) => dim.d3};

  @media (min-width: 640px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.small};
    margin-bottom: 0;
  }
`;

const Input = styled.input`
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  margin-right: ${({ theme: { dim } }) => dim.d2};
  padding: ${({ theme: { dim } }) => dim.d1};
  width: 100%;

  @media (min-width: 640px) {
    width: inherit;
  }
`;

const InputActive = styled(Input)`
  border: 1px solid ${({ theme: { color } }) => color.gray700};
  background-color: white;
`;

const InputDisabled = styled(Input)`
  border: 1px solid ${({ theme: { color } }) => color.gray400};
  background-color: ${({ theme: { color } }) => color.gray200};
  color: ${({ theme: { color } }) => color.gray400};
`;

const Styles = {
  Container,
  Input,
  InputActive,
  InputDisabled
};

export default Styles;
