export const basicUrl = 'https://etapharm.azurewebsites.net/api';

export async function Get() {
    try {
        return await fetch(`${basicUrl}/Medicines`)
            .then(res => res.json())
    }
    catch(error){
        console.log(error);
    }
}

export async function GetById(id) {
    try {

        return await fetch(`${basicUrl}/Medicines/${id}`)
            .then(res => res.json())
    }
    catch(error){
        console.log(error);
    }
}

export async function Post(data) {

    const option = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    } 

    try {
        return await fetch(`${basicUrl}/Medicines`,option)
            .then(res => res.json())
            .then(data => console.log('Success:', data));
    }
    catch(error){
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
        return await fetch(`${basicUrl}/Medicines/${id}`,option)
            .then(res => res.json())
            .then(data => console.log('Success:', data));
    }
    catch(error){
        console.error('Error:', error);
    }
}

export async function Delete() {
    try {
        const option = {
            method: 'PUT',
        } 

        return await fetch(`${basicUrl}/Medicines`,option)
            .then(res => res.json())
    }
    catch(error){
        console.error('Error:', error);
    }
}
