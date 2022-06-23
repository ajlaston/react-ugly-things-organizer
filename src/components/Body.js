import React from "react";
import Form from "../routes/Form";
import Saved from "../routes/Saved";
import "./Body.css";

import { Route, Routes } from "react-router-dom";

function Body() {

    return (
        <div className="body">
            <Routes>
                <Route path="/" element={<Form />} />
                <Route path="saved" element={<Saved />} />
            </Routes>
        </div>

    )
}

export default Body