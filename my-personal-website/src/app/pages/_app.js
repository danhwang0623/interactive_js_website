import GlobalStyle from "../app/globalstyle";

function MyApp({ Component, pageProps}) {
    return (
        <>
        <GlobalStyle />
        <Component {...pageProps} />
        </>
    );
}

export default MyApp;