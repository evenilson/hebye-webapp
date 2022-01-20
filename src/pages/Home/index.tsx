// import { AuthContainer, AuthContainerMobile, ContentContainer, FormContainer, WaveMobile } from '../styles';
// import { useBreakpoint } from '../../../hooks/useBreakpoint'

import { useAuth } from "../../hooks/useAuth"

// // import LogoHebyeImg from '../../../assets/images/logo-hebye.svg';
// import { Input } from '../../../components/UI/Input';
// import { Button } from '../../../components/UI/Button'
// import { Link } from 'react-router-dom';


export function Home() {

  const {
    logout,
    user
  } = useAuth()


  return (
    <>
      <button onClick={ () => logout() }>sair</button>

      { user && <>
      <p>{user.name}</p>
      <img src={user.avatar} alt={user.name} /></> }
      
    </>
  )
}