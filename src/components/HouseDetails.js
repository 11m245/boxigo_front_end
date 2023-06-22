import { Button } from "@mui/material";

function HouseDetails({ move }) {
  const {
    old_floor_no,
    old_elevator_availability,
    old_parking_distance,
    new_floor_no,
    new_elevator_availability,
    new_parking_distance,
  } = move;
  return (
    <>
      <div className="house-details-container">
        <div className="header-container d-flex justify-content-between align-items-center">
          <h5 className="fw-bold">House Details</h5>
          <Button
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "grey",
            }}
          >
            Edit House Details
          </Button>
        </div>
        <HouseDetail
          type={"existing"}
          data={{
            floorNo: old_floor_no,
            elevator: old_elevator_availability,
            distance: old_parking_distance,
          }}
        />
        <HouseDetail
          type={"new"}
          data={{
            floorNo: new_floor_no,
            elevator: new_elevator_availability,
            distance: new_parking_distance,
          }}
        />
      </div>
    </>
  );
}

function HouseDetail({ type, data }) {
  const { floorNo, elevator, distance } = data;
  return (
    <>
      <h6 className="fw-bold" style={{ color: "#ea4a38" }}>
        {type === "existing" ? "Existing House Details" : "New House Details"}
      </h6>
      <div className="house-detail-wrapper d-flex gap-5">
        <div className="column">
          <h6 className="fw-bold">Floor No.</h6>
          <p className="m-0">{floorNo}</p>
        </div>
        <div className="column">
          <h6 className="fw-bold">Elevator Available</h6>
          <p className="m-0">{elevator}</p>
        </div>
        <div className="column">
          <h6 className="fw-bold">
            Distance from Elevator / Staircase to truck
          </h6>
          <p className="m-0">{distance}</p>
        </div>
      </div>
    </>
  );
}
export { HouseDetails };
