import httpService from './geoCode';
import http2Service from './gigCode';

class ApiService {
  constructor() {
    this.api = httpService;
    this.api2 = http2Service;
    this.apiClient = this.api.client;
    this.apiClient2 = this.api2.client;
  }
}

export default ApiService;