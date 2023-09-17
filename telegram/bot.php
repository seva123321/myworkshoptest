<?php
header('Access-Control-Allow-Origin: api.telegram.org');
header('Access-Control-Allow-Methods: GET,POST,OPTIONS');
header("Access-Control-Allow-Headers: X-Requested-With");



define('API_URL','https://api.telegram.org/bot');
$getKey = file_get_contents('KEY');
define('KEY',$getKey);

require_once $_SERVER['DOCUMENT_ROOT'].'/vendor/autoload.php';

// обрабатывает ответ от телеграма
$data = file_get_contents('php://input');
$data = json_decode($data, true);

$command = $data['message']['text'];
$userId = $data['message']['chat']['id'];

switch($command)
{
    case '/ping': sendMessage($userId,'pong'); break;
    default: sendMessage($userId,'неизвестная команда'); break;
}

function sendMessage($id,$text)
{
    $params = array(
        'text'  => $text,
        'chat_id' => $id
    );
     
    $ch = curl_init(API_URL.KEY.'/sendMessage?'.http_build_query($params));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, false);
    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_exec($ch);
}


//save to file 
//file_put_contents('response.json',$data);


