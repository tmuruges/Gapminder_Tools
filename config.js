var CONFIG = {
 "data": {
  "_lastModified": "2018-02-06T06:07:17.747Z",
  "assetsPath": "./preview-data/",
  "ddfPath": "./data/app/ddf--gapminder--systema_globalis",
  "path": "./data/app/ddf--gapminder--systema_globalis",
  "reader": "ddf"
 },
 "locale": {
  "filePath": "assets/translation/",
  "id": "en"
 },
 "state": {
  "entities": {
   "autoconfig": {
    "excludeIDs": [
     "tag"
    ],
    "type": "entity_domain"
   },
   "dim": "geo",
   "show": {
    "un_state": true
   },
   "skipFilter": false
  },
  "entities_colorlegend": {
   "autoconfig": {
    "excludeIDs": [
     "tag"
    ],
    "type": "entity_domain"
   },
   "dim": "world_4region",
   "show": {},
   "skipFilter": false
  },
  "entities_tags": {
   "autoconfig": {
    "includeOnlyIDs": [
     "tag"
    ],
    "type": "entity_domain"
   },
   "dim": "tag",
   "show": {},
   "skipFilter": false
  },
  "marker": {
   "allowSelectMultiple": true,
   "axis_x": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow"
     ]
    },
    "autoconfig": {
     "index": 0,
     "type": "measure"
    },
    "data": "data",
    "domainMax": 180000,
    "domainMin": 300,
    "scaleType": "log",
    "use": "indicator",
    "which": "income_per_person_gdppercapita_ppp_inflation_adjusted",
    "zoomedMax": 150000,
    "zoomedMin": 400
   },
   "axis_y": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow"
     ]
    },
    "autoconfig": {
     "index": 1,
     "type": "measure"
    },
    "data": "data",
    "domainMax": 100,
    "domainMin": 0,
    "scaleType": "linear",
    "use": "indicator",
    "which": "life_expectancy_years",
    "zoomedMax": 86,
    "zoomedMin": 19
   },
   "color": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow",
      "ordinal"
     ]
    },
    "autoconfig": {},
    "data": "data",
    "palette": {
     "_default": [
      "#ffb600",
      "#ffaa14",
      "#ffc500",
      "#fb6d19",
      "#ffb600",
      "#9b4838"
     ],
     "africa": [
      "#00d5e9",
      "#00c8ec",
      "#00e1ec",
      "#0098df",
      "#77dff7",
      "#0586c6"
     ],
     "americas": [
      "#7feb00",
      "#5de200",
      "#81f201",
      "#00b900",
      "#b5ea32",
      "#008d36"
     ],
     "asia": [
      "#ff5872",
      "#ff5178",
      "#ff658a",
      "#da0025",
      "#fa4e73",
      "#b2043a"
     ],
     "europe": [
      "#ffe700",
      "#fbdd00",
      "#fff400",
      "#fbaf09",
      "#ffe700",
      "#b17f4a"
     ]
    },
    "paletteLabels": null,
    "scaleType": "ordinal",
    "syncModels": [
     "marker_colorlegend"
    ],
    "use": "property",
    "which": "world_4region"
   },
   "highlight": [],
   "label": {
    "autoconfig": {
     "includeOnlyIDs": [
      "name"
     ],
     "type": "string"
    },
    "data": "data",
    "scaleType": "ordinal",
    "use": "property",
    "which": "name"
   },
   "opacityHighlightDim": 0.1,
   "opacityRegular": 1,
   "opacitySelectDim": 0.3,
   "select": [],
   "size": {
    "allow": {
     "scales": [
      "linear"
     ]
    },
    "autoconfig": {
     "index": 2,
     "type": "measure"
    },
    "data": "data",
    "domainMax": 1400000000,
    "domainMin": 15,
    "extent": [
     0,
     0.85
    ],
    "scaleType": "linear",
    "use": "indicator",
    "which": "population_total",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "size_label": {
    "_important": false,
    "allow": {
     "names": [
      "_default"
     ],
     "scales": [
      "ordinal",
      "linear",
      "log",
      "genericLog",
      "pow"
     ]
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "extent": [
     0,
     0.33
    ],
    "scaleType": "ordinal",
    "use": "constant",
    "which": "_default",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "skipFilter": false,
   "space": [
    "entities",
    "time"
   ],
   "superHighlight": []
  },
  "marker_colorlegend": {
   "allowSelectMultiple": true,
   "highlight": [],
   "hook_geoshape": {
    "data": "data",
    "scaleType": "ordinal",
    "use": "property",
    "which": "shape_lores_svg"
   },
   "hook_rank": {
    "data": "data",
    "scaleType": "linear",
    "use": "property",
    "which": "rank"
   },
   "label": {
    "data": "data",
    "scaleType": "ordinal",
    "use": "property",
    "which": "name"
   },
   "opacityHighlightDim": 0.3,
   "opacityRegular": 0.8,
   "opacitySelectDim": 0.3,
   "select": [],
   "skipFilter": false,
   "space": [
    "entities_colorlegend"
   ],
   "superHighlight": []
  },
  "marker_tags": {
   "allowSelectMultiple": true,
   "highlight": [],
   "hook_parent": {
    "data": "data",
    "scaleType": "ordinal",
    "use": "property",
    "which": "parent"
   },
   "label": {
    "data": "data",
    "scaleType": "ordinal",
    "use": "property",
    "which": "name"
   },
   "opacityHighlightDim": 0.1,
   "opacityRegular": 1,
   "opacitySelectDim": 0.3,
   "select": [],
   "skipFilter": false,
   "space": [
    "entities_tags"
   ],
   "superHighlight": []
  },
  "time": {
   "autoconfig": {
    "type": "time"
   },
   "delay": 150,
   "delayThresholdX2": 90,
   "delayThresholdX4": 45,
   "dim": "time",
   "end": "2015",
   "endOrigin": "2015",
   "endSelected": "2015",
   "format": {
    "data": null,
    "ui": null
   },
   "immediatePlay": true,
   "loop": false,
   "offset": 0,
   "playable": true,
   "playing": false,
   "record": false,
   "round": "round",
   "start": "1800",
   "startOrigin": "1800",
   "startSelected": "1800",
   "step": 1,
   "unit": "year",
   "value": "2015"
  }
 },
 "ui": {
  "adaptMinMaxZoom": false,
  "buttons": [
   "colors",
   "find",
   "zoom",
   "trails",
   "lock",
   "moreoptions",
   "fullscreen",
   "presentation"
  ],
  "chart": {
   "labels": {
    "dragging": true,
    "removeLabelBox": false
   },
   "lockNonSelected": 0,
   "margin": {
    "left": 79.938,
    "top": 0
   },
   "superhighlightOnMinimapHover": true,
   "trails": true,
   "whenHovering": {
    "higlightValueX": true,
    "higlightValueY": true,
    "showProjectionLineX": true,
    "showProjectionLineY": true
   }
  },
  "cursorMode": "arrow",
  "datawarning": {
   "doubtDomain": [
    1800,
    1950,
    2015
   ],
   "doubtRange": [
    1,
    0.3,
    0.2
   ]
  },
  "dialogs": {
   "moreoptions": [
    "opacity",
    "speed",
    "axes",
    "size",
    "colors",
    "label",
    "zoom",
    "presentation",
    "about"
   ],
   "popup": [
    "colors",
    "find",
    "size",
    "zoom",
    "moreoptions"
   ],
   "sidebar": [
    "colors",
    "find",
    "size",
    "zoom"
   ]
  },
  "panWithArrow": false,
  "presentation": false,
  "show_ticks": true,
  "splash": false,
  "zoomOnScrolling": false
 },
 "chartType": "BubbleChart"
};