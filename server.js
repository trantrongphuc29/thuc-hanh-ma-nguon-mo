const http = require('http');
const url = require('url');

const students = [
    { ten: 'Nguyễn Văn A', ma: 'SV001', lop: 'CNTT01', mon_hoc: 'Lập trình web' },
    { ten: 'Trần Thị B', ma: 'SV002', lop: 'CNTT02', mon_hoc: 'Cơ sở dữ liệu' },
    { ten: 'Lê Văn C', ma: 'SV003', lop: 'CNTT01', mon_hoc: 'Mạng máy tính' }
];

const server = http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;
    
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    
    if (pathname === '/api/students') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(students));
    } else {
        const html = `
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thông tin sinh viên - Node.js</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .student { border: 1px solid #ddd; padding: 10px; margin: 10px 0; border-radius: 5px; }
        button { padding: 10px 20px; margin: 10px 0; cursor: pointer; }
    </style>
</head>
<body>
    <h1>Danh sách sinh viên (Node.js)</h1>
    <button onclick="loadStudents()">Tải danh sách</button>
    <div id="students"></div>
    
    <script>
        function loadStudents() {
            fetch('/api/students')
                .then(response => response.json())
                .then(students => {
                    const container = document.getElementById('students');
                    container.innerHTML = students.map(student => 
                        '<div class="student">' +
                        '<h3>' + student.ten + '</h3>' +
                        '<p><strong>Mã:</strong> ' + student.ma + '</p>' +
                        '<p><strong>Lớp:</strong> ' + student.lop + '</p>' +
                        '<p><strong>Môn học:</strong> ' + student.mon_hoc + '</p>' +
                        '</div>'
                    ).join('');
                });
        }
    </script>
</body>
</html>`;
        res.end(html);
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log('Server đang chạy tại http://localhost:' + PORT);
});