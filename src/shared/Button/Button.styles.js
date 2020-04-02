import styled from 'styled-components';

const Button = styled.button`
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  padding: ${({ theme: { dim } }) => dim.d1} ${({ theme: { dim } }) => dim.d2};
`;

const ButtonActive = styled(Button)`
  background-color: ${({ theme: { color } }) => color.gray700};
  border: 1px solid transparent;
  color: white;
  cursor: pointer;
  transition-duration: 300ms;
  transition-property: background-color, color, border;

  &:hover {
    background-color: white;
    border: 1px solid ${({ theme: { color } }) => color.gray700};
    color: ${({ theme: { color } }) => color.gray700};
  }
`;

const ButtonDisabled = styled(Button)`
  background-color: ${({ theme: { color } }) => color.gray400};
  border: 1px solid ${({ theme: { color } }) => color.gray500};
  color: white;
  cursor: default;
`;

const Styles = {
  Button,
  ButtonActive,
  ButtonDisabled
};

export default Styles;
