import Dropdown from "react-dropdown";
import Image from "next/image";

import SidebarItem from "./sidebar-item";
import classes from "./sidebar-items.module.css";

export default function SidebarItems() {
  const options = ["Billings"];

  return (
    <div style={{ color: "rgba(0, 0, 0, 0.54)" }}>
      <SidebarItem
        selected="true"
        ImageSrc="/res/addKeywords.svg"
        ImageAlt="Add keyword image"
        text="Add Keywords"
      />
      <SidebarItem
        selected="false"
        ImageSrc="/res/matches.svg"
        ImageAlt="Matches image"
        text="Matches"
      />
      <SidebarItem
        selected="false"
        ImageSrc="/res/vector.svg"
        ImageAlt="vector image"
        text="Manage Sources"
      />
      <SidebarItem
        selected="false"
        ImageSrc="/res/vector.svg"
        ImageAlt="vector image"
        text="Integration"
      />
      <SidebarItem
        selected="false"
        ImageSrc="/res/vector.svg"
        ImageAlt="vector image"
        text="Alert"
      />
      <div
        style={{
          display: "flex",
          marginLeft: "20px",
          padding: "20px 0px",
          color: "rgba(0, 0, 0, 0.74);",
        }}
      >
        <div style={{ width: "20px" }}>
          <Image
            src="/res/settings.svg"
            alt="settings Image"
            width={50}
            height={50}
          />
        </div>
        <div className={classes.settings}>
          <Dropdown
            menuClassName={classes.menuClass}
            options={options}
            placeholder="Settings"
          />
        </div>
      </div>
    </div>
  );
}
