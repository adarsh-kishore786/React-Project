import React from "react";
import styles from "./Main.module.css";

class Main extends React.Component {
    render() {
        return (
            <div className={styles.main}>
                This is the main body!
            </div>
        );
    }
}

export default Main;
