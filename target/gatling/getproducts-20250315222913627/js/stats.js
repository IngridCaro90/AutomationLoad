var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "43",
        "ok": "43",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "852",
        "ok": "852",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1643",
        "ok": "1643",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1051",
        "ok": "1051",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "177",
        "ok": "177",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1032",
        "ok": "1032",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1077",
        "ok": "1077",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1556",
        "ok": "1556",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1639",
        "ok": "1639",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 40,
    "percentage": 93.02325581395348
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 3,
    "percentage": 6.976744186046512
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.26",
        "ok": "2.26",
        "ko": "-"
    }
},
contents: {
"req_get-products--m--290114537": {
        type: "REQUEST",
        name: "Get Products- Modelo Abierto",
path: "Get Products- Modelo Abierto",
pathFormatted: "req_get-products--m--290114537",
stats: {
    "name": "Get Products- Modelo Abierto",
    "numberOfRequests": {
        "total": "40",
        "ok": "40",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "852",
        "ok": "852",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1643",
        "ok": "1643",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1037",
        "ok": "1037",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "158",
        "ok": "158",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1029",
        "ok": "1029",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1065",
        "ok": "1065",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1213",
        "ok": "1213",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1639",
        "ok": "1639",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 38,
    "percentage": 95.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 2,
    "percentage": 5.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.11",
        "ok": "2.11",
        "ko": "-"
    }
}
    },"req_get-products-----1331751275": {
        type: "REQUEST",
        name: "Get Products - Modelo Cerrado",
path: "Get Products - Modelo Cerrado",
pathFormatted: "req_get-products-----1331751275",
stats: {
    "name": "Get Products - Modelo Cerrado",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "916",
        "ok": "916",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1597",
        "ok": "1597",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1234",
        "ok": "1234",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "280",
        "ok": "280",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1190",
        "ok": "1190",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1394",
        "ok": "1394",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1556",
        "ok": "1556",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1589",
        "ok": "1589",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 66.66666666666666
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 33.33333333333333
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.16",
        "ok": "0.16",
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
