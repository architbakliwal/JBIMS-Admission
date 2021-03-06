<?php

include dirname( __FILE__ ).'/csrf_protection/csrf-token.php';
include dirname( __FILE__ ).'/csrf_protection/csrf-class.php';

if ( !isset( $_SESSION ) ) {
	$some_name = session_name( "JBIMSAdmission" );
	session_start();
}

include dirname( __FILE__ ).'/config/config.php';
include dirname( __FILE__ ).'/config/functions.php';

$language = array( 'en' => 'en', 'pt' => 'pt' );

if ( isset( $_GET['lang'] ) and array_key_exists( $_GET['lang'], $language ) ) {
	include dirname( __FILE__ ).'/language/'.$language[$_GET['lang']].'.php';
} else {
	include dirname( __FILE__ ).'/language/en.php';
}

$program = '';

if ( !empty( $_POST['program'] ) ) {
	foreach ( $_POST['program'] as $check ) {
		$program = $program . ', ' . $check;
	}
} else {
	echo '<div class="error-message"><i class="icon-close"></i>Please select atleast one program.</div>';
	die();
}

// $program = strip_tags(trim($_POST["program"]));
$firstname = strip_tags( trim( $_POST["firstname"] ) );
$middlename = strip_tags( trim( $_POST["middlename"] ) );
$lastname = strip_tags( trim( $_POST["lastname"] ) );
$useremail = strip_tags( trim( $_POST["useremail"] ) );
$password = strip_tags( trim( $_POST["password"] ) );
$retypepassword = strip_tags( trim( $_POST["retypepassword"] ) );
$verification = strip_tags( trim( $_POST["captcha"] ) );

$finalprogram = htmlspecialchars( $program, ENT_QUOTES, 'UTF-8' );
$finalfirstname = htmlspecialchars( $firstname, ENT_QUOTES, 'UTF-8' );
$finalmiddlename = htmlspecialchars( $middlename, ENT_QUOTES, 'UTF-8' );
$finallastname = htmlspecialchars( $lastname, ENT_QUOTES, 'UTF-8' );
$finalusername = htmlspecialchars( '', ENT_QUOTES, 'UTF-8' );
$finaluseremail = htmlspecialchars( $useremail, ENT_QUOTES, 'UTF-8' );
$finalpass = htmlspecialchars( $password, ENT_QUOTES, 'UTF-8' );
$finalretypepass = htmlspecialchars( $retypepassword, ENT_QUOTES, 'UTF-8' );
$finalverification = htmlspecialchars( $verification, ENT_QUOTES, 'UTF-8' );


