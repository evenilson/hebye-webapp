import styled from 'styled-components';
import waveMobileImg from '../../assets/images/wave-mobile.svg';


export const AuthContainer = styled.div`
  display: flex;

  
`;


export const ContentContainer = styled.div`
  width: 100%;
  padding: 4rem;
`;


export const AuthContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
`;


export const WaveMobile = styled.div`
  height: 20rem;

  display: flex;
  align-items: center;
  justify-content: center;

  
  background: url(${waveMobileImg}) no-repeat bottom;
  -webkit-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;

  svg, path {
    &.hebye-name {
      fill: ${props => props.theme.title === 'dark' && '#151617'} ;
    }
    
    :nth-child(3), :nth-child(4), :nth-child(2) {
      stroke: ${props => props.theme.title === 'dark' && '#151617'};
    }


  }


`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  > *  {
    margin-bottom: 1rem;
  }

  p {
    &:last-child{
      margin-top: 5rem;
    }

    a {
      font-weight: 600;
    }
  }

  .line {
    position: relative;
    min-width: 22rem;


    text-align: center;

    margin: 1rem 0;

    filter: opacity(.3);

    font-weight: 400;

    ::before {
      position: absolute;
      content: '';
      
      width: 45%;
      height: 1px;

      background: ${props => props.theme.colors.text};

      left: 0;
      bottom: .5em;
    }

    ::after {
      position: absolute;
      content: '';
      
      width: 45%;
      height: 1px;

      background: ${props => props.theme.colors.text};

      right: 0;
      bottom: .5em;
    }

  }


`;