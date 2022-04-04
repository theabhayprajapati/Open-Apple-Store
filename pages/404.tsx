// redirect user to github page
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Head from 'next/head'

const Notfoundpage = () => {
    const router = useRouter()
    useEffect(() => {
        router.push('https://github.com/theabhayprajapati/Open-Apple-Store#readme')
    }, [router])
    return (
        <div>
            <Head>
                <title>
                    Redirecting to Github Docs
                </title>
                {/* favicon.ico */}
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}

export default Notfoundpage