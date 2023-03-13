import axios from "axios"

const API = 'https://api.novaposhta.ua/v2.0/json/'
const key = '95a364f77a918aa13c44580c0be8d932'

export const getAllCity = (searchCity) => axios.post(API, {
    "apiKey": key,
    "modelName": "Address",
    "calledMethod": "getSettlements",
    "methodProperties": {
        "Page": "1",
        "Warehouse": "1",
        "FindByString" : searchCity
    }
}).then(({data}) => data.data)
