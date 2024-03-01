import React, { useEffect, useState } from 'react'
import FirstComponent from './FirstComponent';

const App = () => {
  
  // cycle de vie d'un composant
  useEffect(() => {
    // on crée une fonction qui s'exécute au montage du composant
    setToto('toto');
    
    return () => {
      // on crée une fonction qui s'exécute au demontage du composant
    }

  }, [/* on crée des state qui s'exécutent au montage, permet d'upate le composant */])
  
  // Evolutive state with useState hook
  // rendu dynamique, evite de recharger l'interface
  const [toto, setToto] = useState();

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
      <br />
      <FirstComponent data={{name: 'toto', sexe: 'masculin', age: 25, taille: 180}}/>


    </>
  )
}

export default App