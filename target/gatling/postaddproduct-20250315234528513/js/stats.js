var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "61",
        "ok": "61",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "637",
        "ok": "637",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1418",
        "ok": "1418",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "730",
        "ok": "730",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "163",
        "ok": "163",
        "ko": "-"
    },
    "percentiles1": {
        "total": "661",
        "ok": "661",
        "ko": "-"
    },
    "percentiles2": {
        "total": "672",
        "ok": "672",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1072",
        "ok": "1072",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1232",
        "ok": "1232",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 49,
    "percentage": 80.32786885245902
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 11,
    "percentage": 18.0327868852459
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 1.639344262295082
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.9",
        "ok": "2.9",
        "ko": "-"
    }
},
contents: {
"req_add-products----874777541": {
        type: "REQUEST",
        name: "Add Products ${name} - Modelo Cerrado",
path: "Add Products ${name} - Modelo Cerrado",
pathFormatted: "req_add-products----874777541",
stats: {
    "name": "Add Products ${name} - Modelo Cerrado",
    "numberOfRequests": {
        "total": "6",
        "ok": "6",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "650",
        "ok": "650",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "860",
        "ok": "860",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "696",
        "ok": "696",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "74",
        "ok": "74",
        "ko": "-"
    },
    "percentiles1": {
        "total": "668",
        "ok": "668",
        "ko": "-"
    },
    "percentiles2": {
        "total": "672",
        "ok": "672",
        "ko": "-"
    },
    "percentiles3": {
        "total": "813",
        "ok": "813",
        "ko": "-"
    },
    "percentiles4": {
        "total": "851",
        "ok": "851",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 5,
    "percentage": 83.33333333333334
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 16.666666666666664
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.29",
        "ok": "0.29",
        "ko": "-"
    }
}
    },"req_add-products-----994799413": {
        type: "REQUEST",
        name: "Add Products ${name} - Modelo Abierto",
path: "Add Products ${name} - Modelo Abierto",
pathFormatted: "req_add-products-----994799413",
stats: {
    "name": "Add Products ${name} - Modelo Abierto",
    "numberOfRequests": {
        "total": "55",
        "ok": "55",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "637",
        "ok": "637",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1418",
        "ok": "1418",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "734",
        "ok": "734",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "170",
        "ok": "170",
        "ko": "-"
    },
    "percentiles1": {
        "total": "660",
        "ok": "660",
        "ko": "-"
    },
    "percentiles2": {
        "total": "672",
        "ok": "672",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1076",
        "ok": "1076",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1251",
        "ok": "1251",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 44,
    "percentage": 80.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 10,
    "percentage": 18.181818181818183
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 1.8181818181818181
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.62",
        "ok": "2.62",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
