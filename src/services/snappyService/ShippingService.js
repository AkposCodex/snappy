import ApiService from "./ApiService";
import { mapGetters } from "vuex";

const ENDPOINTS = {
  LOGIN: "/auth/login",
  SIGN_UP: "/auth/register",
  LOGOUT: "/auth/logout",
  FORGOT_PASSWORD: "/user/forgot-password",
  RESET_PASSWORD: "/user/reset-password",
  GIG_PRICE: "/price",
  GIG_STATION: "/localStations",
  GIG_SHIPMENT: "/captureshipment",
};

class ShippingService extends ApiService {
  gigKey = "";
  senderLocation = { Latitude: "6.4566459", Longitude: "3.419289" };
  constructor() {
    super();
  }
  // address = this.$store.modules();
  phone = mapGetters({ phone: "getPhone" });

  getDispatchPrice = async (e) => {
    console.log("processing...");
    this.api2.attachHeaders({
      Authorization:
        "Bearer " +
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1laWQiOiJmMDJmZjE5Mi0xMWFmLTQ2YjYtYmQwYS1iZjExOGQwYzNkNDciLCJ1bmlxdWVfbmFtZSI6IkVDTzAwMTQ0OSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vYWNjZXNzY29udHJvbHNlcnZpY2UvMjAxMC8wNy9jbGFpbXMvaWRlbnRpdHlwcm92aWRlciI6IkFTUC5ORVQgSWRlbnRpdHkiLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6Ijg1ZjAyMWI0LTQyN2QtNGU4NS1iNTYxLWY4MmQ2YWViOTA4MCIsInJvbGUiOiJUaGlyZFBhcnR5IiwiQWN0aXZpdHkiOlsiQ3JlYXRlLlRoaXJkUGFydHkiLCJEZWxldGUuVGhpcmRQYXJ0eSIsIlVwZGF0ZS5UaGlyZFBhcnR5IiwiVmlldy5UaGlyZFBhcnR5Il0sIlByaXZpbGVnZSI6IlNlcnZpY2VDZW50cmU6NzQiLCJpc3MiOiJodHRwczovL2FnaWxpdHlzeXN0ZW1hcGlkZXZtLmF6dXJld2Vic2l0ZXMubmV0LyIsImF1ZCI6IjQxNGUxOTI3YTM4ODRmNjhhYmM3OWY3MjgzODM3ZmQxIiwiZXhwIjoxNjYzNTg1MTAxLCJuYmYiOjE2NjE4NTcxMDF9.DykIY8lP3PERHmHqR8CsTc4smlldfJh2Ywfdw6_x65o",
    });
    return await this.apiClient2.post(ENDPOINTS.GIG_PRICE, e);
  };
  getStations = async () => {
    console.log("processing...");
    this.api2.attachHeaders({
      Authorization:
        "Bearer " +
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1laWQiOiJmMDJmZjE5Mi0xMWFmLTQ2YjYtYmQwYS1iZjExOGQwYzNkNDciLCJ1bmlxdWVfbmFtZSI6IkVDTzAwMTQ0OSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vYWNjZXNzY29udHJvbHNlcnZpY2UvMjAxMC8wNy9jbGFpbXMvaWRlbnRpdHlwcm92aWRlciI6IkFTUC5ORVQgSWRlbnRpdHkiLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6Ijg1ZjAyMWI0LTQyN2QtNGU4NS1iNTYxLWY4MmQ2YWViOTA4MCIsInJvbGUiOiJUaGlyZFBhcnR5IiwiQWN0aXZpdHkiOlsiQ3JlYXRlLlRoaXJkUGFydHkiLCJEZWxldGUuVGhpcmRQYXJ0eSIsIlVwZGF0ZS5UaGlyZFBhcnR5IiwiVmlldy5UaGlyZFBhcnR5Il0sIlByaXZpbGVnZSI6IlNlcnZpY2VDZW50cmU6NzQiLCJpc3MiOiJodHRwczovL2FnaWxpdHlzeXN0ZW1hcGlkZXZtLmF6dXJld2Vic2l0ZXMubmV0LyIsImF1ZCI6IjQxNGUxOTI3YTM4ODRmNjhhYmM3OWY3MjgzODM3ZmQxIiwiZXhwIjoxNjYzNTg1MTAxLCJuYmYiOjE2NjE4NTcxMDF9.DykIY8lP3PERHmHqR8CsTc4smlldfJh2Ywfdw6_x65o",
    });
    return await this.apiClient2.get(ENDPOINTS.GIG_STATION);
  };

  login = async () => {
    return await this.apiClient2.post(ENDPOINTS.LOGIN, {
      username: "ECO001449",
      password: "1234567",
      SessionObj: "",
    });
  };
}

const shippingService = new ShippingService();
export default shippingService;
