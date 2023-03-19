import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import Head from "next/head";
import {useRouter} from "next/router";

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter();

    const locales = router?.locales;
    const locale = router?.locale;

    const langs = locales?.filter((lang) => lang !== locale);

    return (
        <>
            <Head>
                {
                    langs?.map((lang) => <link rel="alternate" key={lang} hrefLang={lang} href={`/${lang}`}/>)
                }
                <title>Francis Kouaho.FrontEnd Software Engineer</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
