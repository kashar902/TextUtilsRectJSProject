import React, { useState } from 'react'
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


function App(props) {

    const [mode, setMode] = useState('light'); // initially dark mode is not on

    const [alert, setAlert] = useState(null);

    // ye kM EXTRA
    // const [mystyle, setmyStyle] = useState('light');


    // LIMIT

    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#000';
            showAlert("Dark mode has been Enabled", "success");
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been Enabled", "success");
        }
    }

    return (
        <>
            <Router>
                {/* NAVBAR */}
                <Navbar tittle="Text Utils" about="About US" mode={mode} toggleMode={toggleMode} />

                {/* Alert */}
                <Alert alert={alert} />

                {/* Switch */}
                <Switch>
                    {/* ABOUT US */}
                    <Route path="/about">
                        <div className="container my-3" >
                            <About mode={mode} />
                        </div>
                    </Route>

                    {/* Text Form */}
                    <Route path="/">
                        <div className="container my-3" >
                            <TextForm heading="Enter Text Below!" mode={mode} showAlert={showAlert} />
                        </div>
                    </Route>
                </Switch>

                {/* ABOUT US */}
                {/* <div className="container my-3"><About/></div> */}

                {/* Text Form */}
                {/* <div className="container my-3" ><TextForm heading="Enter Text Below!" mode={mode} showAlert={showAlert} /></div> */}

                {/* Footer */}
                <Footer />


            </Router>
        </>
    );
}

export default App;
