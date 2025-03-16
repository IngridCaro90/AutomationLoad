var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "56",
        "ok": "56",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "685",
        "ok": "685",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10762",
        "ok": "10762",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "949",
        "ok": "949",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1325",
        "ok": "1325",
        "ko": "-"
    },
    "percentiles1": {
        "total": "749",
        "ok": "749",
        "ko": "-"
    },
    "percentiles2": {
        "total": "813",
        "ok": "813",
        "ko": "-"
    },
    "percentiles3": {
        "total": "911",
        "ok": "911",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5383",
        "ok": "5383",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 40,
    "percentage": 71.42857142857143
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 15,
    "percentage": 26.785714285714285
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 1.7857142857142856
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.43",
        "ok": "2.43",
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
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "685",
        "ok": "685",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10762",
        "ok": "10762",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "972",
        "ok": "972",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1400",
        "ok": "1400",
        "ko": "-"
    },
    "percentiles1": {
        "total": "753",
        "ok": "753",
        "ko": "-"
    },
    "percentiles2": {
        "total": "827",
        "ok": "827",
        "ko": "-"
    },
    "percentiles3": {
        "total": "887",
        "ok": "887",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5970",
        "ok": "5970",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 35,
    "percentage": 70.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 14,
    "percentage": 28.000000000000004
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 2.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.17",
        "ok": "2.17",
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
        "total": "6",
        "ok": "6",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "692",
        "ok": "692",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "911",
        "ok": "911",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "757",
        "ok": "757",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "percentiles1": {
        "total": "745",
        "ok": "745",
        "ko": "-"
    },
    "percentiles2": {
        "total": "749",
        "ok": "749",
        "ko": "-"
    },
    "percentiles3": {
        "total": "871",
        "ok": "871",
        "ko": "-"
    },
    "percentiles4": {
        "total": "903",
        "ok": "903",
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
        "total": "0.26",
        "ok": "0.26",
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
