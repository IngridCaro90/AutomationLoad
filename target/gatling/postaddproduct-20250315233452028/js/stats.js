var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "49",
        "ok": "43",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "642",
        "ok": "642",
        "ko": "651"
    },
    "maxResponseTime": {
        "total": "888",
        "ok": "888",
        "ko": "888"
    },
    "meanResponseTime": {
        "total": "673",
        "ok": "668",
        "ko": "708"
    },
    "standardDeviation": {
        "total": "46",
        "ok": "36",
        "ko": "81"
    },
    "percentiles1": {
        "total": "664",
        "ok": "662",
        "ko": "676"
    },
    "percentiles2": {
        "total": "672",
        "ok": "671",
        "ko": "684"
    },
    "percentiles3": {
        "total": "688",
        "ok": "683",
        "ko": "838"
    },
    "percentiles4": {
        "total": "888",
        "ok": "805",
        "ko": "878"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 42,
    "percentage": 85.71428571428571
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 2.0408163265306123
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
    "count": 6,
    "percentage": 12.244897959183673
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.33",
        "ok": "2.05",
        "ko": "0.29"
    }
},
contents: {
"req_add-products----853387296": {
        type: "REQUEST",
        name: "Add Products - Modelo Cerrado",
path: "Add Products - Modelo Cerrado",
pathFormatted: "req_add-products----853387296",
stats: {
    "name": "Add Products - Modelo Cerrado",
    "numberOfRequests": {
        "total": "6",
        "ok": "0",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "651",
        "ok": "-",
        "ko": "651"
    },
    "maxResponseTime": {
        "total": "888",
        "ok": "-",
        "ko": "888"
    },
    "meanResponseTime": {
        "total": "708",
        "ok": "-",
        "ko": "708"
    },
    "standardDeviation": {
        "total": "81",
        "ok": "-",
        "ko": "81"
    },
    "percentiles1": {
        "total": "676",
        "ok": "-",
        "ko": "676"
    },
    "percentiles2": {
        "total": "684",
        "ok": "-",
        "ko": "684"
    },
    "percentiles3": {
        "total": "838",
        "ok": "-",
        "ko": "838"
    },
    "percentiles4": {
        "total": "878",
        "ok": "-",
        "ko": "878"
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
    "count": 6,
    "percentage": 100.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.29",
        "ok": "-",
        "ko": "0.29"
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
        "total": "43",
        "ok": "43",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "642",
        "ok": "642",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "888",
        "ok": "888",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "668",
        "ok": "668",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "36",
        "ok": "36",
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
        "total": "683",
        "ok": "683",
        "ko": "-"
    },
    "percentiles4": {
        "total": "805",
        "ok": "805",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 42,
    "percentage": 97.67441860465115
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 2.3255813953488373
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
        "total": "2.05",
        "ok": "2.05",
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
