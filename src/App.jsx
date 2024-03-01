import React, { useState } from 'react'

const App = () => {
  
  // Evolutive state with useState hook
  // rendu dynamique, evite de recharger l'interface
  const [toto, setToto] = useState('toto');

  // toggle
  const [isToto, setIsToto] = useState(true);

  // on crée une fonction qui modifie le state toto
  const modifToto = () => {
    setToto('John Doe');
  }
  // on crée une fonction qui modifie le state toto // variante
  const modifTot = () => {
    setToto('toto');
  }

  // on crée un toggle pour changer la valeur de isToto
  const toggle = () => {
    setIsToto(!isToto);
  }

  // on crée un toggle pour changer la valeur de isToto // variante
  const toggleToto = () => {
    setIsToto(!isToto);
    if(isToto) {
      setToto('toto');
    } else {
      setToto('John Doe');
    }
  }


  return (
    <>
      <h1>{toto}</h1>
      <div onClick={()=>{ modifToto() }}>Don't Click !!!</div>
      <br />
      <div onClick={()=>{ modifTot() }}>Click !!!</div>
      <br />
      <div onClick={()=>{ toggle() }}>{isToto ? 'Toto' : 'John Doe'}</div>
      <br />
      {/* <div onClick={()=>{ togglett() }}>{isToto}Appuie moi</div> */}
      <h1>{isToto ? 'Toto' : 'John Doe'}</h1>
      <div onClick={()=>{ toggleToto() }}>Appuie moi</div>


    </>
  )
}

export default App