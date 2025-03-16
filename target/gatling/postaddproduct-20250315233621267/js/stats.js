var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "50",
        "ok": "44",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "643",
        "ok": "643",
        "ko": "654"
    },
    "maxResponseTime": {
        "total": "1064",
        "ok": "1064",
        "ko": "876"
    },
    "meanResponseTime": {
        "total": "680",
        "ok": "677",
        "ko": "703"
    },
    "standardDeviation": {
        "total": "70",
        "ok": "68",
        "ko": "78"
    },
    "percentiles1": {
        "total": "664",
        "ok": "664",
        "ko": "675"
    },
    "percentiles2": {
        "total": "670",
        "ok": "670",
        "ko": "681"
    },
    "percentiles3": {
        "total": "790",
        "ok": "684",
        "ko": "827"
    },
    "percentiles4": {
        "total": "972",
        "ok": "984",
        "ko": "866"
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
    "count": 2,
    "percentage": 4.0
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
    "percentage": 12.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.5",
        "ok": "2.2",
        "ko": "0.3"
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
        "ok": "0",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "654",
        "ok": "-",
        "ko": "654"
    },
    "maxResponseTime": {
        "total": "876",
        "ok": "-",
        "ko": "876"
    },
    "meanResponseTime": {
        "total": "703",
        "ok": "-",
        "ko": "703"
    },
    "standardDeviation": {
        "total": "78",
        "ok": "-",
        "ko": "78"
    },
    "percentiles1": {
        "total": "675",
        "ok": "-",
        "ko": "675"
    },
    "percentiles2": {
        "total": "681",
        "ok": "-",
        "ko": "681"
    },
    "percentiles3": {
        "total": "827",
        "ok": "-",
        "ko": "827"
    },
    "percentiles4": {
        "total": "866",
        "ok": "-",
        "ko": "866"
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
        "total": "0.3",
        "ok": "-",
        "ko": "0.3"
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
        "total": "44",
        "ok": "44",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "643",
        "ok": "643",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1064",
        "ok": "1064",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "677",
        "ok": "677",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "68",
        "ok": "68",
        "ko": "-"
    },
    "percentiles1": {
        "total": "664",
        "ok": "664",
        "ko": "-"
    },
    "percentiles2": {
        "total": "670",
        "ok": "670",
        "ko": "-"
    },
    "percentiles3": {
        "total": "684",
        "ok": "684",
        "ko": "-"
    },
    "percentiles4": {
        "total": "984",
        "ok": "984",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 42,
    "percentage": 95.45454545454545
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 4.545454545454546
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
        "total": "2.2",
        "ok": "2.2",
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
