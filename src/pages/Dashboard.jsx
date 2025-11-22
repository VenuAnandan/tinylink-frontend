import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

export default function Dashboard() {
    const [links, setLinks] = useState([]);
    const API = "https://tinylink-backend-l4xr.onrender.com"

    const loadLinks = async () => {
        const resposne = await axios.get(`${API}/links`);
        setLinks(resposne.data.data);
    };

    const directurl = async (code) => {
        window.location.href = `${API}/redirect/${code}`;
    };

    useEffect(() => {
        loadLinks();
    }, []);

    return (
        <div className="dash-container">
            <h2 className="dash-title">All Short URLs</h2>

            <div className="link-grid">
                {links?.map(link => (
                    <div key={link.code} className="link-card">

                        <div className="link-info">
                            <h3 className="link-title">{link.title}</h3>
                            <p className="link-original">{link.original_url}</p>
                            <p><strong>Total Clicks:</strong> {link.total_clicks}</p>
                        </div>

                        <div className="btn-group">
                            <Link to={`/stats/${link.code}`} className="btn btn-green">
                                Stats
                            </Link>

                            <button
                                type="button"
                                onClick={() => directurl(link.code)}
                                className="btn btn-blue"
                            >
                                Redirect
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
