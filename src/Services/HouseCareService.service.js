import { basicUrl } from "./MedicinesService.service"

export async function Get() {
    try {

        return await fetch(`${basicUrl}/HouseCare`)
            .then(res => res.json())

    }
    catch {
        console.log("error")
    }
}

export async function GetById(id) {
    try {

        return await fetch(`${basicUrl}/HouseCare/${id}`)
            .then(res => res.json())
            .then((data) => console.log(data))
    }
    catch {
    }
}

export async function Post() {
    try {

        return await fetch()
            .then(res => res.json())
            .catch(() => { })
    }
    catch {

    }
}

export async function Put() {
    try {

        return await fetch()
            .then(res => res.json())
            .catch(() => { })
    }
    catch {

    }
}

export async function Delete() {
    try {

        return await fetch()
            .then(res => res.json())
            .catch(() => { })
    }
    catch {

    }
}
