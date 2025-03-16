var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "57",
        "ok": "0",
        "ko": "57"
    },
    "minResponseTime": {
        "total": "702",
        "ok": "-",
        "ko": "702"
    },
    "maxResponseTime": {
        "total": "1109",
        "ok": "-",
        "ko": "1109"
    },
    "meanResponseTime": {
        "total": "785",
        "ok": "-",
        "ko": "785"
    },
    "standardDeviation": {
        "total": "75",
        "ok": "-",
        "ko": "75"
    },
    "percentiles1": {
        "total": "766",
        "ok": "-",
        "ko": "766"
    },
    "percentiles2": {
        "total": "798",
        "ok": "-",
        "ko": "798"
    },
    "percentiles3": {
        "total": "925",
        "ok": "-",
        "ko": "925"
    },
    "percentiles4": {
        "total": "1108",
        "ok": "-",
        "ko": "1108"
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
    "count": 0,
    "percentage": 0.0
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
    "count": 57,
    "percentage": 100.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.71",
        "ok": "-",
        "ko": "2.71"
    }
},
contents: {
"req_add-products-----1016189658": {
        type: "REQUEST",
        name: "Add Products - Modelo Abierto",
path: "Add Products - Modelo Abierto",
pathFormatted: "req_add-products-----1016189658",
stats: {
    "name": "Add Products - Modelo Abierto",
    "numberOfRequests": {
        "total": "52",
        "ok": "0",
        "ko": "52"
    },
    "minResponseTime": {
        "total": "702",
        "ok": "-",
        "ko": "702"
    },
    "maxResponseTime": {
        "total": "1109",
        "ok": "-",
        "ko": "1109"
    },
    "meanResponseTime": {
        "total": "780",
        "ok": "-",
        "ko": "780"
    },
    "standardDeviation": {
        "total": "63",
        "ok": "-",
        "ko": "63"
    },
    "percentiles1": {
        "total": "766",
        "ok": "-",
        "ko": "766"
    },
    "percentiles2": {
        "total": "792",
        "ok": "-",
        "ko": "792"
    },
    "percentiles3": {
        "total": "872",
        "ok": "-",
        "ko": "872"
    },
    "percentiles4": {
        "total": "1022",
        "ok": "-",
        "ko": "1022"
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
    "count": 0,
    "percentage": 0.0
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
    "count": 52,
    "percentage": 100.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.48",
        "ok": "-",
        "ko": "2.48"
    }
}
    },"req_add-products----853387296": {
        type: "REQUEST",
        name: "Add Products - Modelo Cerrado",
path: "Add Products - Modelo Cerrado",
pathFormatted: "req_add-products----853387296",
stats: {
    "name": "Add Products - Modelo Cerrado",
    "numberOfRequests": {
        "total": "5",
        "ok": "0",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "710",
        "ok": "-",
        "ko": "710"
    },
    "maxResponseTime": {
        "total": "1108",
        "ok": "-",
        "ko": "1108"
    },
    "meanResponseTime": {
        "total": "846",
        "ok": "-",
        "ko": "846"
    },
    "standardDeviation": {
        "total": "138",
        "ok": "-",
        "ko": "138"
    },
    "percentiles1": {
        "total": "803",
        "ok": "-",
        "ko": "803"
    },
    "percentiles2": {
        "total": "841",
        "ok": "-",
        "ko": "841"
    },
    "percentiles3": {
        "total": "1055",
        "ok": "-",
        "ko": "1055"
    },
    "percentiles4": {
        "total": "1097",
        "ok": "-",
        "ko": "1097"
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
    "count": 0,
    "percentage": 0.0
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
    "count": 5,
    "percentage": 100.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.24",
        "ok": "-",
        "ko": "0.24"
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
