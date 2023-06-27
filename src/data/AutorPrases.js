
// Funcion para obtener el autor de la prase //
const findAuthor = (phrase, phrases) => {
    const foundPhrase = phrases.find((item) => item.phrase === phrase);
    return foundPhrase ? foundPhrase.author : "";
  };
  
  export default findAuthor;