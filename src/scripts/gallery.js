const apiKey = import.meta.env.VITE_PEXELS_API_KEY;
const apiUrl = import.meta.env.VITE_PEXELS_API_URL;
const gallery = document.getElementById('gallery');

export default function consoleLogPexels() {

    if (gallery) {
    //1. fetch the url we are going to get our data from
    fetch(`${apiUrl}/search?query=ski&per_page=10`, {
        headers: {
            Authorization: apiKey,
        },
    })
    //2. Use the 'then' method to pick up what we get back from fetch and make it available to us in a parameter in a callback function (response)
    //3. Then convert the JSON to a Javascript object
        .then(response => response.json())
        //4. then we need to hold the data we get back
        .then(data => {
            data.photos.forEach(photo => {
                const img = document.createElement('img');
                
                img.src = photo.src.medium;
                img.alt = photo.photographer;
                gallery.appendChild(img);
            })
        })
    }
}