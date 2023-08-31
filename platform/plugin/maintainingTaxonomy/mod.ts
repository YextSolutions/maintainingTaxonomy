export async function specialtiesToCategories(data){

    const changedFields = data.changedFields.fieldNames[0]
    const entityId = data.entityId

    if (changedFields === "taxonomy_relatedSpecialty") {
        var categoryId = findCorrespondingCategory(data.primaryProfile.taxonomy_relatedSpecialty[0])
        var myData = {
            "categoryIds" :[categoryId]
        }
        const entityUrlEndpoint = "https://api.yext.com/v2/accounts/me/entities/" + entityId + "?v=20230206&api_key=${{apiKey}}"
        const request = new Request(entityUrlEndpoint, {
            method: 'PUT',
            headers: {
            "content-type": "application/json",
            },
            body: JSON.stringify(myData)
            });
        const myResponse = await fetch(request).then(response => response.json())
    }
    return null;
}



export async function categoriesToSpecialties(data){

    const changedFields = data.changedFields.fieldNames[0]
    const entityId = data.entityId

    if (changedFields === "categoryIds") {
        var specialtyId = findCorrespondingSpecialty(parseInt(data.primaryProfile.categoryIds[0]))
        var myData = {
            "taxonomy_relatedSpecialty" :[specialtyId]
        }
        const entityUrlEndpoint = "https://api.yext.com/v2/accounts/me/entities/" + entityId + "?v=20230206&api_key=${{apiKey}}"
        const request = new Request(entityUrlEndpoint, {
            method: 'PUT',
            headers: {
            "content-type": "application/json",
            },
            body: JSON.stringify(myData)
            });
        const myResponse = await fetch(request).then(response => response.json())
    }
    return null;
}

export async function bidirectionalCategorySpecialtyParity(data){

    const changedFields = data.changedFields.fieldNames[0]
    const entityId = data.entityId

    if (changedFields === "categoryIds") {
        var specialtyId = findCorrespondingSpecialty(parseInt(data.primaryProfile.categoryIds[0]))
        var myData = {
            "taxonomy_relatedSpecialty" :[specialtyId]
        }
        const entityUrlEndpoint = "https://api.yext.com/v2/accounts/me/entities/" + entityId + "?v=20230206&api_key=${{apiKey}}"
        const request = new Request(entityUrlEndpoint, {
            method: 'PUT',
            headers: {
            "content-type": "application/json",
            },
            body: JSON.stringify(myData)
            });
        const myResponse = await fetch(request).then(response => response.json())
    }

    else if (changedFields === "taxonomy_relatedSpecialty") {
        var categoryId = findCorrespondingCategory(data.primaryProfile.taxonomy_relatedSpecialty[0])
        var myData2 = {
            "categoryIds" :[categoryId]
        }
        const entityUrlEndpoint = "https://api.yext.com/v2/accounts/me/entities/" + entityId + "?v=20230206&api_key=${{apiKey}}"
        const request = new Request(entityUrlEndpoint, {
            method: 'PUT',
            headers: {
            "content-type": "application/json",
            },
            body: JSON.stringify(myData2)
            });
        const myResponse = await fetch(request).then(response => response.json())
    }
    
    else {
        return null;
    }
}

function findCorrespondingCategory(specialty){

    var myObj = {
        "SPEC-2621": "2150",
        "SPEC-2": "1353",
        "SPEC-3": "2151",
        "SPEC-59": "2174",
        "SPEC-7": "1505881",
        "SPEC-8": "1505882",
        "SPEC-64": "1505883",
        "SPEC-16": "2253",
        "SPEC-183333": "2176",
        "SPEC-9": "1437822",
        "SPEC-10": "1254",
        "SPEC-125": "1135524",
        "SPEC-11": "1505890",
        "SPEC-12": "2152",
        "SPEC-14": "1135560",
        "SPEC-15": "1357",
        "SPEC-66": "1135529",
        "SPEC-70": "1257",
        "SPEC-57": "1505893",
        "SPEC-19": "2177",
        "SPEC-50": "2254",
        "SPEC-4169": "1505899",
        "SPEC-106": "1269",
        "SPEC-20": "1505900",
        "SPEC-21": "2155",
        "SPEC-499": "163",
        "SPEC-22": "1358",
        "SPEC-126": "20000008",
        "SPEC-18": "2153",
        "SPEC-6": "1135548",
        "SPEC-68": "1505903",
        "SPEC-4480": "1120592",
        "SPEC-23": "2157",
        "SPEC-24": "1359997",
        "SPEC-25": "2158",
        "SPEC-49": "1330",
        "SPEC-26": "20000013",
        "SPEC-108": "1120597",
        "SPEC-27": "1266",
        "SPEC-120": "20000034",
        "SPEC-8333": "1505907",
        "SPEC-28": "1362",
        "SPEC-29": "1120594",
        "SPEC-54": "1245",
        "SPEC-30": "1359927",
        "SPEC-33": "20000023",
        "SPEC-56": "20000022",
        "SPEC-55": "1359761",
        "SPEC-34": "1255",
        "SPEC-36": "1367",
        "SPEC-37": "1135544",
        "SPEC-38": "1312",
        "SPEC-39": "2161",
        "SPEC-53": "1368",
        "SPEC-60": "1339",
        "SPEC-4162": "20000025",
        "SPEC-42": "1135545",
        "SPEC-43": "2185",
        "SPEC-58": "20000041",
        "SPEC-45": "1359716",
        "SPEC-46": "2162",
        "SPEC-48": "20000042",
        "SPEC-13445": "2175"
    }

    var categoryId = myObj[specialty]
    
    return categoryId
}

