import Image from "next/image";

import { Fragment } from "react";
import classes from "./sidebar.module.css";
import SidebarItems from "./sidebar-items";

export default function Sidebar(props) {
  return (
    <Fragment>
      <div className={classes.sidebar}>
        <div className={classes.header}>
          <div className={classes.headerInner}>
            <div className={classes.termMonitorImg}>
              <Image
                src="/res/termMonitor@2x.svg"
                alt="Term Monitor Image"
                width={80}
                height={80}
              />
            </div>
            <div style={{ color: "#3f0e40" }}>TermMonitor</div>
          </div>
        </div>
        <SidebarItems />
      </div>
      {props.children}
    </Fragment>
  );
}
