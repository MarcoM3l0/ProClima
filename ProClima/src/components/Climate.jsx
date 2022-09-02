import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

import './Climate.css'

const apiKey = import.meta.env.VITE_API_KEY
const climateURL = import.meta.env.VITE_API
const climateIMG = import.meta.env.VITE_IMG

const Climate = () => {

    const handleSubmit = (e) => {

        e.preventDefault()
        

    }


    const [ search, setSearch ] = useState('')
    const [ data, setData ] = useState([])
    
    console.log("controle: ", data)

    const CheckSearch = () => {

        if(!search) return (
            alert('Por favor, digite um local!'),
            setData([])
        )

        getDataApi()
       
    }


    const getDataApi = async () => {

        try {

            await fetch(`${climateURL}q=${search}&APPID=${apiKey}`)
    
                .then((res) => res.json())
    
                .then((data) => {
                    if(data?.cod && data.cod === '404') {
                        return alert('Local não encontrado ou escrito errado!')
                    }                
                    
                    setData(data)
                })
                
        }   catch (err) {
                alert(err )
                console.log(err)
        }
    }


    return (
        <div className='Conteiner'>

            <form onSubmit={handleSubmit}>
                <div className='header'>
                    <input type='text' placeholder='Digite um local:' onChange={(e) => setSearch(e.target.value)}/>
                    <button onClick={CheckSearch}><BsSearch /></button>
                </div>    
            </form>
            
            <div className='content'>
                {data.length === 0 && <p>Não há local definido!</p> || 
                    <>
                    <section>

                        <h2>{`${data.name}, ${data.sys.country}`}</h2>
                        <p>{`Temperatura: ${(data.main.temp - 273.15).toFixed(1)}° C`}</p>
                        <p>{`Vento: ${data.wind.speed} km/h`}</p>

                    </section>

                    <img src={`${climateIMG}${data.weather[0].icon}@2x.png`} alt="Clima" />
                </>
                }
            </div>
        </div>
    )
}

export default Climate