<template>
  <div class="">
    <form action="">
      <label for="">Address</label>
      <input type="text" name="" id="" v-model="addr" />
    </form>

    <button @click="pointLoader()">Here</button><br />
    <button @click="loginLoader()">GIG login</button><br />
    <button @click="stationLoader()">GIG stations</button><br />
    <button @click="orderLoader()">GIG stations</button>
    <div class="" v-for="resp in response.Object">
      <div class="">{{ resp.StationId }}</div>
    </div>
    <select
      name="bankOptions"
      id=""
      autocomplete="billing"
      v-model="bankOptions"
      v-if="banks[0]"
      @change="onChange"
    >
      <option value="null"></option>
      <option
        :value="option.id"
        v-for="option in banks[0].data"
        :key="option.id"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
  <div class=""><button @click="bankLoader()">Load Banks</button><br /></div>
  <div class=""><button @click="createUser()">Create User</button><br /></div>
  <div class=""><button @click="verifyUser()">Verify User</button><br /></div>
</template>
<script>
import { mapGetters } from "vuex";
import shippingService from "../services/snappyService/ShippingService";
export default {
  components: {},
  data() {
    return {
      field: this.response,
      addr: "",
      apiKey: "AIzaSyBVaxlAuXmjnyKunDaTn_Sl9s8GWsixWzQ",
      sportsData: ["Badminton", "Cricket", "Football", "Golf", "Tennis"],
      bankOptions: "",
      NG: "NG",
    };
  },
  methods: {
    onChange(event) {
      console.log(this.bankOptions);
    },
    pointLoader() {
      console.log("accessed");
      this.$store.dispatch("loadPoints", {
        address: this.addr,
      });
      console.log("address" + this.addr);
    },
    // loginLoader() {
    //   this.$store.dispatch("loadShipmentPrice", data);
    // },
    stationLoader() {
      this.$store.dispatch("loadStations");
    },
    orderLoader() {
      this.$store.dispatch("loadShipmentPrice", {
        ReceiverAddress: this.mainAddress,
        CustomerCode: "ECO001449",
        SenderLocality: "Eti Osa",
        SenderAddress:
          "26B Ibeju Lekki Street, Dolphin Estate, Ikoyi Obalende, Lagos, Nigeria",
        VehicleType: "BIKE",
        ReceiverPhoneNumber: this.user.bio.phoneNumber,
        SenderPhoneNumber: "07043151949",
        SenderName: "SNAPPY PAY",
        UserId: "f02ff192-11af-46b6-bd0a-bf118d0c3d47",
        ReceiverStationId: "4",
        SenderStationId: "4",
        ReceiverLocation: this.user.geoLocation,
        SenderLocation: shippingService.senderLocation,
        PreShipmentItems: [
          {
            Quantity: "1",
            Weight: "1",
            ItemType: "Normal",
            WeightRange: "0",
            ItemName: "Shoe Lace",
            Value: "1000",
            ShipmentType: "Regular",
          },
        ],
      });
    },
    bankLoader() {
      this.$store.dispatch("loadBanks");
      console.log("banks lmao: ", this.banks);
    },
    async createUser() {
      const resp = await this.$store.dispatch("createUser", {
        email: "johndoe@gmail.com",
        first_name: this.user.bio.firstName,
        last_name: this.user.bio.lastName,
        phone: this.user.bio.phoneNumber,
      });
      this.$store.dispatch(
        "userModule/setCustomerCode",
        resp.data.data.customer_code
      );
      console.log(this.user.bio.customerCode);
      console.log(resp.data.data);
    },
    verifyUser() {
      console.log("Starting");
      this.$store.dispatch("verifyUser", {
        country: this.NG,
        type: "bank_account",
        account_number: this.user.account.accountNumber,
        bvn: this.user.bio.bvn,
        bank_code: this.user.account.bank,
        first_name: this.user.bio.firstName,
        last_name: this.user.bio.lastName,
      });
    },
  },
  computed: {
    ...mapGetters({
      user: "getUserState",
      mainAddress: "getAddress",
      banks: "getBanks",
    }),
    response() {
      return this.$store.dispatch("loadStations");
    },
  },
};
</script>
<style></style>
