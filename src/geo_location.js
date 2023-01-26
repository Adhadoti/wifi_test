import React, { useEffect, useState } from "react";

export default function getLocation() {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);

    return(<div className="App">
    <button onClick={getLocation}>Get Location</button>
        <h1> Coordinates </h1>
        <p>{status}</p>
        {lat && <p>Latitude: {lat}</p>}
        {lng && <p>Longitude: {lng}</p>}
    </div>);
}