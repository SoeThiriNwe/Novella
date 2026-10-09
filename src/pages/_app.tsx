import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "@mui/material";
import theme from "@/general/theme";
import { Provider } from 'react-redux'
import { store } from '../store/store'
import NavigationBar from "@/components/navigationBar";
export default function App({ Component, pageProps : {session, ...pageProps} }: AppProps) {
    return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <NavigationBar/> 
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  )

}
