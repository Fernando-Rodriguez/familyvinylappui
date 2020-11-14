async function GetToken(){
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({"clientname":"Frod080","clientsecret":"testpass"});

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    await fetch("https://familyvinylapp.azurewebsites.net/api/token", requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        //.then(data => localStorage.setItem("token", data.access_token))
        .catch(error => console.log('error', error));
}

export default GetToken;