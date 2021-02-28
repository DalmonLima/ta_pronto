function Home() {
    return <div>Home</div>
}

const getData = () => {
        
    const req = new XMLHttpRequest();
    req.open('GET', ' https://old-cat-9.loca.lt');

    req.responseType = 'json';

    req.onload  = () => {
        const data = req.response;
        console.log(data);
    }
    req.send();

}
getData();

export default Home