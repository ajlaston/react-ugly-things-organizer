import axios from "axios";

export const getAllThings = () => {
    return axios.get("https://api.vschool.io/adamlaston/thing")
} 

export const addThing = (data) => {
    return axios.post("https://api.vschool.io/adamlaston/thing", data);
}

export const deleteThing = (id) => {
    return axios.delete(`https://api.vschool.io/adamlaston/thing/${id}`);
}

export const updateThing = (id, data) => {
    return axios.put(`https://api.vschool.io/adamlaston/thing/${id}`,data);
}