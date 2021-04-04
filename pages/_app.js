import "tailwindcss/tailwind.css";
import { wrapper } from '../store/store'


const WrappedApp = ({ Component, pageProps, store }) => {
    console.log(store)
  return <Component {...pageProps} />
}

WrappedApp.getInitialProps= async({Component, ctx})=> {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  //Anything returned here can be access by the client
  return {pageProps: pageProps};
}

export default wrapper.withRedux(WrappedApp)
