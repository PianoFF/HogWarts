
const URL = 'http://localhost:3000/'; 

const hogURL = URL + 'hogs'; // or => `${URL}hogs`

const getAllHogs = () => {
    return (
        fetch(hogURL)
        .then(resp =>resp.json())
    )
}

export default { getAllHogs }