import { createStore } from "easy-peasy";

import rootModel from "./models/root-model";

const storeModel = {
  root: rootModel,
};

const store = createStore(storeModel);

export default store;
