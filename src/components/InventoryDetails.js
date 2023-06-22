import { Button } from "@mui/material";
import { Section } from "./Section";

function InventoryDetails({ move }) {
  const { items } = move;
  return (
    <>
      <div className="inventory-details-container">
        <div className="header-container d-flex justify-content-between align-items-center">
          <h5>Inventory Details</h5>
          <Button
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "grey",
            }}
          >
            Edit Inventory
          </Button>
        </div>

        <div className="inventory-sections-wrapper">
          {items.inventory.map((section) => (
            <Section key={section.id} section={section} />
          ))}
        </div>
      </div>
    </>
  );
}

export { InventoryDetails };
