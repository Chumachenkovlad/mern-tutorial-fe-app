import Axios from 'axios';

export { BASE_URL } from "../shared/constants";

export default class TodosApi {
  constructor() {
    this.baseUrl = `http://localhost:4000/todos`;
  }

  getList() {
    return Axios.get(this.baseUrl);
  }

  get(id) {
    return Axios.get(`${this.baseUrl}/${id}`);
  }

  edit(id, body) {
    return Axios.patch(`${this.baseUrl}/${id}`, body);
  }

  delete(id) {
    return Axios.delete(`${this.baseUrl}/${id}`);
  }

  create(body) {
    return Axios.post(`${this.baseUrl}`, body);
  }
}
