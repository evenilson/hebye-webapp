import styled from 'styled-components';

export const InputStyle = styled.div`

  label {
    display: flex;
    flex-direction: column;
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

  span {
    font-size: small;
    font-weight: 500;

    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.secondary};

    width: fit-content;

    padding: .2rem .5rem;

    border-radius: 3px 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    ::before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-bottom: 17px solid ${props => props.theme.colors.secondary};
      border-left: 7px solid transparent;
      border-right: 12px solid transparent;
      top: -9px;
      left: 4px;
    }
  }
`;