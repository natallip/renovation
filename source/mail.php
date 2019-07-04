<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$building = $_POST['building'];
$type = $_POST['type'];
$square = $_POST['square'];
$balcony = $_POST['balcony'];
$squareBalcony = $_POST['squareBalcony'];
$additionally = $_POST['additionally'];
$name = $_POST['name'];
$phone = $_POST['phone'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  						  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'magenta555m@mail.ru';              // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'ih6g8kghg9';                       // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('magenta555m@mail.ru');                // от кого будет уходить письмо?
$mail->addAddress('kiberS8S@mail.ru');                // Кому будет уходить письмо

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта Ремонт';
$mail->Body    = '' .$name . ' оставил заявку, его телефон: ' .$phone . ';' .$building .';' .$type .';' .$square .';' .$balcony .';' .$squareBalcony . ';' .$additionally .'';
$mail->AltBody = '';

//if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они

if(!$mail->send()) {
    echo 'Error';
} else {
    echo "<p style='color:#009900;'>Уважаемый(ая) <b>$name1</b> Ваше письмо отправленно успешно. <br> Спасибо. <br>Вам скоро перезвонят на номер <b> $phone</b>.</p>";
}
?>