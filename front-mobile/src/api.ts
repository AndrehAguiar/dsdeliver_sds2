import axios from "axios";

const API_URL = 'https://andre-deliver-sds2.herokuapp.com';

export default function fetchOrders() {
    return axios(`${API_URL}/orders`)
}