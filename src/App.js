import React from "react";
import Heading from "./Heading";
import Main from "./Main";
import Footer from "./Footer";

class App extends React.Component {
    render() {
        return (
            <div>
                <Main
                    name="John Doe"
                    age="30"
                    contact="ABCDEFGHIJ"
                    email="johndoe@example.com"
                >
                    <Heading textContent="A Sample Form Application Website"/>
                    <Footer textContent="For WOC 2021"/>
                </Main>
            </div>
        );
    }
}

export default App;
