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

        
document.getElementById('generate-btn').addEventListener('click', () => {
    RandomUser.fetchFromAPI();
});
