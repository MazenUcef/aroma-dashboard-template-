import React from "react";
import CreateNewDiscountModal from "../components/CreateNewDiscountModal";
const Inventory = () => {
  return (
    <div>
      <CreateNewDiscountModal
        isOpen={true}
        onClose={() => {}}
        onSubmit={() => {}}
      />
    </div>
  );
};

export default Inventory;
