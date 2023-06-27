import getElementRandom from "../data/elementRandom";
import phrases from "../data/phrases.json"

const ButtonPhrase = ({setPhraseRandom, setViewRandom, imgBackground}) => {

    const takeRandomPhrase = () =>{
        const newRandomPhrase = getElementRandom(phrases) 
        setPhraseRandom(newRandomPhrase)
        const newView = getElementRandom(imgBackground)
        setViewRandom(newView);
        
    }

    return (
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        onClick={takeRandomPhrase}
      >
        Abrir una galleta
      </button>
    );
}

export default ButtonPhrase