import styled from 'styled-components';


export const InputStyle = styled.div`

  label {
    display: block;
    margin-bottom: .2rem;

    font-weight: 600;
  }

  input {
    border: none;
    outline: none;
    border-radius: 6px;

    min-width: 22rem;
    height: 3rem;

    font-weight: 500;

    padding: .5rem;

    color: ${props => props.theme.colors.text};
    
    background: ${props => props.theme.colors.backgroundInput};

    &:hover, &:focus {
      border: 2px solid ${props => props.theme.colors.blueLight};
    }

    transition: .1s;
  }

`;