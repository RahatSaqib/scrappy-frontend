

import React, { useMemo, useEffect, useRef, useState } from "react";
import { callGeocoderApi } from "../utils/common";
import mapboxgl, { Map } from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY || '';


export const GoogleMapComp = (props: any) => {
    let { address } = props
    const mapContainer = useRef<any>(null);
    const map = useRef<Map | any>(null);
    const [lng, setLng] = useState()
    const [lat, setLat] = useState()
    const [zoom, setZoom] = useState(10)

    useEffect(() => {

        (async () => {
            let res = await callGeocoderApi(address)
            console.log({ res })
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: process.env.REACT_APP_MAP_STYLE,
                center: res.center,
                zoom: zoom
            });
            map.current.on('move', () => {
                setLng(map.current.getCenter().lng.toFixed(4));
                setLat(map.current.getCenter().lat.toFixed(4));
                setZoom(map.current.getZoom().toFixed(2));
            });
            map.current.addControl(new mapboxgl.NavigationControl(), 'top-left');
            new mapboxgl.Marker()
                .setLngLat(res.center)
                .addTo(map.current);
        })()
    }, [address])
    return (
        <div>
            <div ref={mapContainer} className='map_container'></div>
        </div>
    )
}