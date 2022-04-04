<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../models/appointments.php';

$database = new Database();
$db = $database->getConnection();

$appointment = new appointment($db);
$appointment->key_user = isset($_GET['key_user']) ? $_GET['key_user'] : die('please entre the key_user');

$appointment->getSingleAppointment();

if($db->affected_rows > 0){

// create array
$emp_arr = array(
"key_user" => $appointment->key_user,
"topic" => $appointment->topic,
"date_appointment" => $appointment->date_appointment,
"start_appointment" => $appointment->start_appointment,
"end_appointment" => $appointment->end_appointment,
);

http_response_code(200);
echo'we found the appointment : ';
echo json_encode($emp_arr);
}
else{
http_response_code(404);
echo json_encode("appointment not found");
}
?>