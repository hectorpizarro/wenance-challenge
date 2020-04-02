/**
 * Styled components for Card
 */
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid ${({ theme: { color } }) => color.gray700};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  margin: ${({ theme: { dim } }) => dim.d4};
  padding: ${({ theme: { dim } }) => dim.d4};
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 4rem auto;
  grid-template-areas:
    'nameArea nameArea'
    'heightLabel heightValue'
    'genderLabel genderValue'
    '. buttonArea';
  font-size: ${({ theme: { fontSize } }) => fontSize.tiny};

  @media (min-width: 640px) {
    grid-template-columns: 4rem 1fr auto;
    grid-template-areas:
      'nameArea nameArea buttonArea'
      'heightLabel heightValue .'
      'genderLabel genderValue .';
    font-size: ${({ theme: { fontSize } }) => fontSize.small};

    & .name {
      font-size: ${({ theme: { fontSize } }) => fontSize.medium};
    }
  }

  & .name {
    font-weight: 700;
    grid-area: nameArea;
    font-size: ${({ theme: { fontSize } }) => fontSize.small};
  }
  & .heightLabel {
    grid-area: heightLabel;
    color: ${({ theme: { color } }) => color.gray600};
  }
  & .heightValue {
    grid-area: heightValue;
  }
  & .genderLabel {
    grid-area: genderLabel;
    color: ${({ theme: { color } }) => color.gray600};
  }
  & .genderValue {
    grid-area: genderValue;
    text-transform: capitalize;
  }
  & .button {
    grid-area: buttonArea;
    justify-self: end;
  }
`;

const Styles = {
  Container,
  Grid
};

export default Styles;
