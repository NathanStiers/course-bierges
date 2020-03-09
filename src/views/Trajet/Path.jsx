import React, {useEffect} from 'react';
import { Source, Layer } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function Path({
    colorRGB,
    data,
    id
}) {

    const dataComplete = {
        type: 'Feature',
        geometry: {
            type: 'LineString',
            coordinates: data
        }
    };

    useEffect(() => { 
        console.log(dataComplete)
      });

    return (
        <>
            <Source id={id} type="geojson" data={dataComplete} />
            <Layer
                id={id}
                type="line"
                source={id}
                layout={{
                    'line-join': 'round',
                    'line-cap': 'round'
                }}
                paint={{
                    'line-color': colorRGB,
                    'line-width': 3
                }}
            />
        </>
    );
}
export default Path;