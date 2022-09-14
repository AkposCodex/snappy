import ApiService from "./ApiService";

const ENDPOINTS = {
  LOGIN: "/login",
  SIGN_UP: "/auth/register",
  LOGOUT: "/auth/logout",
  FORGOT_PASSWORD: "/user/forgot-password",
  RESET_PASSWORD: "/user/reset-password",
  GEOCODE_JSON: "/json",
};

const geoKey = "AIzaSyBVaxlAuXmjnyKunDaTn_Sl9s8GWsixWzQ";
const gigKey = "";
const senderLocation = { Latitude: "6.4566459", Longitude: "3.419289" };

class AuthService extends ApiService {
  constructor() {
    super();
    this.init();
  }

  init = async () => {
    const token = this.login();
    // const user = this.getUser();
  };

  setAuthorizationHeader = () => {
    const token = this.getToken();
    if (token) {
      this.api.attachHeaders({
        Authorization: `Bearer ${token}`,
      });
    }
  };


  loadPoints = async (e) => {
    return await this.apiClient.get(
      ENDPOINTS.GEOCODE_JSON + "?" + "address=" + e.address + "&key=" + geoKey
    );
  };
  
  login = async () => {
    return await this.apiClient2.post(ENDPOINTS.LOGIN, {
      username: "ECO001449",
      password: "1234567",
      SessionObj: "",
    });
  };
}

const authService = new AuthService();

export default authService;
