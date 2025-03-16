var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "60",
        "ok": "60",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "641",
        "ok": "641",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10667",
        "ok": "10667",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "850",
        "ok": "850",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1279",
        "ok": "1279",
        "ko": "-"
    },
    "percentiles1": {
        "total": "664",
        "ok": "664",
        "ko": "-"
    },
    "percentiles2": {
        "total": "672",
        "ok": "672",
        "ko": "-"
    },
    "percentiles3": {
        "total": "850",
        "ok": "850",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4881",
        "ok": "4881",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 52,
    "percentage": 86.66666666666667
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 7,
    "percentage": 11.666666666666666
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 1.6666666666666667
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.5",
        "ok": "2.5",
        "ko": "-"
    }
},
contents: {
"req_update-products--971138253": {
        type: "REQUEST",
        name: "Update Products ${name} - Modelo Abierto",
path: "Update Products ${name} - Modelo Abierto",
pathFormatted: "req_update-products--971138253",
stats: {
    "name": "Update Products ${name} - Modelo Abierto",
    "numberOfRequests": {
        "total": "54",
        "ok": "54",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "641",
        "ok": "641",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10667",
        "ok": "10667",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "867",
        "ok": "867",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1347",
        "ok": "1347",
        "ko": "-"
    },
    "percentiles1": {
        "total": "663",
        "ok": "663",
        "ko": "-"
    },
    "percentiles2": {
        "total": "672",
        "ok": "672",
        "ko": "-"
    },
    "percentiles3": {
        "total": "846",
        "ok": "846",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5469",
        "ok": "5469",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 47,
    "percentage": 87.03703703703704
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 6,
    "percentage": 11.11111111111111
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 1.8518518518518516
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.25",
        "ok": "2.25",
        "ko": "-"
    }
}
    },"req_update-products-898438701": {
        type: "REQUEST",
        name: "Update Products ${name} - Modelo Cerrado",
path: "Update Products ${name} - Modelo Cerrado",
pathFormatted: "req_update-products-898438701",
stats: {
    "name": "Update Products ${name} - Modelo Cerrado",
    "numberOfRequests": {
        "total": "6",
        "ok": "6",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "642",
        "ok": "642",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "860",
        "ok": "860",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "695",
        "ok": "695",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "75",
        "ok": "75",
        "ko": "-"
    },
    "percentiles1": {
        "total": "666",
        "ok": "666",
        "ko": "-"
    },
    "percentiles2": {
        "total": "670",
        "ok": "670",
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
        "total": "0.25",
        "ok": "0.25",
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
