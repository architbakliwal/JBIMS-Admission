<?php
    
	include '../php/csrf_protection/csrf-token.php';
	include '../php/csrf_protection/csrf-class.php';

	if(!isset($_SESSION)){
    	session_start();
	}
    
	include '../php/config/config.php';
	include '../php/config/functions.php';
	
	$language = array('en' => 'en','pt' => 'pt');

	if (isset($_GET['lang']) AND array_key_exists($_GET['lang'], $language)){
		include '../php/language/'.$language[$_GET['lang']].'.php';
	} else {
		include '../php/language/en.php';
	}

	if(!$_SESSION['userLogin'] && !$_SESSION['userName'] && !isset($_SESSION['userName'])){
				
		redirect($baseurl.'login.php?lang='.$_GET['lang'].'');
			
	} else {					
		$time = time();
								
		if($time > $_SESSION['expire']){
			session_destroy();
			timeout();
			exit(0);
		}		
	}
	
?>
<!doctype html>
<html>
    <head>

        <?php include '../header.php'; ?>

    </head>
	
    <body>

    	<?php 
		
			$userInfo = mysql_query("SELECT login_system_registrations_user_id,application_status FROM ".$mysqltable_name_1." WHERE login_system_registrations_user_id = '".mysql_real_escape_string($_SESSION['userLogin'])."'");
			$userQuery = mysql_num_rows($userInfo);
						
			$user = mysql_fetch_array($userInfo);

			if($user["application_status"] != 'Completed') {
		    	redirect($baseurl.'admin/dashboard.php?lang='.$_GET['lang'].'');
		    	die();
    		}

    		$is_mh_cet = 'N';

    		$testscore = "SELECT * FROM  `users_test_score_details` WHERE application_id ='" . mysql_real_escape_string($_SESSION['userName']) ."'";
			$selecttestscore = mysql_query($testscore);
			if(! $selecttestscore )
			{
			  die('Could not enter data: ' . mysql_error());
			}
			while ($row = mysql_fetch_array($selecttestscore, MYSQL_ASSOC)) {
		       $test_apprearing = $row['test_apprearing'];
		    }
			if (strpos($test_apprearing, 'CET') > -1) {
				$is_mh_cet = 'Y';
			}
		?>

	    <?php if($_SESSION['userLogin'] && $_SESSION['userName']){ ?>
		<div class="wrapper"> 
		    <div class="form-bar">
				<div class="top-bar bar-green"></div>
				<div class="top-bar bar-orange"></div>
				<div class="top-bar bar-yellow"></div>
				<div class="top-bar bar-red"></div>
				<div class="top-bar bar-purple"></div>
				<div class="top-bar bar-pink"></div>
				<div class="top-bar bar-blue-dark"></div>
				<div class="top-bar bar-blue"></div>
			</div>
	        <div class="header dashboard_header">
			    <div class="grid-container">
			    	<div class="column-twelve">
						<h4><?php echo $lang['dashboard_title'];?></h4>
					</div>
					<div class="column-twelve" style="color: red; font-weight: bold;">
						<p><marquee scrollamount="6">Online Registrations are closed for MMS/MSc 2015-2017 batch.</marquee></p>
					</div>
                    <div class="column-eleven" style="text-align: left;">
						<?php echo $lang['application_id'];?><?php echo $_SESSION['userName'];?>
					</div>
					<div class="column-one">
						<a href="<?php echo $baseurl;?>logout.php?user=<?php echo $user["login_system_registrations_user_id"];?>&lang=<?php echo $_GET['lang'];?>" class="logout"><?php echo $lang['dashboard_form_logout'];?></a>
					</div>
				</div>
			</div>
			<div class="section">
				<div class="grid-container">
					<div class="form">
						<div class="section inner_section" id="academic-clone">
							<form method="post" action="<?php echo $baseurl;?>php/processor-cet.php?lang=<?php echo $_GET['lang'];?>" id="section_done">
								<fieldset>
									<div class="grid-container">
										<div class="column-twelve">
										    <div class="box">
												<div class="box-section center">
													<div class="column-twelve" style="margin:30px;">
														<h3 style="text-align: center;">Congratulations! Your application has been successfully submitted for the batch of 2015-2017 at Jamnalal Bajaj Institute of Management Studies, Mumbai.</h3>
													</div>

													<?php if($mh_cet_open == 'Y' && $is_mh_cet == 'Y'){ ?>
															
													<div class="column-twelve">
														<h3>MH-CET Details</h3>
													</div>
													<div class="column-four">
														<div class="input-group-right irequire">
															<label for="cetrollnumber" class="group label-input">
																<input type="text" id="cetrollnumber" name="cetrollnumber" class="input-right" placeholder="MH-CET Roll Number">
															</label>
														</div>
													</div>
													<div class="column-four">
														<div class="input-group-right irequire">
															<label for="cetmarks" class="group label-input">
																<input type="text" id="cetmarks" name="cetmarks" class="input-right" placeholder="Overall marks scored">
															</label>
														</div>
													</div>
													<div class="column-four">
														<div class="input-group-right irequire">
															<label for="cetpercentile" class="group label-input">
																<input type="text" id="cetpercentile" name="cetpercentile" class="input-right" placeholder="Overall Percentile">
															</label>
														</div>
													</div>
													<div class="column-two">
														<button type="button" id="cet-save-button" class="button button-large button-blue space">Save</button>
													</div>
													<div class="column-twelve" style="margin:0px; font-size: 20px;font-weight: bold;">
														<a href="<?php echo $baseurl;?>secure/application/document/go/document.php" style="color: blue; text-decoration: underline;">Download Application Form</a>
													</div>
													<?php } ?>
											    </div>
											</div>
										</div>
									</div>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class="copyright">
				<div class="grid-container">
					<div class="column-twelve">
						<p><?php echo $lang['dashboard_copyright_info'];?></p>
					</div>
				</div>
            </div>
		</div>
		
		<?php } else { ?>
		
		<?php 
			redirect($baseurl.'login.php?lang='.$_GET['lang'].'');		
		 } ?>

    </body>
</html>