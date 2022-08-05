import Head from 'next/head';
import layoutstyles from './layout.module.css';
import Link from 'next/link'

const SITE_NAME = "Weather App";
const SITE_DESCRIPTION = "Weather App";

export default function Layout({children}){

    let refFavicon = "/favicon.ico/";

    return(
        <div className={layoutstyles.container}>
            <Head>
                <link rel="icon" ref={refFavicon} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta 
                    name="description"
                    content={SITE_DESCRIPTION}
                /> 
                <title>{SITE_NAME}</title>
                <meta 
                    property="og:description"
                    content={SITE_DESCRIPTION}
                    key="ogdescription"
                />
                <meta property="og:site_name" content={SITE_NAME} key="ogsitename"/>
            </Head>
            <header>The {SITE_NAME}</header>
            <main>{children}</main>
            <footer>
                <Link href="https://www.flaticon.com/free-icons">Pics by flaticon</Link>
                <p>Coding Challenge by Juliette Salevsky</p>
            </footer>
        </div>
    )
}