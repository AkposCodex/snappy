import ApiService from "./ApiService";
import { mapGetters } from "vuex";

const customer = mapGetters({
  userState: "getCustomerCode",
});

const ENDPOINTS = {
  VERIFY: "/customer/CUS_345mjzkbiwzo85n/identification",
  BANKS: "/bank",
  CREATE: "/customer",
};
const token = "sk_live_591391c4d06290466a0a20c61b01243325d72d37";

const params = JSON.stringify({
  country: "NG",
  type: "bank_account",
  account_number: "0123456789",
  bvn: "20012345677",
  bank_code: "007",
  first_name: "Asta",
  last_name: "Lavista",
});

class PaystackService extends ApiService {
  setAuthorizationHeader = () => {
    if (token) {
      this.paystack.attachHeaders({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });
    }
  };

  createUser = async (e) => {
    this.setAuthorizationHeader();
    return await this.paystackClient.post(ENDPOINTS.CREATE, e);
  };

  verifyUser = async (e) => {
    this.setAuthorizationHeader();
    console.log(ENDPOINTS.VERIFY);
    return await this.paystackClient.post(ENDPOINTS.VERIFY, e);
  };

  getBanks = async () => {
    this.setAuthorizationHeader();
    const resp = this.paystackClient.get(ENDPOINTS.BANKS, {
      country: "nigeria",
    });
    console.log(resp);
    return await resp;
  };
}

const paystackService = new PaystackService();
export default paystackService;
