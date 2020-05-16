import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styled/materialUITheme';
import DefaultPage from '../components/defaultPage'

export default function MyApp({ Component, pageProps }){

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return(
    <ThemeProvider theme={theme}>
      <DefaultPage>
        <Component {...pageProps}/>
      </DefaultPage>
    </ThemeProvider>
  )
}