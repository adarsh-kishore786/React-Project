import React from "react";
import Heading from "./Heading";
import Main from "./Main";
import Footer from "./Footer";

class App extends React.Component {
    render() {
        return (
            <div>
                <Heading textContent="A Sample Form Application Website"/>
                <Main />
                <Footer textContent="For WOC 2021"/>
            </div>
        );
    }
}

export default App;
