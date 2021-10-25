import styled from 'styled-components';

export const ButtonStyle = styled.button`
  border: none;
  border-radius: 6px;

  font-weight: 700;

  background: ${props => props.theme.colors.blueLight};

  color: ${props => props.theme.colors.background};

  padding: .8rem 0;

  min-width: 22rem;
  height: 3rem;

  cursor: pointer;

  :not(:disabled):hover {
    filter: brightness(.95);
  }

  :disabled {
    filter: opacity(.4);

    cursor: not-allowed;
    
    &.loading {
      position: relative;
      color: transparent;
  
      &::after {
        content: '';
        position: absolute;
        height: 1.5rem;
        width: 1.5rem;
        
        border-radius: 50%;
        /* background: red; */

        top: .7rem;
        left: 48%;
      

        border-top: 3px solid ${props => props.theme.colors.text};
        
        animation: rotate-ball 1s linear infinite;
      }
    }
  }


  @keyframes rotate-ball {
    to {
      transform: rotate(0);
    }
    from {
      transform: rotate(360deg);
      
    }
  }

`;

export const ButtonSigninWithGoogleStyle = styled.button`
  transition: background-color .3s, box-shadow .3s;
  position: relative;

  cursor: pointer;
  min-width: 22rem;
  
  padding: 1rem 1.2rem 1rem 3rem;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
  
  color: #757575;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;
  
  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
  }
  
  &:active {
    background-color: #eeeeee;
  }
  
  &:focus {
    outline: none;
    box-shadow: 
      0 -1px 0 rgba(0, 0, 0, .04),
      0 2px 4px rgba(0, 0, 0, .25),
      0 0 0 3px #c8dafc;
  }

  &.loading {
    position: relative;
    color: transparent;

    &::after {
      content: '';
      position: absolute;
      height: 1.5rem;
      width: 1.5rem;
      
      border-radius: 50%;
      /* background: red; */

      top: .7rem;
      left: 48%;
    

      border-top: 3px solid #757575;
      
      animation: rotate-ball 1s linear infinite;
    }
  }
  
  &:disabled {
    filter: grayscale(100%);
    background-color: #ebebeb;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
    cursor: not-allowed;
  }
`;