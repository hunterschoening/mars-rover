import axios from "axios";
import { KEY, BASE_URL } from "../constants/api";

const API = axios.create({ baseURL: BASE_URL });

export const fetchRovers = () => API.get(`/?api_key=${KEY}`);
export const fetchRoverPhotos = (name, page, date) => API.get(`/${name}/photos?earth_date=${date}&api_key=${KEY}&page=${page}`); 