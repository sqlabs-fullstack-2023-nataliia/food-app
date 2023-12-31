import { useState, useEffect, ReactNode } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import dataJson from './util/dataJson.json'
import Item from './components/Item'

interface Data {
  name: string,
  id: number,
  famili: string,
  order: string,
  genus: string,
  nutritions: Nutritions
}

interface Nutritions {
  calories: number,
  fat: number,
  sugar: number,
  carbohydrates: number,
  protein: number
}

// export interface Item {
//   slug: string,
//   conpany_name: string,
//   title: string,
//   description: ReactNode
// }

function App() {

  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    setIsLoading(true);
    //await axios.get<Nutritions[]>('https://www.fruityvice.com/api/fruit/all')
    await axios.get('https://www.arbeitnow.com/api/job-board-api')
      .then(result => {
        setData(result.data.data)
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err.message)
        setIsLoading(false);
      })
    //setData(dataJson)
  }

  return (
    <>
      <div className="container">
        <div className="accordion accordion-flush" id="accordionFlushExample">

          {data.map((e, i) => {
            return <Item index={i} item={e} />
          })}



        </div>
      </div>

    </>
  )
}

export default App
