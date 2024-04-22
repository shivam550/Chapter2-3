// Nested Header 

import React from "react";
import ReactDOM from "react-dom"

// const headiing  = React.createElement('div',{id : 'main-div'},
// React.createElement('h1',{id:'heading1'},'nested-heading'));







const Heading = () => {
    return (
        <div className="header-container">
            <h5 className="logo">NamsteReact</h5>
            <input type="text" placeholder="search here" />
            <button>User Login</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(<Heading />);