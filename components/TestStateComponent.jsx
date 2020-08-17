import React from "react";

import { useStoreState } from "easy-peasy";

export const TestStateComponent = () => {
  const state = useStoreState((state) => state);
  console.log(state);
  return <div>Test</div>;
};
