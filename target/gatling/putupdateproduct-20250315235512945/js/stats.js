var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "51",
        "ok": "51",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "639",
        "ok": "639",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10673",
        "ok": "10673",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "914",
        "ok": "914",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1390",
        "ok": "1390",
        "ko": "-"
    },
    "percentiles1": {
        "total": "662",
        "ok": "662",
        "ko": "-"
    },
    "percentiles2": {
        "total": "674",
        "ok": "674",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1205",
        "ok": "1205",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6106",
        "ok": "6106",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 42,
    "percentage": 82.35294117647058
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 6,
    "percentage": 11.76470588235294
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 3,
    "percentage": 5.88235294117647
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.04",
        "ok": "2.04",
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
        "total": "46",
        "ok": "46",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "639",
        "ok": "639",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10673",
        "ok": "10673",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "932",
        "ok": "932",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1462",
        "ok": "1462",
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
        "total": "1258",
        "ok": "1258",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6563",
        "ok": "6563",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 39,
    "percentage": 84.78260869565217
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 4,
    "percentage": 8.695652173913043
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 3,
    "percentage": 6.521739130434782
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.84",
        "ok": "1.84",
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
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "656",
        "ok": "656",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "873",
        "ok": "873",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "744",
        "ok": "744",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "93",
        "ok": "93",
        "ko": "-"
    },
    "percentiles1": {
        "total": "691",
        "ok": "691",
        "ko": "-"
    },
    "percentiles2": {
        "total": "839",
        "ok": "839",
        "ko": "-"
    },
    "percentiles3": {
        "total": "866",
        "ok": "866",
        "ko": "-"
    },
    "percentiles4": {
        "total": "872",
        "ok": "872",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 3,
    "percentage": 60.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 40.0
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
        "total": "0.2",
        "ok": "0.2",
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
