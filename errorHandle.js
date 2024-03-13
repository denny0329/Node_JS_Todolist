function errHandle(res) {
    const headers = {
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
        'Content-Type': 'application/json'
    }
    res.writeHead(400, headers);
    res.write(JSON.stringify({
        "status": "false",
        "data": "資料格式有誤!"
    }));
    console.log("程式錯誤!");
    res.end();
}

module.exports = errHandle;