import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Stats.css";

export default function Stats() {
    const { code } = useParams();
    const [link, setLink] = useState(null);
    const navigate = useNavigate();
    const API = "https://tinylink-backend-l4xr.onrender.com"

    const loadDetails = async () => {
        const resposne = await axios.get(`${API}/code/${code}`);
        if (resposne.data.data) {
            setLink(resposne.data.data[0]);
        } else {
            alert(resposne.data.message);
        }
    };

    const deleteUrl = async () => {
        const resposne = await axios.get(`${API}/remove_url/${code}`);
        if (resposne.data.message === 'URL data removed successfully') {
            navigate("/");
        } else {
            alert(resposne.data.message);
        }
    };

    const directurl = () => {
        window.location.href = `${API}/redirect/${code}`;
    };

    useEffect(() => {
        loadDetails();
    }, []);

    if (!link) return <p className="loading-text">Loading...</p>;

    return (
        <div className="stats-container">
            <h2 className="stats-title">URL Stats</h2>

            <div className="stats-box">
                <p><strong>Title:</strong> {link.title}</p>
                <p><strong>Original URL:</strong> {link.original_url}</p>
                <p><strong>Short URL:</strong> {link.short_url}</p>
                <p><strong>Total Clicks:</strong> {link.total_clicks}</p>
                <p><strong>Total Clicks:</strong> {link.last_clicked}</p>
            </div>

            <div className="stats-buttons">
                <button className="btn-blue" onClick={directurl}>
                    Redirect
                </button>

                <button className="btn-red" onClick={deleteUrl}>
                    Delete
                </button>
            </div>
        </div>
    );
}
