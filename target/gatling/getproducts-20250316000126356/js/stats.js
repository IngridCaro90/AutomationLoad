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
        "total": "645",
        "ok": "645",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2027",
        "ok": "2027",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "741",
        "ok": "741",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "222",
        "ok": "222",
        "ko": "-"
    },
    "percentiles1": {
        "total": "666",
        "ok": "666",
        "ko": "-"
    },
    "percentiles2": {
        "total": "687",
        "ok": "687",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1098",
        "ok": "1098",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1671",
        "ok": "1671",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 47,
    "percentage": 83.92857142857143
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 6,
    "percentage": 10.714285714285714
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 3,
    "percentage": 5.357142857142857
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.8",
        "ok": "2.8",
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
        "total": "645",
        "ok": "645",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2027",
        "ok": "2027",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "746",
        "ok": "746",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "233",
        "ok": "233",
        "ko": "-"
    },
    "percentiles1": {
        "total": "666",
        "ok": "666",
        "ko": "-"
    },
    "percentiles2": {
        "total": "690",
        "ok": "690",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1155",
        "ok": "1155",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1710",
        "ok": "1710",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 42,
    "percentage": 84.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 5,
    "percentage": 10.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 3,
    "percentage": 6.0
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
        "total": "654",
        "ok": "654",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "869",
        "ok": "869",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "703",
        "ok": "703",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "75",
        "ok": "75",
        "ko": "-"
    },
    "percentiles1": {
        "total": "673",
        "ok": "673",
        "ko": "-"
    },
    "percentiles2": {
        "total": "682",
        "ok": "682",
        "ko": "-"
    },
    "percentiles3": {
        "total": "823",
        "ok": "823",
        "ko": "-"
    },
    "percentiles4": {
        "total": "860",
        "ok": "860",
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
        "total": "0.3",
        "ok": "0.3",
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
