import React, {useContext} from 'react';
import {RelationGraphStoreContext} from "../store/reducers/StockStore";

const RGSlotOnToolbar: React.FC = ({ children }) => {
  const graphInstance = useContext(RelationGraphStoreContext);
  if (!graphInstance) {
    return null;
  }
  return <>{children}</>;
};
export default RGSlotOnToolbar;
