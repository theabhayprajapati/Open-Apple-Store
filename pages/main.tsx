import React from 'react'

const Main = ({ data }: any) => {
    console.log(typeof data)
    console.log(data[7].images[0].url);

    return (
        <div>
            {
                data.map((item: any) => {
                    return <div key={item.id}>{item.title}
                        <img src={data[7].images[0].url} alt={item.modelname} />
                    </div>
                })
            }
        </div>
    )
}

export default Main
export const getServerSideProps = async (context: any) => {

    const jsondata = await fetch('https://oas.vercel.app/api/all')
    const responsedata = await jsondata.json()
    console.log(responsedata.data)
    return {
        props: {
            data: responsedata.data
        },
    }
}
