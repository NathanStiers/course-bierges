import React, { useState } from 'react';
import MapGL, { Source, Layer } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Path from './Path'
import TRAJET from "./trajet.json"
import Pins from "./Pins"

function Map({}) {
    const [viewport, setViewport] = useState({
        latitude: 50.715670,
        longitude: 4.579013,
        zoom: 14
    });

    var dataCities = Array();

    return (
        <MapGL
            style={{ width: '100%', height: '500px' }}
            mapStyle="mapbox://styles/mapbox/light-v9"
            accessToken="pk.eyJ1IjoibmF0aGFuYWNjZW50dXJlIiwiYSI6ImNrN2RoZmxvaDA5dGczbG55NDM5N3dhN28ifQ.mHEPYdUr7DFv69toEjZxOQ"
            onViewportChange={(v) => setViewport(v)}
            {...viewport}
        >
            {TRAJET.map( d => {
                return <Path colorRGB={d.colorRGB} data={d.data} id={d.id}/>
            })}
            <Pins/>
        </MapGL>
    );
}

export default Map;