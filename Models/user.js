const mysql = require('mysql')

const dbconfig = require('./Models/DB_config.json');

const pool = mysql.createPool({
    connectionLimit: 10,          // 최대 10개의 연결을 유지
    host: dbconfig.host,          // 데이터베이스 호스트
    user: dbconfig.user,          // 데이터베이스 사용자명
    password: dbconfig.password,  // 데이터베이스 비밀번호
    database: dbconfig.database,  // 사용할 데이터베이스
    debug: false                  // 디버그 모드 설정
});