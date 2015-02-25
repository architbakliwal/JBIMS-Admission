<?php
	
	if(!isset($_SESSION)){
    	session_start();
	}
	
	include dirname(__FILE__).'/php/config/config.php';
	include dirname(__FILE__).'/php/config/functions.php';
	
	$language = array('en' => 'en','pt' => 'pt');

	if (isset($_GET['lang']) AND array_key_exists($_GET['lang'], $language)){
		include dirname(__FILE__).'/php/language/'.$language[$_GET['lang']].'.php';
	} else {
		include dirname(__FILE__).'/php/language/en.php';
	}

	if($_SESSION['userLogin'] && $_SESSION['userName']){
				
		redirect($baseurl.'admin/dashboard.php?lang='.$_GET['lang'].'');
		
	}	
?>  
<!doctype html>
<html>
    <head>

        <?php include dirname(__FILE__).'/header.php'; ?>

    </head>
	
    <body>
	
		<div class="wrapper small-wrapper"> 
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
	        <div class="header">
			    <div class="grid-container">
			    	<div class="column-twelve">
						<img src="images/logo.JPG"/>
					</div>
                    <div class="column-twelve">
						<h2><?php echo $lang['index_title'];?></h2>
					</div>
					
				</div>
			</div>
			<div class="section">
				<div class="grid-container">
					<div class="column-twelve">
						<p>Please read the <a href="http://www.jbims.edu/August%202014/form.pdf" target="_blank">instructions</a> before applying</p>
					</div>
					<div class="column-six">
						<div class="box" id="box-1" style="background-color: #4183D7;">
							<a href="<?php echo $baseurl;?>login.php?lang=<?php echo $_GET['lang'];?>"><h4>Existing user</h4><i class="icon-lock-2"></i><h4><?php echo $lang['index_login_your_account'];?></h4></a>
						</div>
					</div>
					<div class="column-six">
						<div class="box" id="box-2" style="background-color: #4183D7;">
							<a href="<?php echo $baseurl;?>register.php?lang=<?php echo $_GET['lang'];?>"><h4>New user</h4><i class="icon-users"></i><h4><?php echo $lang['index_register_your_account'];?></h4></a>
						</div>
					</div>
				</div>
			</div>
			<div class="copyright">
				<div class="grid-container">
					<div class="column-twelve">
						<p><?php echo $lang['index_copyright_info'];?></p>
					</div>
				</div>
            </div>
		</div>

    </body>
</html>