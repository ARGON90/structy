function getJSONDiff(json1, json2) {
    // const jsonArray1 = json1.split(',').join('').split(':').join('').split('"');
    // const jsonArray2 = json1.split(',').join('').split(':').join('').split('"');
    const jsonArr1 = JSON.parse(json1)
    return jsonArr1
}


console.log(getJSONDiff(['hello:world,hi:world'], []))
