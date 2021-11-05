import React from "react";
import styles from "./Heading.module.css";

const Heading = (props) => {
    return (
        <div className={styles.heading}>
            {props.textContent}
        </div>
    );
}

export default Heading;
