import React from "react";
import { Button } from "primereact/button";
import { FaCloudRain } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { IconContext } from "react-icons";

export const LluviaTemplate = (props) => {
  return (
    <div>
      {props.rowData.llueve === "s" ? (
        <Button
          disabled
          tooltip="LLoverá"
          style={{ color: "white", background: "white", borderColor: "blue" }}
          icon={
            <IconContext.Provider
              value={{ color: "blue", className: "text-lg" }}
            >
              <FaCloudRain />
            </IconContext.Provider>
          }
        />
      ) : (
        <Button
          disabled
          tooltip="No lloverá"
          style={{
            color: "white",
            background: "white",
            borderColor: "#ffc551",
          }}
          icon={
            <IconContext.Provider
              value={{ color: "#ffc551", className: "text-lg" }}
            >
              <BsFillSunFill />
            </IconContext.Provider>
          }
        />
      )}
    </div>
  );
};
