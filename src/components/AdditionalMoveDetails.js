import { HouseDetails } from "./HouseDetails";
import { InventoryDetails } from "./InventoryDetails";

function AdditionalMoveDetails({ move }) {
  console.log("move", move);
  return (
    <>
      <div className="additional-move-details-container">
        <h6>Additional Information</h6>
        <HouseDetails move={move} />
        <InventoryDetails move={move} />
      </div>
    </>
  );
}

export { AdditionalMoveDetails };
