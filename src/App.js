import React, { createContext, useState } from "react";
// import "./App.css";
// import "./App.scss";

// import React from "react";
// import Header from "./components/pages/Header/Header";
import "./App.scss";
import Routes from "./components/Routes/Routes";

export const RentsContext = createContext();

function App() {
    const [rentsDetails, setRentsDetails] = useState([]);

    return (
        <div className="App">
            <RentsContext.Provider value={[rentsDetails, setRentsDetails]}>
                <Routes />
            </RentsContext.Provider>
        </div>
    );
}

export default App;
