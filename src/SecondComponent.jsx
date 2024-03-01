import React from 'react'
import ThirdComponent from './ThirdComponent'



const SecondComponent = ({data}) => {
    console.log('second component', data)
  return (
    <>
    <div>SecondComponent</div>
    <ThirdComponent/>
    </>
  )
}

export default SecondComponent