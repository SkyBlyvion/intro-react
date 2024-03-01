import React from 'react'
import ThirdComponent from './ThirdComponent'

const styles = {
    box: {
        color: '#FF0000', 
        border: '1px solid #4444', 
        paddingTop: '10px'
    }
}

const SecondComponent = ({data}) => {
    console.log('second component', data)
  return (
    <>
    <div style={styles.box}>SecondComponent</div>
    <ThirdComponent/>
    </>
  )
}

export default SecondComponent