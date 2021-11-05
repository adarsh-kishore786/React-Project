import React from "react";
import styles from "./Photograph.module.css";

class Photograph extends React.Component {
    render() {
        return(
            <div className={styles.image}>
                No Photograph
            </div>
        );
    }
}

export default Photograph;
