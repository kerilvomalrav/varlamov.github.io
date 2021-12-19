<?php

$name = $_POST['username'];
$email = $_POST['email'];
$question = $_POST['question'];

$to = "kirill.varlamov.02@icloud.com";
$suject = "Пришел новый вопрос | 4 лапы";
$message = "Имя: $name, E-Mail: $email, Вопрос: $question";

$success = mail($to,$subject,$message);
if(!$success) {
	echo "Ошибка при выполнении запроса.";
}
else {
	echo "Заявка успешно отправлена!";
}