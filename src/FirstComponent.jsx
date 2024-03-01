import React from 'react'
import SecondComponent from './SecondComponent'

const FirstComponent = ({data}) => {
    console.log('first component', data)
    const {name, taille, age, sexe} = data
  return (
    <>

    <div>Hello à tous croit {name} qui mesure {taille}cm et a {age} ans et est {sexe}</div>
    <SecondComponent data={data}/>

    </>
  )
}

export default FirstComponent


