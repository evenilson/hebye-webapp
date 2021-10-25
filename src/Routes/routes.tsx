import {BrowserRouter, Route, Switch} from 'react-router-dom';
import GlobalStyle from '.././styles/global';

import light from '.././styles/themes/ligth';
import dark from '.././styles/themes/dark';

import { DefaultTheme, ThemeProvider } from 'styled-components';

import usePersistedState from '.././hooks/usePersistedState';
import { AuthContextProvider } from '.././contexts/AuthContext';
import { BreakpointContextProvider } from '.././contexts/BreakpointContext';

import { Home, Signin, Signup } from '.././pages';

import { Loading } from "../components/UI/Loading";

import PrivateRoute from './PrivateRoute'

export function Routes() {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthContextProvider>
          <BreakpointContextProvider>
            <Switch>
              <PrivateRoute path="/" exact component={Home} />
              <Route path="/registre-se" component={Signup}/>
              <Route path="/login" component={Signin}/>
            </Switch>
            <Loading />
            <button onClick={toggleTheme} style={{position: 'fixed', right: '.5rem', bottom:'.5rem'}}>mudar tema</button>
          </BreakpointContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
  </BrowserRouter>
  )
}