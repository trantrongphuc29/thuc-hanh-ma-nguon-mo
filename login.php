<?php
session_start();
$msg = '';
if (isset($_POST['login'])) {
	$username = $_POST['username'] ?? '';
	$password = $_POST['password'] ?? '';
	// Tài khoản mẫu
	$valid_user = 'admin';
	$valid_pass = '123456';
	if ($username === $valid_user && $password === $valid_pass) {
		$_SESSION['user'] = $username;
		header('Location: index.html');
		exit();
	} else {
		$msg = 'Sai tên đăng nhập hoặc mật khẩu!';
	}
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
	<meta charset="UTF-8">
	<title>Đăng nhập</title>
	<style>
		body { font-family: Arial; background: #f0f0f0; }
		.login-box { background: #fff; padding: 20px; margin: 100px auto; width: 300px; border-radius: 8px; box-shadow: 0 2px 8px #ccc; }
		.login-box h2 { text-align: center; }
		.login-box input { width: 90%; padding: 8px; margin: 8px 0; }
		.error { color: red; text-align: center; }
	</style>
</head>
<body>
	<div class="login-box">
		<h2>Đăng nhập</h2>
		<?php if ($msg) echo '<div class="error">'.$msg.'</div>'; ?>
		<form method="post">
			<input type="text" name="username" placeholder="Tên đăng nhập" required>
			<input type="password" name="password" placeholder="Mật khẩu" required>
			<button type="submit" name="login">Đăng nhập</button>
		</form>
	</div>
</body>
</html>
