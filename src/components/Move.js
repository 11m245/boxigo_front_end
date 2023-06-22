import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import WarningIcon from "@mui/icons-material/Warning";
import { useState } from "react";
import { AdditionalMoveDetails } from "./AdditionalMoveDetails";
function Move({ move }) {
  const {
    moving_from,
    moving_to,
    estimate_id,
    property_size,
    total_items,
    distance,
    moving_on,
    move_date_flexible,
    custom_status,
  } = move;
  const iconColor = "#ea4a38";
  const [viewMoveDetails, setViewMoveDetails] = useState(false);
  return (
    <>
      <div className="move-container mt-5 mx-2">
        <div className="from-to-row">
          <div className="from">
            <h6>From</h6>
            <span>{moving_from}</span>
          </div>

          <ArrowForwardIcon
            sx={{
              color: iconColor,
              padding: "3px",
              borderRadius: "50%",
              boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
            }}
          />
          <div className="to column">
            <h6>To</h6>
            <span>{moving_to}</span>
          </div>
          <div className="request column">
            <h6>Request#</h6>
            <span style={{ color: iconColor, fontWeight: "bold" }}>
              {estimate_id}
            </span>
          </div>
        </div>
        <div className="details-row">
          <div className="icons-title-component">
            <IconTitleComponent
              icon={
                <HomeIcon
                  sx={{
                    color: iconColor,
                  }}
                />
              }
              title={property_size}
            />
            <IconTitleComponent
              icon={
                <CategoryIcon
                  sx={{
                    color: iconColor,
                  }}
                />
              }
              title={total_items}
            />
            <IconTitleComponent
              icon={
                <LocationOnIcon
                  sx={{
                    color: iconColor,
                  }}
                />
              }
              title={distance}
            />
            <IconTitleComponent
              icon={
                <EventAvailableIcon
                  sx={{
                    color: iconColor,
                  }}
                />
              }
              title={moving_on}
              isEdit={true}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={move_date_flexible === "0" ? true : false}
                  sx={{
                    color: iconColor,
                  }}
                />
              }
              label="is flexible"
            />
            <div className="buttons-container d-flex gap-2">
              <Button
                onClick={() => setViewMoveDetails(!viewMoveDetails)}
                sx={{
                  color: iconColor,
                  borderColor: iconColor,
                }}
                variant="outlined"
              >
                View move details
              </Button>
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor: iconColor,
                  borderColor: iconColor,
                }}
              >
                {custom_status}
              </Button>
            </div>
          </div>
          <div className="disclaimer d-flex align-items-center">
            <WarningIcon
              sx={{
                color: iconColor,
              }}
            />
            <b>Disclaimer</b>
            <span>
              &nbsp; Please update your move date before two days of shifting
            </span>
          </div>
        </div>
        {viewMoveDetails ? <AdditionalMoveDetails move={move} /> : null}
      </div>
    </>
  );
}

function IconTitleComponent({ icon, title, isEdit }) {
  return (
    <>
      <div className="icon-title-wrapper">
        {icon}
        <span>{title}</span>
        {isEdit ? (
          <ModeEditIcon sx={{ padding: "3px", color: "grey" }} />
        ) : null}
      </div>
    </>
  );
}
export { Move };
