
import httpService from './HttpService';
// import httpService from './snappyService/geoCode';

class ApiService {
  constructor() {
    this.api = httpService;
    this.apiClient = this.api.client;
  }
}

export default ApiService;