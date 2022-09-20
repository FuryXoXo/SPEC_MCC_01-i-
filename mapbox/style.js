
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenStreetMap_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "SPEC_MCC_01_1": {
            "type": "geojson",
            "data": json_SPEC_MCC_01_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OpenStreetMap_0_0",
            "type": "raster",
            "source": "OpenStreetMap_0"
        },
        {
            "id": "lyr_SPEC_MCC_01_1_0",
            "type": "circle",
            "source": "SPEC_MCC_01_1",
            "layout": {},
            "paint": {'circle-radius': ['/', 32.73810714285714, 2], 'circle-color': '#33a02c', 'circle-opacity': 1.0, 'circle-stroke-width': 0.7142857142857143, 'circle-stroke-color': '#b2df8a'}
        }
],
}