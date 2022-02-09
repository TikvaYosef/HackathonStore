export async function Get() {
    try {

        return await fetch("https://etapharm.azurewebsites.net/api/Optics")
            .then(res => res.json())
            .catch(() => console.log("error"))
    }
    catch
    {
       console.log("error catch") 
    }
}

export async function GetById() {
    try {

        return await fetch("")
            .then(res => res.json())
            .catch(() => {})
    }
    catch{
    
    }
}

export async function Post() {
    try {

        return await fetch()
            .then(res => res.json())
            .catch(() => {})
    }
    catch{
        
    }
}

export async function Put() {
    try {

        return await fetch()
            .then(res => res.json())
            .catch(() => {})
    }
    catch{
        
    }
}

export async function Delete() {
    try {

        return await fetch()
            .then(res => res.json())
            .catch(() => {})
    }
    catch{
        
    }
}
