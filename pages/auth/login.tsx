import { getProviders, getSession, signIn, useSession } from 'next-auth/react'
import React from 'react'
import Header from '../../components/styles/Header'

const Login = ({ serversession, providers, data }: any) => {
    const { data: session } = useSession()
    console.log(session, 'SESION')
    return (
        <div className='text-white font-extrabold text-5xl'>
            <Header />

            {

                !session ? (
                    <main>
                        <h1>Login</h1>
                        <p>
                            <button onClick={() => signIn('google')}>
                                Sign in with Google
                            </button>
                        </p>

                    </main>) : (
                    <main>

                        <h1>
                            {session?.user?.name}
                        </h1>
                    </main>
                )
            }

        </div>
    )
}

export default Login

export const getServerSideProps = async (context: any) => {

    // get session nextauthentication
    const serversession = await getSession(context)
    console.log(serversession?.user, '👥');

    // get providers
    const providers = await getProviders()
    console.log(providers)


    const data: string[] = ['appe', 'bana']

    return {
        props: {
            data,
            serversession,
            providers
        },
    }
}
