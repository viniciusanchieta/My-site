<?php 
extract($_POST, EXTR_OVERWRITE);
if(isset($enviar)){
    $to="contato@viniciuscesar.com";    
    $from = $email;
    $subject = "Contato de ".$nome;
    $subject3 = "Obrigado pelo Contato!";
    $message3='
    <html lang="pt-br">
    <head>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
        <style>
        body{
            font-family: "Open Sans", sans-serif;
        }
        </style>
    </head>
    <body>
        <p>Olá, '.$nome.'.</p>
        <p>Fico muito feliz pelo contato, logo logo estarei te respondendo com o assunto "Reposta contato".</p>
        <br>
        <p>Atenciosamente,<br> <i>Vinicius Cesar Rodrigues Anchieta<br>(15)99627-6547</i><br>
        <span><a href="https://www.linkedin.com/in/viniciusanchieta/"><img src="https://cdn4.iconfinder.com/data/icons/miu-flat-social/60/linkedin-32.png" alt="LinkeIn"></a></span>
        <span><a href="https://www.facebook.com/viniciuscesarof"><img src="https://cdn4.iconfinder.com/data/icons/miu-flat-social/60/facebook-32.png" alt="Facebook"></a></span>
        <span><a href="https://www.behance.net/vcesar"><img src="https://cdn4.iconfinder.com/data/icons/miu-flat-social/60/behance-32.png" alt="Behance"></a></span>
        </p>
    </body>
    </html>';
    $message=$mensagem;
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From:" . $from;

    $headers3  = "MIME-Version: 1.0\r\n";
    $headers3 .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers3 .= "From:Vinicius Cesar <contato@viniciuscesar.com>";
    mail($to,'=?utf-8?B?'.base64_encode($subject).'?=',$message,$headers);
    mail($email,'=?utf-8?B?'.base64_encode($subject3).'?=',$message3,$headers3); 
    echo "<script>location.href='https://viniciuscesar.com?s=y#send-email'</script>";
}
?>