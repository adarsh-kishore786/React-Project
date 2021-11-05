import React from "react";
import styles from "./TextInput.module.css";

class TextInput extends React.Component {
    render() {
        return(
            <div className={styles.form}>
                <label className={styles.text}>
                    Enter {this.props.label} here:
                </label>
                <input
                    className={styles.input}
                    placeHolder={this.props.placeHolder}
                >
                </input>
            </div>
        );
    }
}

export default TextInput;
