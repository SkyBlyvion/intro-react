import React from 'react'

const FirstComponent = ({data}) => {
    console.log(data)
    const {name, taille, age, sexe} = data
  return (
    <>
    <div>Hello à tous dit </div>
    <div>Hello à tous pense </div>
    <div>Hello à tous croit {name} qui mesure {taille}cm et a {age} ans et est {sexe}</div>
    <div>Hello à tous sait</div>
    <div>Hello à tous crie</div>
    <div>Hello à tous </div>
    </>
  )
}

export default FirstComponent


