import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddNew.css";

export default function AddNew() {
    const [title, setTitle] = useState("");
    const [originalUrl, setOriginalUrl] = useState("");
    const [code, setCode] = useState("");
    const navigate = useNavigate();

    const API = "https://tinylink-backend-l4xr.onrender.com"

    const handleSubmit = async e => {
        e.preventDefault();

        const resposne = await axios.post(`${API}/addUrl`, {
            title: title,
            original_url: originalUrl,
            code: code,
        });

        if (resposne.data.data) {
            navigate("/");
        } else {
            alert(resposne.data.message);
        }
    };

    return (
        <div className="add-container">
            <h2 className="add-title">Add New Link</h2>

            <form onSubmit={handleSubmit} className="add-form">
                <input
                    className="add-input"
                    placeholder="Enter title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />

                <input
                    className="add-input"
                    placeholder="Enter original URL"
                    value={originalUrl}
                    onChange={e => setOriginalUrl(e.target.value)}
                    required
                />

                <input
                    className="add-input"
                    placeholder="Enter custom code (optional)"
                    value={code}
                    maxLength="8"
                    minLength="6"
                    pattern="[A-Za-z0-9]{6,8}"
                    onChange={e => setCode(e.target.value)}
                />

                <button className="add-btn" type="submit">
                    Add Link
                </button>
            </form>
        </div>
    );
}
