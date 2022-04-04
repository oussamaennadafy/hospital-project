<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
// header("Access-Control-Max-Age: 3600");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


include_once '../../config/database.php';
include_once '../../models/users.php';

$database = new Database();
$db = $database->getConnection();
$user = new user($db);


 if(!empty($_POST['first_name']) && !empty($_POST['last_name']) && !empty($_POST['age']) && !empty($_POST['birth']))
 {
  $user->first_name = $_POST['first_name'];
  $user->last_name = $_POST['last_name'];
  $user->age = $_POST['age'];
  $user->birth = $_POST['birth'];
  $user->key_special = rand(0,999999);
 } 


if($user->createUser()){
echo 'user created successfully ';
} else{
echo 'user could not be created ';
}
?>