//Funcion para obtener el elemento random del JSON//
const getElementRandom = (a) => {
    const index = Math.floor(Math.random() * a.length);
    return a[index];

}
export default getElementRandom