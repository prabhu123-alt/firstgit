const URL = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME";
const api = async () => {
    try {
        let response = await fetch(URL);
        let data = await response.json();
        console.log(data);
        data.forEach(element => {
            let allImages = document.querySelectorAll(".image2");
            let alltitels = document.querySelectorAll(".titel");
            allImages.forEach(img => {
                img.src = element.url; 
            });
            alltitels.forEach(title =>{
                title.innerHTML = element.id;
            });
        });
    } catch (error) {
        console.log("error", error)
    }
}; api();