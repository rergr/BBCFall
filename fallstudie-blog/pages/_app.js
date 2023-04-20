import "./_app.css"
import Header from '@components/header'
import Footer from "@components/footer";
import useSession from "@lib/session";
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
    // Session erstellen

    const session = useSession()
    // Session zu pageProps hinzufügen
    const newPageProps = {
        ...pageProps,
        session
    }


    return (
    <>
        <Header session={session}/>
        <Component {...newPageProps} />
        <Footer />

    </>

    )
}

