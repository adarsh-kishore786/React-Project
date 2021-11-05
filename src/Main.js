import React from "react";
import styles from "./Main.module.css";

import Photograph from "./Photograph";

class Main extends React.Component {
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.welcome}>
                    Welcome to Vivlio Library!
                </div>

                <div className={styles.form}>

                    <div className={styles.fillInfo}>
                        Name: {this.props.name}
                    </div>

                    <div className={styles.info}>
                        <Photograph />

                        <div className={styles.text}>
                            Name: {this.props.name} <br />
                            Age : {this.props.age}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
