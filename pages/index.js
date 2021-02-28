function Home() {
    return <div>Home</div>
}

const getData = () => {
        
    const req = new XMLHttpRequest();
    req.open('GET', ' app.js');

    req.responseType = 'json';

    req.onload  = () => {
        const data = req.response;
        console.log(data);
    }
    req.send();

}
getData();

export default Home