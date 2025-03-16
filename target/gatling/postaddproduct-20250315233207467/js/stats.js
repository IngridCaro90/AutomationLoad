var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "59",
        "ok": "53",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "644",
        "ok": "644",
        "ko": "665"
    },
    "maxResponseTime": {
        "total": "10676",
        "ok": "10676",
        "ko": "880"
    },
    "meanResponseTime": {
        "total": "877",
        "ok": "895",
        "ko": "714"
    },
    "standardDeviation": {
        "total": "1292",
        "ok": "1362",
        "ko": "75"
    },
    "percentiles1": {
        "total": "664",
        "ok": "663",
        "ko": "685"
    },
    "percentiles2": {
        "total": "677",
        "ok": "673",
        "ko": "692"
    },
    "percentiles3": {
        "total": "1072",
        "ok": "1080",
        "ko": "833"
    },
    "percentiles4": {
        "total": "5125",
        "ok": "5700",
        "ko": "871"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 46,
    "percentage": 77.96610169491525
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 6,
    "percentage": 10.16949152542373
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 1.694915254237288
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6,
    "percentage": 10.16949152542373
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.46",
        "ok": "2.21",
        "ko": "0.25"
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
        "total": "665",
        "ok": "-",
        "ko": "665"
    },
    "maxResponseTime": {
        "total": "880",
        "ok": "-",
        "ko": "880"
    },
    "meanResponseTime": {
        "total": "714",
        "ok": "-",
        "ko": "714"
    },
    "standardDeviation": {
        "total": "75",
        "ok": "-",
        "ko": "75"
    },
    "percentiles1": {
        "total": "685",
        "ok": "-",
        "ko": "685"
    },
    "percentiles2": {
        "total": "692",
        "ok": "-",
        "ko": "692"
    },
    "percentiles3": {
        "total": "833",
        "ok": "-",
        "ko": "833"
    },
    "percentiles4": {
        "total": "871",
        "ok": "-",
        "ko": "871"
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
        "total": "0.25",
        "ok": "-",
        "ko": "0.25"
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
        "total": "10676",
        "ok": "10676",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "895",
        "ok": "895",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1362",
        "ok": "1362",
        "ko": "-"
    },
    "percentiles1": {
        "total": "663",
        "ok": "663",
        "ko": "-"
    },
    "percentiles2": {
        "total": "673",
        "ok": "673",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1080",
        "ok": "1080",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5700",
        "ok": "5700",
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
        "total": "2.21",
        "ok": "2.21",
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
