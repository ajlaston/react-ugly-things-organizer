import React, { useEffect } from "react";
import { UglyContext } from "../UglyContext";
import "./Nav.css";

import { Link } from "react-router-dom";

function Nav() {

    const app = React.useContext(UglyContext);

    const handleClick = (e) => {

        const clickState = {
            "/": {
                execute() {
                    app.select.set("/");
                }
            },

            "/saved": {
                execute() {
                    app.select.set("/saved");
                }
            }
        }

        clickState[e.target.pathname].execute();
    }

    useEffect(() => {
        app.select.set(window.location.pathname);
    }, [])

    return (

        <aside>
            <div className="nav-container">
                <h1>Ugly Things</h1>
                <div>
                    <Link
                        onClick={handleClick}
                        className={`side-link ${app.select.get === "/" ? "selected" : ""}`}
                        to="/"
                    >Form</Link>
                </div>

                <div>
                    <Link
                        onClick={handleClick}
                        className={`side-link ${app.select.get === "/saved" ? "selected" : ""}`}
                        to="/saved"
                    >Saved</Link>
                </div>
            </div>
        </aside>
    )
}

export default Nav;