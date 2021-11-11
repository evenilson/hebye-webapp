// import splashMobileImg from  '../../assets/images/splash-mobile.svg'; 

// import firebase from "firebase";
// import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, ButtonSiginWithGoogle } from "../../../components/UI/Button";
import { Input } from "../../../components/UI/Input";
// import { Input } from "../../../components/UI/Input";
import { useAuth } from "../../../hooks/useAuth";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { schemaFormSignin } from "../../../utils/schemasYup";

import { AuthContainer, AuthContainerMobile, ContentContainer, FormContainer, WaveMobile } from "../styles";

export function Signin() {

  const { device } = useBreakpoint();
  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schemaFormSignin),
  })
  const {
    signInWithGoogle,
    signInWithEmailAndPassword
  } = useAuth();

  const [loading, setLoading] = useState(false);
  const [loadingWithGoogle, setLoadingWithGoogle] = useState(false);



  const onSubmit = (data: any) => {
    setLoading(true)
    signInWithEmailAndPassword(data.email, data.password).finally(() => {setLoading(false)});
  }

  return (
    device === 'desktop' ? (
      <AuthContainer>

        <div>Signin</div>
      </AuthContainer>
    ) : (
      <AuthContainerMobile > 
        <WaveMobile>
          <svg width="191" height="135" viewBox="0 0 191 135" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="hebye-name" d="M40.832 80.6771V120.101H31.7082V103.937H13.7984V120.101H4.67456V80.6771H13.7984V96.2214H31.7082V80.6771H40.832ZM79.2207 105.064C79.2207 105.176 79.1644 105.965 79.0518 107.429H56.1295C56.5425 109.306 57.5187 110.789 59.0582 111.878C60.5976 112.967 62.5124 113.512 64.8028 113.512C66.3798 113.512 67.769 113.286 68.9705 112.836C70.2095 112.348 71.3547 111.597 72.406 110.583L77.0806 115.652C74.227 118.918 70.0593 120.552 64.5775 120.552C61.1608 120.552 58.1383 119.895 55.51 118.58C52.8817 117.229 50.8542 115.37 49.4274 113.005C48.0007 110.639 47.2873 107.955 47.2873 104.951C47.2873 101.985 47.9819 99.319 49.3711 96.9535C50.7979 94.5506 52.7315 92.692 55.1721 91.3779C57.6502 90.0262 60.4098 89.3503 63.4511 89.3503C66.4173 89.3503 69.1019 89.9886 71.5049 91.2652C73.9079 92.5418 75.7852 94.3816 77.1369 96.7846C78.5261 99.15 79.2207 101.91 79.2207 105.064ZM63.5074 95.9961C61.5175 95.9961 59.8466 96.5593 58.495 97.6857C57.1433 98.8121 56.3172 100.352 56.0169 102.304H70.9417C70.6413 100.389 69.8153 98.8684 68.4636 97.742C67.1119 96.5781 65.4599 95.9961 63.5074 95.9961ZM102.98 89.3503C105.796 89.3503 108.349 90.0074 110.639 91.3215C112.967 92.5981 114.788 94.4191 116.102 96.7846C117.417 99.1125 118.074 101.835 118.074 104.951C118.074 108.067 117.417 110.808 116.102 113.174C114.788 115.502 112.967 117.323 110.639 118.637C108.349 119.913 105.796 120.552 102.98 120.552C98.8122 120.552 95.6395 119.238 93.4618 116.609V120.101H85.0701V78.3116H93.856V93.0111C96.0713 90.5706 99.1125 89.3503 102.98 89.3503ZM101.459 113.343C103.712 113.343 105.552 112.592 106.979 111.09C108.443 109.55 109.175 107.504 109.175 104.951C109.175 102.398 108.443 100.37 106.979 98.8684C105.552 97.329 103.712 96.5593 101.459 96.5593C99.2064 96.5593 97.3479 97.329 95.8835 98.8684C94.4568 100.37 93.7434 102.398 93.7434 104.951C93.7434 107.504 94.4568 109.55 95.8835 111.09C97.3479 112.592 99.2064 113.343 101.459 113.343ZM153.205 89.8009L139.519 121.96C138.13 125.451 136.403 127.911 134.338 129.338C132.31 130.764 129.851 131.478 126.96 131.478C125.383 131.478 123.825 131.234 122.285 130.746C120.746 130.257 119.488 129.582 118.512 128.718L121.722 122.467C122.398 123.067 123.168 123.537 124.031 123.875C124.932 124.212 125.815 124.381 126.678 124.381C127.88 124.381 128.856 124.081 129.607 123.48C130.358 122.917 131.034 121.96 131.634 120.608L131.747 120.326L118.624 89.8009H127.692L136.196 110.358L144.757 89.8009H153.205ZM185.646 105.064C185.646 105.176 185.589 105.965 185.477 107.429H162.555C162.968 109.306 163.944 110.789 165.483 111.878C167.023 112.967 168.938 113.512 171.228 113.512C172.805 113.512 174.194 113.286 175.396 112.836C176.635 112.348 177.78 111.597 178.831 110.583L183.506 115.652C180.652 118.918 176.484 120.552 171.003 120.552C167.586 120.552 164.563 119.895 161.935 118.58C159.307 117.229 157.279 115.37 155.852 113.005C154.426 110.639 153.712 107.955 153.712 104.951C153.712 101.985 154.407 99.319 155.796 96.9535C157.223 94.5506 159.157 92.692 161.597 91.3779C164.075 90.0262 166.835 89.3503 169.876 89.3503C172.842 89.3503 175.527 89.9886 177.93 91.2652C180.333 92.5418 182.21 94.3816 183.562 96.7846C184.951 99.15 185.646 101.91 185.646 105.064ZM169.932 95.9961C167.943 95.9961 166.272 96.5593 164.92 97.6857C163.568 98.8121 162.742 100.352 162.442 102.304H177.367C177.066 100.389 176.24 98.8684 174.889 97.742C173.537 96.5781 171.885 95.9961 169.932 95.9961Z" fill="#FAFCFF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M76.1344 47.9342C73.1425 50.9431 68.1152 56.3111 65.3015 59.4929L69.5119 64.127L85.5453 48.3466C69.158 32.1939 78.5067 12.1282 93.5992 8.29168C107.447 4.77151 120.276 14.7789 121.471 27.5281C121.741 30.41 121.156 36.5183 126.929 39.103C135.661 -0.526367 86.1546 -12.1656 72.6279 18.1729C66.9916 30.8142 71.475 39.1982 76.1344 47.9342Z" stroke="#FAFCFF" stroke-width="1.30942" stroke-miterlimit="22.9256"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M99.4548 61.2556C96.4725 58.7008 94.5077 56.4664 92.1878 54.2268L87.3469 58.6606C89.77 61.2876 97.6839 69.2981 99.2516 70.7987C102.014 68.1189 120.495 49.4729 121.79 47.7555L117.434 43.7452L99.4548 61.2556V61.2556Z" stroke="#FAFCFF" stroke-width="1.30942" stroke-miterlimit="22.9256"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M82.827 30.0286L87.0507 30.0311C88.0129 26.8877 88.4799 24.3117 91.2834 21.5448C94.3376 18.5306 95.9647 18.6724 99.2083 17.7535L99.1893 13.7401C89.7627 13.5184 83.2198 20.8536 82.827 30.0286V30.0286Z" stroke="#FAFCFF" stroke-width="1.30942" stroke-miterlimit="22.9256"/>
          </svg>
        </WaveMobile>
        <ContentContainer>

          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <h1>Entrar</h1>
            
            <ButtonSiginWithGoogle onClick={ () => {
              setLoadingWithGoogle(true)
              signInWithGoogle().finally(() => {setLoadingWithGoogle(false);})
            } } isLoading={loadingWithGoogle}/>
            
            <div className="line"> Ou </div>

            <Input 
              registerAndErros={ {'register': register, 'errors': errors} }
              name="email" type="email" title="Endereço de E-mail" 
            />

            <Input 
              registerAndErros={ {'register': register, 'errors': errors} }
              name="password" type="password" title="Senha" 
            />

            <Button title="Entrar" isLoading={loading} />

            <p>Esqueceu a senha? <Link to="/recuperar-senha" >Recuperar senha</Link></p>


            <p>Ainda não possui uma conta? <Link to="/registre-se" >Inscreva-se</Link></p>

          </FormContainer>

        </ContentContainer>
      </AuthContainerMobile>
    )
  )
}