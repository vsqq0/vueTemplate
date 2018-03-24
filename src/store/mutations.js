export default {
  action(state, { latitude, longitude }) {
    state.latitude = latitude;
    state.longitude = longitude;
  }
};
