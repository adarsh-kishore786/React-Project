import React from "react";
import Heading from "./Heading";
import Main from "./Main";
import Footer from "./Footer";

function checkAge(age) {
    let regex = /^[0-9]+$/;
    return regex.test(age);
}

function checkContact(contact) {
    let regex = /^[0-9]{10}$/;
    return regex.test(contact);
}

function checkEmail(email) {
    let regex = /[a-zA-Z0-9]+[.]*[a-zA-Z0-9]*@[a-zA-Z]+\.[a-zA-Z]+[.]*[a-zA-Z]*/;
    return regex.test(email);
}

class App extends React.Component {
    state = {
        name: "John Doe",
        age: "30",
        contact: "1234567890",
        email: "john.doe@example.com",
        header: "A Sample Form Application Website",
        footer: "For WOC 2021",
        msg: ""
    };

    handleChange(e) {
        const val = e.target.name;
        if (val === "name")
            this.setState({name: e.target.value});
        else if (val === "age")
            this.setState({age: e.target.value});
        else if (val === "contact")
            this.setState({contact: e.target.value});
        else
            this.setState({email: e.target.value});
    }


    handleSubmit(e) {
        let str = "";
        if (this.state.name === "")
            str = "Name must be non-empty.";
        else if (!checkAge(this.state.age))
            str = "Age must be in correct format.";
        else if (!checkContact(this.state.contact))
            str = "Contact number must be in correct format.";
        else if (!checkEmail(this.state.email))
            str = "Email must be in correct format.";
        else
            str = `Submitted! New card issued in the name of ${this.state.name}!`
        this.setState({ msg:  str});
    }

    render() {
        return (
            <div>
                <Main
                    name={this.state.name}
                    age={this.state.age}
                    contact={this.state.contact}
                    email={this.state.email}
                    handleChange={(e) => this.handleChange(e)}
                    handleSubmit={(e) => this.handleSubmit(e)}
                    msg={this.state.msg}
                >
                    <Heading textContent={this.state.header}/>
                    <Footer textContent={this.state.footer}/>
                </Main>
            </div>
        );
    }
}

export default App;
