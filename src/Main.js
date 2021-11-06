import React from "react";
import styles from "./Main.module.css";

import Photograph from "./Photograph";
import TextInput from "./TextInput";

class Main extends React.Component {
    render() {
        return (
            <div className={styles.main}>
                {this.props.children}
                <div className={styles.welcome}>
                    Welcome to Vivlio Library!
                </div>

                <div className={styles.form}>

                    <div className={styles.fillInfo}>
                        <div className={styles.subsection}>
                            Fill your information here
                        </div>
                        <TextInput label="name" placeHolder="John Doe" />
                        <TextInput label="age" placeHolder="30" />
                        <TextInput label="contact" placeHolder="10 digit number"/>
                        <TextInput label="email" placeHolder="johndoe@example.com" />
                    </div>

                    <div className={styles.border}>
                        <h1>Membership card</h1>
                        <div className={styles.info}>
                            <Photograph />

                            <div className={styles.text}>
                                Name: {this.props.name} <br />
                                Age : {this.props.age} <br />
                                Contact: {this.props.contact} <br />
                                Email: {this.props.email}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
