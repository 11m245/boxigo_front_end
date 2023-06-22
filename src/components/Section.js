import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton } from "@mui/material";
import { Category } from "./Category";

function Section({ section }) {
  const [showSection, setShowSection] = useState(false);
  return (
    <>
      <div className="section-container">
        <div className="section-title d-flex justify-content-between">
          <div className=" d-flex gap-2">
            <h5 style={{ color: "#ea4a38" }} className="fw-bold">
              {section.displayName}{" "}
            </h5>
            <div className="count d-flex justify-content-center align-items-center">
              <span className="count-number fw-bold">
                {section.category.length}
              </span>
            </div>
          </div>
          <IconButton
            aria-label="down arrow"
            onClick={() => setShowSection(!showSection)}
          >
            {showSection ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </div>

        {showSection ? (
          <div className="section-body-container p-2">
            {section.category.map((category) => (
              <Category key={category.id} category={category} />
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}

export { Section };