if ( $SMTP == true ) {
	if ( $mysql == true ) {
		$duplicate = mysql_query( "SELECT * FROM ".$mysqltable_name_1." WHERE email_id = '".mysql_real_escape_string( $finaluseremail )."'" );
		$result = mysql_num_rows( $duplicate );
		if ( $result == 0 ) {

			$finalemailtoken = md5( uniqid( rand(), true ) );
			$datetime = date( "Y-m-d H:i:s" );
			$expiretokenemail = date( "Y-m-d H:i:s", strtotime( '+12 hour' ) );
			$finaluserid = md5( time() );

			include dirname( __FILE__ ).'/php-pass-framework/PasswordHash.php';

			$hasher = new PasswordHash( 8, false );
			$finalsalt = hash( 'sha512', uniqid( mt_rand( 1, mt_getrandmax() ), true ) );
			$finalpassword = $hasher->HashPassword( $finalpass . $finalsalt . $passwordsalt );

			$sqlregister = "INSERT INTO ".$mysqltable_name_1." (login_system_registrations_date,login_system_registrations_user_id,f_name,m_name,l_name,application_id,email_id,password,salt,registration_ip, program_enrolled, application_status) VALUES (CURRENT_TIMESTAMP,'".$finaluserid."','".mysql_real_escape_string( $finalfirstname )."','".mysql_real_escape_string( $finalmiddlename )."','".mysql_real_escape_string( $finallastname )."','".mysql_real_escape_string( $finalusername )."','".mysql_real_escape_string( $finaluseremail )."','".mysql_real_escape_string( $finalpassword )."','".mysql_real_escape_string( $finalsalt )."','".mysql_real_escape_string( $finaluserip )."','".mysql_real_escape_string( $finalprogram )."','".mysql_real_escape_string( 'Draft' )."')";
			$insertregister = mysql_query( $sqlregister );

			$searchid = mysql_query( "SELECT uid,login_system_registrations_user_id FROM ".$mysqltable_name_1." WHERE application_id = '".mysql_real_escape_string( $finalusername )."' AND email_id = '".mysql_real_escape_string( $finaluseremail )."'" );
			$resultid = mysql_num_rows( $searchid );
			$queryid = mysql_fetch_array( $searchid );

			$uid = mysql_real_escape_string( $queryid['uid'] );
			$applicationid = str_pad( $uid, 6, '0', STR_PAD_LEFT );
			$applicationid = 'JB2015'. $applicationid;

			$finalusername = $applicationid;

			$setapplicationid = "UPDATE ".$mysqltable_name_1." SET application_id = '".mysql_real_escape_string( $finalusername )."' WHERE login_system_registrations_user_id = '".mysql_real_escape_string( $queryid['login_system_registrations_user_id'] )."'";
			$setapplicationidquery1 = mysql_query( $setapplicationid );

			$sqlactivation = "INSERT INTO ".$mysqltable_name_4." (login_system_email_activation_user_id,login_system_email_activation_username,login_system_email_activation_expire,login_system_email_activation_useremail,login_system_email_activation_token,login_system_email_activation_date,login_system_email_activation_ip,login_system_email_activation_attempts,login_system_email_activation_status) VALUES ('".mysql_real_escape_string( $queryid['login_system_registrations_user_id'] )."','".mysql_real_escape_string( $finalusername )."','".mysql_real_escape_string( $expiretokenemail )."','".mysql_real_escape_string( $finaluseremail )."','".mysql_real_escape_string( $finalemailtoken )."','".mysql_real_escape_string( $datetime )."','".mysql_real_escape_string( $finaluserip )."','0','0')";
			$insertactivation = mysql_query( $sqlactivation );


			$sqlpersonal = "INSERT INTO `jbims_admission`.`users_personal_details` (`application_id`, `f_name`, `m_name`, `l_name`) VALUES ('".mysql_real_escape_string( $finalusername )."','".mysql_real_escape_string( $finalfirstname )."','".mysql_real_escape_string( $finalmiddlename )."','".mysql_real_escape_string( $finallastname )."')
						ON DUPLICATE KEY
						UPDATE
						f_name = VALUES(f_name),
						m_name = VALUES(m_name),
						l_name = VALUES(l_name)
						;";

			$insertpersonal = mysql_query( $sqlpersonal );


			$sqlcontact = "INSERT INTO `jbims_admission`.`users_contact_details` (`application_id`, `email_id`) VALUES (
					'".mysql_real_escape_string( $finalusername )."',
					'".mysql_real_escape_string( $finaluseremail )."'
					)
				ON DUPLICATE KEY
				UPDATE
				email_id = VALUES(email_id)
				;";

			$insertcontact = mysql_query( $sqlcontact );


			$sqlpayment = "INSERT INTO `jbims_admission`.`users_payment_details` (`application_id`, `dd_email_address`) VALUES (
					'".mysql_real_escape_string( $finalusername )."',
					'".mysql_real_escape_string( $finaluseremail )."'
					)
				ON DUPLICATE KEY
				UPDATE
				dd_email_address = VALUES(dd_email_address)
				;";

			$insertpayment = mysql_query( $sqlpayment );



			include dirname( __FILE__ ).'/phpmailer/PHPMailerAutoload.php';
			include dirname( __FILE__ ).'/messages/automessageemail.php';

			$automail = new PHPMailer();
			$automail->IsSMTP();
			$automail->SMTPAuth = true;
			$automail->SMTPSecure = $protocol;
			$automail->Host = $host;
			$automail->Port = $port;
			$automail->Username = $smtpusername;
			$automail->Password = $smtppassword;
			$automail->From = $youremail;
			$automail->FromName = $yourname;
			$automail->isHTML( true );
			$automail->CharSet = "UTF-8";
			$automail->Encoding = "base64";
			$automail->Timeout = 200;
			$automail->SMTPDebug = 0; // 0 = off (for production use) // 1 = client messages // 2 = client and server messages
			$automail->ContentType = "text/html";
			$automail->AddAddress( $finaluseremail );
			$automail->Subject = $lang['account_creation_subject'];
			$automail->Body = $automessageemail;
			$automail->AltBody = "To view this message, please use an HTML compatible email";

			if ( $automail->Send() ) {
				echo $lang['account_creation_successful'];
				redirect_time( $baseurl.'login.php?lang='.$_GET['lang'].'' );
			} else {
				echo $lang['account_creation_unsuccessful'];
			}
		} else {
			echo $lang['account_creation_duplicate_email'];
		}
	} else {
		echo $lang['account_creation_failed_connect_with_db'];
	}
} else {
	echo $lang['account_creation_failed_connect_with_smtp'];
}
?>
