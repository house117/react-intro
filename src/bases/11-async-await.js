const getImagen = async () => {

    try {
        const apiKey = '7XxjAwR9ttSKiU5jbh6jXpoW0x942XzO';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

        console.log(data);
    } catch (error) {
        //manejo del error
        console.error(error);
    }

}

getImagen();
