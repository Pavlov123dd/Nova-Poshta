import axios from "axios"

const API = 'https://api.novaposhta.ua/v2.0/json/'
const KEY = '95a364f77a918aa13c44580c0be8d932'

export const  getPostDepartment = (Description)=> axios.post(API,{
    "apiKey": KEY,
    "modelName": "Address",
    "calledMethod": "getWarehouses",
    "methodProperties": {
        "CityName" : Description,

    }

}).then(({data}) => data.data)

