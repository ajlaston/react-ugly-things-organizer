import React from "react";
import * as UglyApi from "../api/UglyAPI.js"
import "./Card.css";
import { UglyContext } from "../UglyContext";
import { useNavigate } from "react-router-dom";

function Card(props) {

    const editRef = React.useRef();
    const navigate = useNavigate();

    const app = React.useContext(UglyContext);



    const handleDelete = (e) => {
        e.preventDefault();
        if (app.getState("idle")) {
            UglyApi.deleteThing(props.id).then(() => {
                app.loadData()
            });
        } else {
            alert("cannot delete while editing");
        }

    }

    const handleEdit = (e) => {
        e.preventDefault();
        app.setState("editing");
        app.form.setFormData({
            title: props.title,
            imgUrl: props.img,
            description: props.description,
            id: props.id
        });

        navigate("/");
        app.select.set("/");
    }

    React.useEffect(()=>{

    })

    return (
        <div className="card" id={props.id}>
            <h2 className="card-title">{props.title}</h2>
            <h4>{props.description}</h4>
            <div className="img-container">
                <img className="card-image" src={props.img} alt="" />
            </div>
            <div className="btn-container">
                <div>
                    <button ref={editRef} className="btn" onClick={handleEdit} >edit</button>
                    <br />
                    <button className="btn" onClick={handleDelete} >delete</button>
                </div>
            </div>
        </div>
    )
}

export default Card;