const basicUrl = 'https://etapharm.azurewebsites.net/api';

export async function Get() {
    try {
        return await fetch(`${basicUrl}/Medicines`)
            .then(res => res.json())
    }
    catch(err){
        console.log(err);
    }
}

export async function GetById(id) {
    try {

        return await fetch(`${basicUrl}/${id}`)
            .then(res => res.json())
    }
    catch(err){
        console.log(err);
    }
}

export async function Post(data) {

    const option = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    } 

    try {
        return await fetch(`${basicUrl},${option}`)
            .then(res => res.json())
            .then(data => console.log('Success:', data));
    }
    catch(err){
        console.error('Error:', error);
    }
}

export async function Put(id,data) {

    const option = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    } 

    try {
        return await fetch(`${basicUrl}/${id}`,option)
            .then(res => res.json())
            .then(data => console.log('Success:', data));
    }
    catch(err){
        console.error('Error:', error);
    }
}

export async function Delete() {
    try {
        const option = {
            method: 'PUT',
        } 

        return await fetch(basicUrl,option)
            .then(res => res.json())
    }
    catch(err){
        console.error('Error:', error);
    }
}
