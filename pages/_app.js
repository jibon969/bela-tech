import Head from "next/head";
import Script from "next/script"
import '../styles/globals.css'

import Footer from '../layouts/Footer/Footer'
import HereToHelp from '../src/components/HereToHelp/HereToHelp'
import Services from '../src/components/Services/Services'
import Team from '../src/components/Team/Team'
import ProjectStartArea from '../src/components/ProjectStartArea/ProjectStartArea'
import Contact from '../src/components/Contact/Contact'

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                    crossorigin="anonymous"
                />
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.css"/>
            </Head>

            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                crossorigin="anonymous"/>

            <Component {...pageProps} />

            <HereToHelp/>
            <Team/>
            <Services/>
            <ProjectStartArea/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default MyApp;