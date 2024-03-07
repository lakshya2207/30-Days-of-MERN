const access_key="8CnCd8bcE3HEnBTQww8y119sx6Gm_zvT6g84KEYX8Bo";

function searchimage(){
    var query=document.getElementById("input").value;
    console.log(query);
    let parent= document.getElementById("images")
    parent.innerHTML="";
    data = fetchimages(query,access_key)
}
async function fetchimages(keyword,access_key) {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=${access_key}`);
    const photos = await response.json();
    console.log(photos);
    let {t,tp,results}=photos;
    results.forEach(element => {
        display_images(element.urls.thumb,element.description)
    });
    return photos;
}

function display_images(photourl,urlcaption) {
    let card=document.createElement("div");
    card.className="card";
    let image=document.createElement("img");
    image.src=photourl
    let caption=document.createElement("p");
    caption.innerText=urlcaption;

    card.appendChild(image);
    card.appendChild(caption);
    let parent= document.getElementById("images")
    parent.appendChild(card);
    console.log(card);


}
// display_images();

