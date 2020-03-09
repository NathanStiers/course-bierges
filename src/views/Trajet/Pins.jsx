import React, { PureComponent } from 'react';
import { Marker } from '@urbica/react-map-gl';
import img from "../../assets/img/mark.svg"


const SIZE = 20;

// Important for perf: the markers never change, avoid rerender when the map viewport changes
export default class Pins extends PureComponent {
    render() {
        return (
            <Marker key={`marker-1`} longitude={4.579013} latitude={50.715670} >
                <img src={img} height="75px" width="auto"></img>
            </Marker>
        )

    }
}