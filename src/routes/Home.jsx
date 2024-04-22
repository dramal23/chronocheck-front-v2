import React from 'react'
import Montres from '../components/Montres'

function Home(props) {
  return (
    <div>
        <Montres montres={props.montres}/>
    </div>
  )
}

export default Home