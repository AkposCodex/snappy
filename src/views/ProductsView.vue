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
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import shippingService from "../services/snappyService/ShippingService";
// const address = this.mainAddress;
// const orderDetails = {
//   ReceiverAddress: address,
//   CustomerCode: "ECO001449",
//   SenderLocality: "Ifako Ijaye",
//   SenderAddress: "740 Aminu Kano Cres, Wuse 2 904101, Abuja, Nigeria",
//   ReceiverPhoneNumber: "08039322440",
//   VehicleType: "BIKE",
//   SenderPhoneNumber: "+2347063965528",
//   SenderName: "TEST ECOMMERCE IT",
//   UserId: "f02ff192-11af-46b6-bd0a-bf118d0c3d47",
//   ReceiverStationId: "4",
//   SenderStationId: "7",
//   ReceiverLocation: {
//     Latitude: "9.08166964816883",
//     Longitude: "7.450022072826153",
//   },
//   SenderLocation: {
//     Latitude: "6.639438",
//     Longitude: "3.330983",
//   },
//   PreShipmentItems: [
//     {
//       Quantity: "1",
//       Weight: "1",
//       ItemType: "Normal",
//       WeightRange: "0",
//       ItemName: "Shoe Lace",
//       Value: "1000",
//       ShipmentType: "Regular",
//     },
//   ],
// };
export default {
  data() {
    return {
      field: this.response,
      addr: "",
      apiKey: "AIzaSyBVaxlAuXmjnyKunDaTn_Sl9s8GWsixWzQ",
      // mainAddress: this.address,
    };
  },
  methods: {
    pointLoader() {
      console.log("accessed");
      this.$store.dispatch("loadPoints", {
        address: this.addr,
      });
      console.log("address" + this.addr);
    },
    loginLoader() {
      this.$store.dispatch("loadShipmentPrice", data);
    },
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
  },
  computed: {
    ...mapGetters({
      user: "getUserState",
      mainAddress: "getAddress",
    }),
    response() {
      return this.$store.dispatch("loadStations");
    },
  },
};
</script>
<style></style>