function findCorrespondingSpecialty(category){

    var myObj = {
        163: "SPEC-499",
        1235: "SPEC-499",
        1236: "SPEC-499",
        1238: "SPEC-499",
        1239: "SPEC-499",
        1240: "SPEC-499",
        1241: "SPEC-499",
        1242: "SPEC-499",
        2431: "SPEC-499",
        2180: "SPEC-499",
        1243: "SPEC-499",
        1244: "SPEC-499",
        1245: "SPEC-54",
        2184: "SPEC-499",
        1246: "SPEC-9",
        1359940: "SPEC-9",
        1247: "SPEC-9",
        1248: "SPEC-9",
        1059495: "SPEC-9",
        1437822: "SPEC-9",
        1249: "SPEC-9",
        2145: "SPEC-9",
        1251: "SPEC-9",
        1252: "SPEC-8333",
        2144: "SPEC-9",
        2147: "SPEC-9",
        2146: "SPEC-9",
        1253: "SPEC-9",
        1505518: "SPEC-11",
        1135560: "SPEC-14",
        1255: "SPEC-34",
        2177: "SPEC-19",
        1120591: "SPEC-115",
        2159: "SPEC-34",
        1257: "SPEC-70",
        1258: "SPEC-34",
        1265: "SPEC-27",
        1266: "SPEC-27",
        1234639: "SPEC-27",
        1267: "SPEC-27",
        1268: "SPEC-27",
        1269: "SPEC-106",
        1270: "SPEC-106",
        1271: "SPEC-20",
        2150: "SPEC-2621",
        20000000: "SPEC-70",
        1505877: "SPEC-57",
        1505878: "SPEC-56",
        1353: "SPEC-2",
        2151: "SPEC-3",
        2174: "SPEC-59",
        1505879: "SPEC-47",
        20000001: "SPEC-38",
        20000002: "SPEC-6",
        20000030: "SPEC-6",
        20000031: "SPEC-7",
        1505881: "SPEC-7",
        1505882: "SPEC-8",
        20000003: "SPEC-8",
        1505883: "SPEC-64",
        1512875: "SPEC-64",
        318: "SPEC-33",
        1505884: "SPEC-24",
        1135550: "SPEC-30",
        2175: "SPEC-13445",
        2253: "SPEC-16",
        1505885: "SPEC-56",
        2176: "SPEC-183333",
        1505886: "SPEC-57",
        1254: "SPEC-10",
        1135542: "SPEC-10",
        1505887: "SPEC-10",
        1505888: "SPEC-49",
        1356: "SPEC-29",
        1505889: "SPEC-7",
        20000004: "SPEC-24",
        1505890: "SPEC-11",
        2152: "SPEC-12",
        2164: "SPEC-12",
        2163: "SPEC-12",
        20000029: "SPEC-56",
        1061237: "SPEC-55",
        1357: "SPEC-15",
        1505892: "SPEC-15",
        1505893: "SPEC-57",
        1135546: "SPEC-18",
        2153: "SPEC-18",
        1505894: "SPEC-6",
        2154: "SPEC-19",
        20000005: "SPEC-26",
        2178: "SPEC-28",
        1505896: "SPEC-6",
        1505897: "SPEC-6",
        1505898: "SPEC-56",
        2254: "SPEC-50",
        1505899: "SPEC-4169",
        1135543: "SPEC-15",
        1505900: "SPEC-20",
        1551052: "SPEC-11",
        2155: "SPEC-21",
        1505843: "SPEC-12",
        20000032: "SPEC-48",
        1551049: "SPEC-22",
        1358: "SPEC-22",
        2156: "SPEC-22",
        1135537: "SPEC-7",
        20000007: "SPEC-126",
        20000008: "SPEC-126",
        20000009: "SPEC-15",
        20000010: "SPEC-23",
        1505901: "SPEC-114",
        20000011: "SPEC-26",
        2179: "SPEC-30",
        1135548: "SPEC-6",
        1505903: "SPEC-68",
        1505904: "SPEC-4480",
        1120592: "SPEC-4480",
        2157: "SPEC-23",
        1505905: "SPEC-6",
        20000012: "SPEC-24",
        1359997: "SPEC-24",
        1551051: "SPEC-24",
        20000033: "SPEC-24",
        2158: "SPEC-25",
        1505906: "SPEC-24",
        1135540: "SPEC-38",
        2181: "SPEC-38",
        20000013: "SPEC-26",
        20000014: "SPEC-27",
        1359944: "SPEC-6",
        20000015: "SPEC-27",
        20000016: "SPEC-27",
        20000034: "SPEC-120",
        1505907: "SPEC-8333",
        20000035: "SPEC-28",
        20000036: "SPEC-28",
        1362: "SPEC-28",
        1120594: "SPEC-29",
        1505847: "SPEC-20",
        1359927: "SPEC-30",
        20000017: "SPEC-70",
        20000018: "SPEC-71",
        1505908: "SPEC-7",
        20000019: "SPEC-7",
        20000020: "SPEC-4169",
        1505909: "SPEC-11",
        1505910: "SPEC-6",
        20000021: "SPEC-97",
        20000037: "SPEC-28",
        1505844: "SPEC-56",
        20000038: "SPEC-64",
        1505813: "SPEC-24",
        1505913: "SPEC-82",
        1505914: "SPEC-66",
        1505915: "SPEC-58",
        2168: "SPEC-22",
        1359750: "SPEC-33",
        20000022: "SPEC-56",
        164: "SPEC-56",
        1359761: "SPEC-55",
        2182: "SPEC-34",
        1135520: "SPEC-34",
        1135521: "SPEC-34",
        1359746: "SPEC-16",
        1505916: "SPEC-35",
        1505917: "SPEC-35",
        1135551: "SPEC-36",
        1367: "SPEC-36",
        1135544: "SPEC-37",
        1344572: "SPEC-56",
        1505918: "SPEC-45",
        20000023: "SPEC-33",
        2161: "SPEC-39",
        20000024: "SPEC-28",
        20000040: "SPEC-25",
        2148: "SPEC-57",
        20000025: "SPEC-4162",
        1135545: "SPEC-42",
        1135553: "SPEC-30",
        1505919: "SPEC-6",
        1120593: "SPEC-8",
        1341694: "SPEC-30",
        20000027: "SPEC-30",
        2185: "SPEC-43",
        20000041: "SPEC-58",
        20000028: "SPEC-45",
        1505920: "SPEC-45",
        1359716: "SPEC-45",
        1371: "SPEC-45",
        2162: "SPEC-46",
        20000042: "SPEC-48",
        1352: "SPEC-21",
        2166: "SPEC-10",
        2223: "SPEC-10",
        1316: "SPEC-70",
        1317: "SPEC-45",
        1318: "SPEC-45",
        1120597: "SPEC-34",
        1368: "SPEC-29",
        2260: "SPEC-21",
        1135533: "SPEC-35",
        1329: "SPEC-35",
        1319: "SPEC-24",
        1320: "SPEC-35",
        1321: "SPEC-35",
        1135534: "SPEC-35",
        1135535: "SPEC-35",
        1322: "SPEC-35",
        1323: "SPEC-35",
        1061245: "SPEC-35",
        1437885: "SPEC-35",
        1135536: "SPEC-35",
        1324: "SPEC-35",
        2183: "SPEC-35",
        1061246: "SPEC-35",
        1328: "SPEC-35",
        2173: "SPEC-29",
        2116: "SPEC-29",
        177: "SPEC-49",
        2167: "SPEC-49",
        1330: "SPEC-49",
        1330094: "SPEC-49",
        1331: "SPEC-47",
        1135569: "SPEC-3",
        1135570: "SPEC-7",
        1135571: "SPEC-64",
        1135572: "SPEC-183333",
        1551050: "SPEC-76",
        1135573: "SPEC-11",
        1135574: "SPEC-15",
        1135576: "SPEC-4169",
        1135575: "SPEC-21",
        1135565: "SPEC-23",
        1135561: "SPEC-24",
        1135559: "SPEC-6",
        1135556: "SPEC-27",
        1135554: "SPEC-28",
        1135552: "SPEC-29",
        1135549: "SPEC-30",
        1135531: "SPEC-64",
        1135567: "SPEC-64",
        1135547: "SPEC-36",
        1135538: "SPEC-38",
        1135527: "SPEC-39",
        1135522: "SPEC-70",
        1135529: "SPEC-66",
        1135525: "SPEC-45",
        178: "SPEC-13445",
        1333: "SPEC-13445",
        1334: "SPEC-13445",
        1335: "SPEC-13445",
        179: "SPEC-33",
        1336: "SPEC-33",
        1337: "SPEC-33",
        1338: "SPEC-33",
        1339: "SPEC-60",
        1135523: "SPEC-38",
        1135524: "SPEC-125",
        1135526: "SPEC-38",
        1135528: "SPEC-38",
        1135530: "SPEC-38",
        1135532: "SPEC-38",
        1351: "SPEC-38",
        1312: "SPEC-38",
        1315: "SPEC-38",
        1348: "SPEC-26",
        1349: "SPEC-12",
        1366244: "SPEC-26",
        1350: "SPEC-26"
}

    var specialtyId = myObj[category]

    console.log(specialtyId)
    return specialtyId
}