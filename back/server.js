const express = require("express");
const cors = require("cors");
require("dotenv").config(); // .env 파일을 읽기 위한 설정

const app = express();
app.use(cors()); // CORS 허용
app.use(express.json()); // JSON 파싱

// 기본 API 테스트
app.get("/", (req, res) => {
    res.json({ message: "Connected!" });
});

// 서버 실행
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));