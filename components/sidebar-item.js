import Image from "next/image";

import classes from "./sidebar-item.module.css";

export default function SidebarItem(props) {
  let sidebarItemCSS = classes.sidebarItem;
  if (props.selected === "true") {
    sidebarItemCSS = classes.sidebarItemSelected;
  }

  return (
    <div className={sidebarItemCSS}>
      <div className={classes.content}>
        <div className={classes.image}>
          <Image
            src={props.ImageSrc}
            alt={props.ImageAlt}
            width={50}
            height={50}
          />
        </div>
        <div className={classes.text}>{props.text}</div>
      </div>
    </div>
  );
}
