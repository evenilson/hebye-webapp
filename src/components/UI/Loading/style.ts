import styled from 'styled-components';

export const LoadingStyle = styled.div`
  height: 100%;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  svg {
    svg, path {
      &.hebye-name {
        fill: ${props => props.theme.colors.text};
      }
      
      :nth-child(3), :nth-child(4), :nth-child(2) {
        stroke: ${props => props.theme.colors.text};
      }
    }

    position: relative;
  }

  .loading {

    height: 1.5rem;
    width: 1.5rem;
    
    border-radius: 50%;
    margin-top: 1rem;

    border-top: 1px solid ${props => props.theme.colors.text};
    
    animation: rotate-ball 1s linear infinite;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};

  @keyframes rotate-ball {
    to {
      transform: rotate(0);
    }
    from {
      transform: rotate(360deg);
      
    }
  }
`;