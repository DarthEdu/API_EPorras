/*
//Crear mi funciona
const obtenerMemes = async () => {
    const memmeContainers = documento.getElementsById('list-memes')

    const memeTemplates = document.getElementsById('meme')
    //Peticion a la API
    const request = await fetch("https://api.imgflip.com/get_memes")
    //Transformacion a JSON
    const respuesta = await request.json()

    //Llamar solo a un rango de img de memes por el metodo slice
    respuesta.data.memes.slice(0,8).array.forEach(meme => {

        //Crear una copia del template
        const newCard = memeTemplates.cloneNode(true)

        //Acceder al elemento del img del template
        const img = newCard.querySelector('img')

        //Inyectar el atributo src al url
        img.src = meme.url

        //Agregar el nuevo elemento al contenedor
        memmeContainers.appendChild(newCard)
    });

    memeTemplates.remove()

}
//Llamar a mi funcion
obtenerMemes()*/


//https://developers.giphy.com/docs/api/endpoint

const obtenerMemes = async () => {

    const memesContainers = document.getElementById('list-memes');
    const memeTemplate = document.getElementById('meme'); 

    const request = await fetch("https://api.imgflip.com/get_memes"); 

    const respuesta = await request.json();

    respuesta.data.memes.slice(0, 8).forEach(meme => {
        const newMemeCard = memeTemplate.cloneNode(true);
        const img = newMemeCard.querySelector('img');
        img.src = meme.url; 
        memesContainers.appendChild(newMemeCard);
    });
    memeTemplate.remove();
};

obtenerMemes();