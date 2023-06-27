import { useState } from 'react'
import phrases from './data/phrases.json'
import './App.css'
import CardCookie from './components/CardCookie'
import getElementRandom from './data/elementRandom';
import ButtonPhrase from './components/buttonPhrase';
import findAuthor from './data/AutorPrases';
import AutorPhrase from './components/AutorPhrase';



function App() {
  const imgBackground = [1,2,3,4];
  const initialView = getElementRandom(imgBackground);
  const initialPhrase =getElementRandom(phrases);

  const [viewRandom, setViewRandom] = useState (initialView);
  const [phraseRandom, setPhraseRandom] = useState (initialPhrase);


  const author = findAuthor(phraseRandom.phrase, phrases);

  
  
  const mainStyle = {
    backgroundImage: `url('/image/fondo${viewRandom}.jpg')`
  };
  
  return (

    
    <>
    
    <main
      style={mainStyle}
      className="app h-screen bg-center bg-cover bg-no-repeat flex flex-col items-center"
    >
      <div className="app__header">
        <h1 className="font-title text-white font-black text- text-stroke-3 text-6xl tracking-tight mt-20">
          GALLETAS DE LA FORTUNA
        </h1>
      </div>
      <section className="app__main flex flex-col items-center">
        <ButtonPhrase
          setPhraseRandom={setPhraseRandom}
          setViewRandom={setViewRandom}
          imgBackground={imgBackground}
        />
        <CardCookie 
        phraseRandom={phraseRandom}
        />
        <AutorPhrase
        author={author}
        />
        
      </section>
      
    </main>
      
      
    </>
  )
}

export default App
