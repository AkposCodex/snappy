import geoService from "./geoCode";
import gigService from "./gigCode";
import paystackService from "./paystackCode";

class ApiService {
  constructor() {
    this.api = geoService;
    this.api2 = gigService;
    this.paystack = paystackService;
    this.apiClient = this.api.client;
    this.apiClient2 = this.api2.client;
    this.paystackClient = this.paystack.client;
  }
}

export default ApiService;
