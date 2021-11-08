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
                    name={this.props.label}
                    className={styles.input}
                    placeholder={this.props.placeHolder}
                    onChange={this.props.handleChange}
                >
                </input>
            </div>
        );
    }
}

export default TextInput;
