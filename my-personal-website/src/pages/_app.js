import GlobalStyle from "../app/styles/globalstyle";

function MyApp({ Component, pageProps}) {
    return (
        <>
        <GlobalStyle />
        <Component {...pageProps} />
        </>
    );
}

export default MyApp;