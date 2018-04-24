export const getCurrentResorts = (state) =>
  state.resorts.list.map((id) => state.resorts.byId[id] || {});
export const getSpecificResort = (state, id) =>
  state.resorts.byId[id] || { weather: {}, piste: [] };
