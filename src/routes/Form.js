import React, { useContext } from "react";
import "./Form.css";
import { UglyContext } from "../UglyContext.js";
import * as UglyApi from "../api/UglyAPI.js";

function Form() {

    const app = useContext(UglyContext);
    const { form } = app;

    const handleForm = (e) => {
        const { name, value } = e.target;

        form.setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const clearForm = () => {
        form.setFormData({
            title: "",
            imgUrl: "",
            description: "",
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (app.getState("idle")) {
            UglyApi.addThing(form.data).then(() => {
                clearForm();
            }).then(() => {
                app.loadData();
            });

        } else if(app.getState("editing")){

            UglyApi.updateThing(form.data.id, {
                title: form.data.title,
                imgUrl: form.data.imgUrl,
                description: form.data.description,
            }).then(()=>{
                clearForm();
            }).then(()=>{
                app.setState("idle")
                app.loadData();
            }) 
        }
    }

    React.useEffect(() => {
        
    }, [])

    return (
        <div className="form-container">
            <h1 className="form-title">Form</h1>
            <form className="form" onSubmit={handleSubmit}>

                <div>
                    <input onChange={handleForm} name="title" value={form.data.title} placeholder="Title" required />
                    <input onChange={handleForm} name="imgUrl" value={form.data.imgUrl} placeholder="imageUrl" required />
                    <input onChange={handleForm} name="description" value={form.data.description} placeholder="description" required />
                </div>

                <div>
                    <button>submit</button>
                </div>

            </form>
        </div>
    )
}

export default Form;