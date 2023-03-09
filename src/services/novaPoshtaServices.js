import axios from "axios"

const API = 'https://api.novaposhta.ua/v2.0/json/'
const key = '95a364f77a918aa13c44580c0be8d932'




export const tracking = (ttn) => axios.post(API, {
    "apiKey":
    key,
    "modelName":
        "TrackingDocument",
    "calledMethod":
        "getStatusDocuments",
    "methodProperties":
        {
            "Documents":
                [
                    {
                        "DocumentNumber": ttn
                    }
                ]
        }
}).then(({data}) => data.data)

