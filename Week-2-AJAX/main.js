'use strict';

const form = document.querySelector('#search-form');
const input = document.querySelector('[name = search-field]');

const doFetch = async () => {
    const response = await fetch('http://api.tvmaze.com/search/shows?q='+input.value);
    const data = await response.json();
    console.log(data);
    console.log(data[0].show.id);

    data.forEach((obj) => {
        const body = document.querySelector('body');
        const name = document.createElement('p');
        const link = document.createElement('a');
        const image = document.createElement('img');
        const summary = document.createElement('p');
        var genres = document.createElement('p');

        name.innerHTML = obj.show.name;
        body.appendChild(name);

        if(obj.show.officialSite == null){
            link.innerHTML = "No official website"
        }
        else{
        link.href = obj.show.officialSite;
        link.innerHTML = obj.show.officialSite;
        }
        body.appendChild(link);

        if(obj.show.image == null){
            image.alt = "Image not found";
        }
        else{
        image.src = obj.show.image.medium;
        }
        body.appendChild(image);

        summary.innerHTML = obj.show.summary;
        body.insertAdjacentHTML("beforeend", obj.show.summary);
        
        genres.innerHTML = obj.show.genres;
        genres.innerHTML = genres.innerHTML.replaceAll(',', ', ');
        body.appendChild(genres);    

        });
}


form.addEventListener('submit', (evt) =>{
    evt.preventDefault();
    console.log(input.value);
    doFetch();
});



/*for (i=0; i < data.length; i++){

}
*/
