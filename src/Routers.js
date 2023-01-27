import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Homepage from "./pages/Homepage/homepage";

function Routers() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Homepage/>} />
            </Routes>
        </Router>
    );
}

export default Routers;