import React from 'react'

const Main = () => {
    return (
        <div>Main</div>
    )
}

export default Main
export const getServerSideProps = async (context: any) => {

    const jsondata = await fetch('https://oas.vercel.app/api/all')
    const response = await jsondata.json()
    
    
    console.log(response.data[2], 'we are in the getServerSideProps function')

    return {
        props: {

        }
    }
}
