import styled from 'styled-components';

export const ForgotPasswordContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    margin-bottom: 1rem;

    path {
      stroke: ${props => props.theme.colors.text};
    }

  }

  h1 {
    margin-bottom: 7rem;
  }

  .secondary {
    margin-top: 1rem;
  }
`

export const StepsContainer = styled.div`

margin-top: 3rem;

  height: .8rem;
  width: 3rem;
  background: ${props => props.theme.colors.blueLight};
`