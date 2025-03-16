var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "53",
        "ok": "53",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "644",
        "ok": "644",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1257",
        "ok": "1257",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "708",
        "ok": "708",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "133",
        "ok": "133",
        "ko": "-"
    },
    "percentiles1": {
        "total": "662",
        "ok": "662",
        "ko": "-"
    },
    "percentiles2": {
        "total": "671",
        "ok": "671",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1089",
        "ok": "1089",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1184",
        "ok": "1184",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 46,
    "percentage": 86.79245283018868
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 6,
    "percentage": 11.320754716981133
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 1.8867924528301887
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.52",
        "ok": "2.52",
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
        "total": "47",
        "ok": "47",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "644",
        "ok": "644",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1257",
        "ok": "1257",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "709",
        "ok": "709",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "139",
        "ok": "139",
        "ko": "-"
    },
    "percentiles1": {
        "total": "661",
        "ok": "661",
        "ko": "-"
    },
    "percentiles2": {
        "total": "670",
        "ok": "670",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1100",
        "ok": "1100",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1193",
        "ok": "1193",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 41,
    "percentage": 87.2340425531915
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 5,
    "percentage": 10.638297872340425
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 2.127659574468085
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.24",
        "ok": "2.24",
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
        "total": "655",
        "ok": "655",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "860",
        "ok": "860",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "700",
        "ok": "700",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "72",
        "ok": "72",
        "ko": "-"
    },
    "percentiles1": {
        "total": "673",
        "ok": "673",
        "ko": "-"
    },
    "percentiles2": {
        "total": "681",
        "ok": "681",
        "ko": "-"
    },
    "percentiles3": {
        "total": "816",
        "ok": "816",
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
