<?php

include dirname( __FILE__ ).'/php/csrf_protection/csrf-token.php';
include dirname( __FILE__ ).'/php/csrf_protection/csrf-class.php';

if ( !isset( $_SESSION ) ) {
	$some_name = session_name( "JBIMSAdmission" );
	session_start();
}

include dirname( __FILE__ ).'/php/config/config.php';
include dirname( __FILE__ ).'/php/config/functions.php';

/*date_default_timezone_set('Asia/Kolkata');
	$expiryDate = strtotime('11-01-2015');
	$currentDate = strtotime('now');
	if($currentDate > $expiryDate) {
		redirect($baseurl.'admin/thankyou.php');
		die();
	}*/
if ( $registration_closed == 'Y' ) {
	redirect( $baseurl.'admin/thankyou.php' );
	die();
}

$language = array( 'en' => 'en', 'pt' => 'pt' );

if ( isset( $_GET['lang'] ) and array_key_exists( $_GET['lang'], $language ) ) {
	include dirname( __FILE__ ).'/php/language/'.$language[$_GET['lang']].'.php';
} else {
	include dirname( __FILE__ ).'/php/language/en.php';
}

if ( $_SESSION['userLogin'] && $_SESSION['userName'] ) {

	redirect( $baseurl.'admin/dashboard.php?lang='.$_GET['lang'].'' );

}
?>
<!doctype html>
<html>
    <head>

        <?php include dirname( __FILE__ ).'/header.php'; ?>

    </head>

    <body>

		<div class="container">
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
			<div class="form">
				<div class="header">
					<div class="grid-container">
						<div class="column-twelve">
							<img src="images/logo.JPG"/>
						</div>
						<div class="column-twelve">
							<h4><i class="icon-users"></i><?php echo $lang['form_register_title'];?></h4>
						</div>
					</div>
				</div>
				<div class="section">
					<form method="post" action="<?php echo $baseurl;?>php/processor-register.php?lang=<?php echo $_GET['lang'];?>" id="register">
						<fieldset>
							<div class="grid-container">
								<div class="column-twelve">
									<div id="register-message"></div>
								</div>
								<div class="column-twelve">
									<div class="input-group">
										<?php echo CSRF::make( 'register-form' )->protect();?>
									</div>
								</div>
								<div class="column-twelve">
									<div class="box irequire">
									    <div class="box-header">
										    <h4>Select program you want to apply for...</h4>
										</div>
										<div class="box-section">
											<div class="column-six">
												<div class="checkbox-group space-bottom">
													<label for="program1" class="group">
														<input type="checkbox" name="program[]" class="checkbox" value="MMS" id="program1">
														<span class="label space-right">Masters in Management Studies (MMS)</span>
													</label>
												</div>
											</div>
											<div class="column-six">
												<div class="checkbox-group space-bottom">
													<label for="program2" class="group">
														<input type="checkbox" name="program[]" class="checkbox" value="MMM" id="program2" disabled="disabled">
														<span class="label space-right">(Part-time)Masters in Marketing management (MMM)</span>
													</label>
												</div>
											</div>
											<div class="column-six">
												<div class="checkbox-group space-bottom">
													<label for="program3" class="group">
														<input type="checkbox" name="program[]" class="checkbox" value="MIM" id="program3" disabled="disabled">
														<span class="label space-right">(Part-time)Masters in Information management (MIM)</span>
													</label>
												</div>
											</div>
											<div class="column-six">
												<div class="checkbox-group space-bottom">
													<label for="program4" class="group">
														<input type="checkbox" name="program[]" class="checkbox" value="MHRDM" id="program4" disabled="disabled">
														<span class="label space-right">(Part-time)Masters in Human Resource Development & Management (MHRDM)</span>
													</label>
												</div>
											</div>
											<div class="column-six">
												<div class="checkbox-group space-bottom">
													<label for="program5" class="group">
														<input type="checkbox" name="program[]" class="checkbox" value="MFM" id="program5" disabled="disabled">
														<span class="label space-right">(Part-time)Masters in Financial Management (MFM)</span>
													</label>
												</div>
											</div>
											<div class="column-six">
												<div class="checkbox-group space-bottom">
													<label for="program6" class="group">
														<input type="checkbox" name="program[]" class="checkbox" value="MSc Finance" id="program6">
														<span class="label space-right">MSc Finance</span>
													</label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="column-four">
									<div class="input-group-right irequire">
									    <label for="firstname" class="group label-input">
										    <i class="icon-user-3"></i>
			                                <input type="text" id="firstname" name="firstname" maxlength="30" class="input-right" placeholder="<?php echo $lang['form_register_placeholder_firstname'];?>">
										</label>
								    </div>
								</div>
								<div class="column-four">
									<div class="input-group-right">
										<label for="middlename" class="group label-input">
										    <i class="icon-user-3"></i>
			                                <input type="text" id="middlename" name="middlename" maxlength="30" class="input-right" placeholder="<?php echo $lang['form_register_placeholder_middlename'];?>">
										</label>
								    </div>
								</div>
								<div class="column-four">
									<div class="input-group-right irequire">
										<label for="lastname" class="group label-input">
										    <i class="icon-user-3"></i>
			                                <input type="text" id="lastname" name="lastname" maxlength="30" class="input-right" placeholder="<?php echo $lang['form_register_placeholder_lastname'];?>">
										</label>
								    </div>
								</div>
								<div class="column-twelve">
									<div class="input-group-right irequire">
										<label for="useremail" class="group label-input">
										    <i class="icon-envelop"></i>
			                                <input type="email" id="useremail" name="useremail" maxlength="70" class="input-right" placeholder="<?php echo $lang['form_register_placeholder_useremail'];?>">
										</label>
								    </div>
								</div>
								<div class="column-six">
                                    <div class="input-group-right irequire">
									    <label for="password" class="group label-input">
										    <i class="icon-key"></i>
			                                <input type="password" id="password" name="password" maxlength="30" class="input-right" placeholder="<?php echo $lang['form_register_placeholder_password'];?>">
										</label>
								    </div>
                                </div>
								<div class="column-six">
                                    <div class="input-group-right irequire">
									    <label for="retypepassword" class="group label-input">
										    <i class="icon-key"></i>
			                                <input type="password" id="retypepassword" name="retypepassword" maxlength="30" class="input-right" placeholder="<?php echo $lang['form_register_placeholder_retype_password'];?>">
										</label>
								    </div>
                                </div>
								<?php if ( $captcha == true ) { ?>
								<div class="column-six">
                                    <div class="captcha-group">
                                        <div class="captcha center">
										    <img src="<?php echo $baseurl;?>php/captcha/captcha.php" alt="captcha">
									    </div>
                                    </div>
                                </div>
								<div class="column-six">
                                    <div class="captcha-group">
                                        <label for="captcha" class="group label-captcha">
									        <input type="text" name="captcha" class="captcha center" id="captcha" maxlength="6" placeholder="<?php echo $lang['form_register_placeholder_captcha'];?>">
										</label>
                                    </div>
                                </div>
								<?php } ?>
								<div class="column-twelve">
									<button type="submit" id="register-button" class="button button-large button-blue"><?php echo $lang['form_register_button_register'];?></button>
								</div>
								<div class="column-twelve">
									<div class="terms">
										<p><?php echo $lang['form_register_terms_of_service'];?></p>
									</div>
								</div>
							</div>
						</fieldset>
					</form>
				</div>
				<div class="footer">
					<div class="grid-container">
						<div class="column-twelve">
							<a href="<?php echo $baseurl;?>login.php?lang=<?php echo $_GET['lang'];?>"><?php echo $lang['form_register_link_login'];?></a> <span class="black">|</span> <a href="<?php echo $baseurl;?>forgot-password.php?lang=<?php echo $_GET['lang'];?>"><?php echo $lang['form_register_link_forgot_password'];?></a> <span class="black">|</span> <a href="<?php echo $baseurl;?>resend.php?lang=<?php echo $_GET['lang'];?>"><?php echo $lang['form_register_resend_activation_token'];?></a>
						</div>
					</div>
				</div>
			</div>
		</div>

    </body>
</html>
