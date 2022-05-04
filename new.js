class RandomUser{
    constructor(){}

    static fetchFromAPI(){
        let URL = 'https://randomuser.me/api/';
        fetch(URL)
        .then(response => response.json())
        .then(data => RandomUser.renderUserData(data))
        .catch(error => alert(error));
    }
    
    static renderUserData(data){
        // console.log(data);
        let user = data.results[0];
        let cardElem = document.querySelector('.card');
        cardElem.innerHTML = `
        <div class = "card-head">
            <a href = "mailto:${user.email}"><i class = "fas fa-envelope"></i> Email</a>
            <div class = "user-image">
                <img src = "${user.picture.large}" alt = "">
            </div>
        </div>

        
document.getElementById('generate-btn').addEventListener('click', () => {
    RandomUser.fetchFromAPI();
});
