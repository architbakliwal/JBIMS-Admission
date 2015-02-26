var currentYear = (new Date).getFullYear();
var isApplicationValid = true;
var catValid = false;
var personalstatus = false;
var contactstatus = false;
var academicestatus = false;
var workexstatus = false;
var refreestatus = false;
var scorestatus = false;
var docstatus = false;
var paymentstatus = false;
var applicantdata = null;

jQuery.noConflict()(function($){
	$(document).ready(function(){

		// $(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);

		$.fn.changeVal = function (v) {
		    return $(this).val(v).trigger("change");
		}

		$('#academic-clone').cloneya({removeRequired: true, isNumberPresent: true});

		$('#workex-clone').cloneya({removeRequired: true, limit: 3});

		$("#add-extra-academic").click(function(){
			$('.toclone').css('display', 'block');
			$('#extraacademiccount').val('1');
			$("#add-extra-academic").css('display', 'none');
		});

		$(".irequire input").addClass('itrequired');
		$(".irequire select").addClass('itrequired');


		$( "input[type=text]" ).attr('maxlength', 30);

	    $( "#dob" ).datepicker({
	      changeMonth: true,
	      changeYear: true,
	      dateFormat: 'yy-mm-dd',
	      yearRange: '1900:' + currentYear
	    });

	    $( "#passportexipry" ).datepicker({
	      changeMonth: true,
	      changeYear: true,
	      dateFormat: 'yy-mm-dd',
	      yearRange: currentYear + ':2100'
	    });

	    $("#category").change(function () {
		    if($( "#category" ).val() == 'Other') {
		    	$( "#categoryothers-div" ).addClass('irequire');
		    	$( "#categoryothers" ).removeAttr('disabled');
		    } else {
		    	$( "#categoryothers-div" ).removeClass('irequire');
		    	$( "#categoryothers" ).val('');
		    	$( "#categoryothers" ).attr('disabled', 'disabled');
		    }
	    });

	    $("#currentcountry").change(function () {
		    if($( "#currentcountry" ).val() != 'India') {
		    	$( "#currentstate" ).val('Other');
		    	$( "#currentstate" ).attr('disabled', 'disabled');
		    	$( "#currentstateother-div" ).addClass('irequire');
		    	$( "#currentstateother" ).removeAttr('disabled');
		    } else {
		    	$( "#currentstate" ).val('');
		    	$( "#currentstate" ).removeAttr('disabled');
		    	$( "#currentstateother-div" ).removeClass('irequire');
		    	$( "#currentstateother" ).val('');
		    	$( "#currentstateother" ).attr('disabled', 'disabled');
		    }
	    });

	    $("#currentstate").change(function () {
		    if($( "#currentstate" ).val() == 'Other') {
		    	$( "#currentstateother-div" ).addClass('irequire');
		    	$( "#currentstateother" ).removeAttr('disabled');
		    } else {
		    	$( "#currentstateother-div" ).removeClass('irequire');
		    	$( "#currentstateother" ).val('');
		    	$( "#currentstateother" ).attr('disabled', 'disabled');
		    }
	    });

	    $('input[name=permanentsameascurrent]', '#section_contact').change(function() {
	        if (this.value == 'Yes') {
	        	$( "#permanentaddress1" ).changeVal($( "#currentaddress1" ).val());
	        	$( "#permanentaddress2" ).changeVal($( "#currentaddress2" ).val());
	        	$( "#permanentaddress3" ).changeVal($( "#currentaddress3" ).val());
	        	$( "#permanentcity" ).changeVal($( "#currentcity" ).val());
	        	$( "#permanentcountry" ).changeVal($( "#currentcountry" ).val());
	        	$( "#permanentstate" ).changeVal($( "#currentstate" ).val());
	        	$( "#permanentstateother" ).changeVal($( "#currentstateother" ).val());
	        	$( "#permanentzip" ).changeVal($( "#currentzip" ).val());
	        }
	        else if (this.value == 'No') {
	        	$( "#permanentaddress1" ).changeVal('');
	        	$( "#permanentaddress2" ).changeVal('');
	        	$( "#permanentaddress3" ).changeVal('');
	        	$( "#permanentcity" ).changeVal('');
	        	$( "#permanentcountry" ).changeVal('');
	        	$( "#permanentstate" ).changeVal('');
	        	$( "#permanentstateother" ).changeVal('');
	        	$( "#permanentzip" ).changeVal('');
	        }
	    });

	    $("#permanentcountry").change(function () {
		    if($( "#permanentcountry" ).val() != 'India') {
		    	$( "#permanentstate" ).val('Other');
		    	$( "#permanentstate" ).attr('disabled', 'disabled');
		    	$( "#permanentstateother-div" ).addClass('irequire');
		    	$( "#permanentstateother" ).removeAttr('disabled');
		    } else {
		    	$( "#permanentstate" ).val('');
		    	$( "#permanentstate" ).removeAttr('disabled');
		    	$( "#permanentstateother-div" ).removeClass('irequire');
		    	$( "#permanentstateother" ).val('');
		    	$( "#permanentstateother" ).attr('disabled', 'disabled');
		    }
	    });

	    $("#permanentstate").change(function () {
		    if($( "#permanentstate" ).val() == 'Other') {
		    	$( "#permanentstateother-div" ).addClass('irequire');
		    	$( "#permanentstateother" ).removeAttr('disabled');
		    } else {
		    	$( "#permanentstateother-div" ).removeClass('irequire');
		    	$( "#permanentstateother" ).val('');
		    	$( "#permanentstateother" ).attr('disabled', 'disabled');
		    }
	    });

	    $("#tenthboard").change(function () {
		    if($( "#tenthboard" ).val() == 'Others' ||  $( "#tenthboard" ).val() == 'State Board') {
		    	$( "#tenthboardothers-div" ).addClass('irequire');
		    	$( "#tenthboardothers" ).removeAttr('disabled');
		    } else {
		    	$( "#tenthboardothers-div" ).removeClass('irequire');
		    	$( "#tenthboardothers" ).val('');
		    	$( "#tenthboardothers" ).attr('disabled', 'disabled');
		    }
	    });

	    $("#twelfthboard").change(function () {
		    if($( "#twelfthboard" ).val() == 'Others' || $( "#twelfthboard" ).val() == 'State Board') {
		    	$( "#twelfthboardothers-div" ).addClass('irequire');
		    	$( "#twelfthboardothers" ).removeAttr('disabled');
		    } else {
		    	$( "#twelfthboardothers-div" ).removeClass('irequire');
		    	$( "#twelfthboardothers" ).val('');
		    	$( "#twelfthboardothers" ).attr('disabled', 'disabled');
		    }
	    });

	    $("#gradutationunversity").change(function () {
		    if($( "#gradutationunversity" ).val() == '523' ||  $( "#gradutationunversity" ).val() == '335' ||  $( "#gradutationunversity" ).val() == '100') {
		    	$( "#graduationuniversityothers-div" ).addClass('irequire');
		    	$( "#graduationuniversityothers" ).removeAttr('disabled');
		    } else {
		    	$( "#graduationuniversityothers-div" ).removeClass('irequire');
		    	$( "#graduationuniversityothers" ).val('');
		    	$( "#graduationuniversityothers" ).attr('disabled', 'disabled');
		    }
	    });

	    $("#graduationdiscipline").change(function () {
		    if($( "#graduationdiscipline" ).val() == '28') {
		    	$( "#graduationdisciplineother-div" ).addClass('irequire');
		    	$( "#graduationdisciplineother" ).removeAttr('disabled');
		    } else {
		    	$( "#graduationdisciplineother-div" ).removeClass('irequire');
		    	$( "#graduationdisciplineother" ).val('');
		    	$( "#graduationdisciplineother" ).attr('disabled', 'disabled');
		    }
	    });

	    $("#graduationcompleted").change(function () {
		    if($( "#graduationcompleted" ).val() == 'Yes') {
		    	$( "#gradationcompletionyear-div" ).addClass('irequire');
		    	$( "#gradationcompletionyear" ).removeAttr('disabled');
		    } else {
		    	$( "#gradationcompletionyear-div" ).removeClass('irequire');
		    	$( "#gradationcompletionyear" ).val('');
		    	$( "#gradationcompletionyear" ).attr('disabled', 'disabled');
		    }
	    });

	    $('input[name=graduationgpaorpercentage]', '#section_academic').change(function() {
	        if (this.value == 'Percentage') {
	        	$('#graduationgpa-div').css('display', 'none');
	        	$('#graduationpercentage-div').css('display', 'block');
	        }
	        else if (this.value == 'GPA') {
	        	$('#graduationpercentage-div').css('display', 'none');
	        	$('#graduationgpa-div').css('display', 'block');
	        }
	    });

	    $('input[name=isworkex]', '#section_workex').change(function() {
	        if (this.value == 'Yes') {
	        	$('#workex-super-div').css('display', 'block');
	        }
	        else if (this.value == 'No') {
	        	$('#workex-super-div').css('display', 'none');
	        }
	    });

	    $('#workstarted').datepicker( {
	        changeMonth: true,
		    changeYear: true,
		    dateFormat: 'yy-mm-dd',
		    yearRange: '1950:' + currentYear
	    });

	    $('#workcompleted').datepicker( {
	       changeMonth: true,
		    changeYear: true,
		    dateFormat: 'yy-mm-dd',
		    yearRange: '1950:' + currentYear
	    });

	    $(".modal, .overlay").hide();
	
				
		$(".open-cat").click(function(){ 
			$(".modal-cat, .overlay").fadeIn();

			$("#window_cat").validate({
			
	        	errorPlacement: function (error, element) {

	            },
	            success: function (label, element) {
	                
	            },
	            submitHandler:function(form) {
	            	
			    }				
			});

			// the following method must come AFTER .validate()
			$('#window_cat .itrequired').each(function() {
			    $(this).rules('add', {
			        required: true,
			    });
			});

			if(isValid(applicantdata[8])){
			    $('#window_cat').loadJSON(applicantdata[8]);
			}
		});

		$(".open-cet").click(function(){ 
			$(".modal-cet, .overlay").fadeIn();
		});

		$(".open-gre").click(function(){ 
			$(".modal-gre, .overlay").fadeIn();

			$("#window_gre").validate({
			
	        	errorPlacement: function (error, element) {

	            },
	            success: function (label, element) {
	                
	            },
	            submitHandler:function(form) {
	            	
			    }				
			});

			// the following method must come AFTER .validate()
			$('#window_gre .itrequired').each(function() {
			    $(this).rules('add', {
			        required: true,
			    });
			});

			if(isValid(applicantdata[9])){
	    		$('#window_gre').loadJSON(applicantdata[9]);
	    	}
		});

		$(".open-gmat").click(function(){ 
			$(".modal-gmat, .overlay").fadeIn();

			$("#window_gmat").validate({
			
	        	errorPlacement: function (error, element) {

	            },
	            success: function (label, element) {
	                
	            },
	            submitHandler:function(form) {
	            	
			    }				
			});

			// the following method must come AFTER .validate()
			$('#window_gmat .itrequired').each(function() {
			    $(this).rules('add', {
			        required: true,
			    });
			});

			if(isValid(applicantdata[10])){
	    		$('#window_gmat').loadJSON(applicantdata[10]);
	    	}
		});
		
		$(".close").click(function(){
		    $(".modal, .overlay").fadeOut();
		});

		$( "#catexamdate" ).datepicker({
	      changeMonth: true,
	      changeYear: true,
	      dateFormat: 'yy-mm-dd'
	    });

	    $( "#gredate" ).datepicker({
	      changeMonth: true,
	      changeYear: true,
	      dateFormat: 'yy-mm-dd'
	    });

	    $( "#gmatdate" ).datepicker({
	      changeMonth: true,
	      changeYear: true,
	      dateFormat: 'yy-mm-dd'
	    });

	    $( "#paymentdate" ).datepicker({
	      changeMonth: true,
	      changeYear: true,
	      dateFormat: 'yy-mm-dd'
	    });

	    $('input[name=paymentmode]', '#section_payment').change(function() {
	        if (this.value == 'ddbanktransfer') {
	        	$('#demanddraft-container').css('display', 'block');
	        }
	        else {
	        	$('#demanddraft-container').css('display', 'none');
	        }
	    });

	    $("#save-button-personal").click(function(){
	    	jQuery('#section_personal').ajaxSubmit();
	    });

	    $("#save-button-contact").click(function(){
	    	jQuery('#section_contact').ajaxSubmit();
	    });

	    $("#save-button-academic").click(function(){
	    	jQuery('#section_academic').ajaxSubmit();
	    });

	    $("#save-button-workex").click(function(){
	    	jQuery('#section_workex').ajaxSubmit();
	    });

	    $("#save-button-refree").click(function(){
	    	jQuery('#section_reference').ajaxSubmit();
	    });

	    $("#save-button-score").click(function(){
	    	jQuery('#section_personal').ajaxSubmit();
	    });

	    $("#save-button-doc").click(function(){
	    	jQuery('#section_scores').ajaxSubmit();
	    });


	    $("#continue-button-personal").click(function(){
	    	jQuery('#section_docs').ajaxSubmit({
                beforeSubmit:function(){ 
					// $('#register-button').attr('disabled', 'disabled');
				},
				success:function(responseText, statusText, xhr, $form){ 
					if($( "#section_personal" ).valid()) {
						personalstatus = true;
			    		$("label[for='sky-tab1']").css('background-color', '#26C281');
			    	} else {
			    		$("label[for='sky-tab1']").css('background-color', '#F22613');
			    		personalstatus = false;
			    	}
			    	$("#sky-tab2").prop("checked", true);
			    	$("body").scrollTop(0);

			    	changeSectionStatus();
				},
		    });
	    });
	    
	    $("#continue-button-contact").click(function(){
	    	var section_contact = $('#section_contact');
	    	var disabled;
	    	jQuery('#section_contact').ajaxSubmit({
                beforeSubmit:function(){ 
					disabled = section_contact.find(':input:disabled').removeAttr('disabled');
				},
				success:function(responseText, statusText, xhr, $form){ 
					disabled.attr('disabled','disabled');
					if($( "#section_contact" ).valid()) {
						contactstatus = true;
			    		$("label[for='sky-tab2']").css('background-color', '#26C281');
			    	} else {
			    		$("label[for='sky-tab2']").css('background-color', '#F22613');
			    		contactstatus = false;
			    	}
			    	$("#sky-tab3").prop("checked", true);
			    	$("body").scrollTop(0);

			    	changeSectionStatus();
				},
		    });
	    	
	    });

	    $("#back-button-contact").click(function(){
	    	$("#sky-tab1").prop("checked", true);
	    	$("body").scrollTop(0);
	    });

	    $("#continue-button-academic").click(function(){
	    	var section_academic = $('#section_academic');
	    	var disabled;
	    	jQuery('#section_academic').ajaxSubmit({
                beforeSubmit:function(){ 
					disabled = section_academic.find(':input:disabled').removeAttr('disabled');
				},
				success:function(responseText, statusText, xhr, $form){ 
					disabled.attr('disabled','disabled');
					if($( "#section_academic" ).valid()) {
						academicestatus = true;
			    		$("label[for='sky-tab3']").css('background-color', '#26C281');
			    	} else {
			    		$("label[for='sky-tab3']").css('background-color', '#F22613');
			    		academicestatus = false;
			    	}
			    	$("#sky-tab4").prop("checked", true);
			    	$("body").scrollTop(0);

			    	changeSectionStatus();
				},
		    });
	    	
	    });

	    $("#back-button-academic").click(function(){
	    	$("#sky-tab2").prop("checked", true);
	    	$("body").scrollTop(0);
	    });

	    $("#continue-button-workex").click(function(){
	    	var section_workex = $('#section_workex');
	    	var disabled;
	    	jQuery('#section_workex').ajaxSubmit({
                beforeSubmit:function(){ 
					disabled = section_workex.find(':input:disabled').removeAttr('disabled');
				},
				success:function(responseText, statusText, xhr, $form){ 
					
					disabled.attr('disabled','disabled');
					if($( "#section_workex" ).valid()) {
						workexstatus = true;
			    		$("label[for='sky-tab4']").css('background-color', '#26C281');
			    	} else {
			    		$("label[for='sky-tab4']").css('background-color', '#F22613');
			    		workexstatus = false;
			    	}
			    	$("#sky-tab5").prop("checked", true);
			    	$("body").scrollTop(0);

			    	changeSectionStatus();
				},
		    });
	    	
	    });

	    $("#back-button-workex").click(function(){
	    	$("#sky-tab3").prop("checked", true);
	    	$("body").scrollTop(0);
	    });

	    $("#continue-button-refree").click(function(){
	    	jQuery('#section_reference').ajaxSubmit({
                beforeSubmit:function(){ 
					// $('#register-button').attr('disabled', 'disabled');
				},
				success:function(responseText, statusText, xhr, $form){ 
					if($( "#section_reference" ).valid()) {
						refreestatus = true;
			    		$("label[for='sky-tab5']").css('background-color', '#26C281');
			    	} else {
			    		$("label[for='sky-tab5']").css('background-color', '#F22613');
			    		refreestatus = false;
			    	}
			    	$("#sky-tab6").prop("checked", true);
			    	$("body").scrollTop(0);

			    	changeSectionStatus();
				},
			});
	    });

	    $("#back-button-refree").click(function(){
	    	$("#sky-tab4").prop("checked", true);
	    	$("body").scrollTop(0);
	    });

	    $("#continue-button-score").click(function(){
	    	jQuery('#section_scores').ajaxSubmit({
                beforeSubmit:function(){ 
					// $('#register-button').attr('disabled', 'disabled');
				},
				success:function(responseText, statusText, xhr, $form){ 
					if($( "#section_scores" ).valid()) {
			    		var isCatSelected = false;
			    		$('input[name="testappearing[]"]:checked').each(function() {
			    			if(this.value == 'CAT') {
			    				isCatSelected = true;
			    			}
						});
			    		if(isCatSelected) {
			    			if(catValid) {
			    				scorestatus = true;
			    				$("label[for='sky-tab6']").css('background-color', '#26C281');
			    				$("#sky-tab7").prop("checked", true);
			    				$("body").scrollTop(0);
			    			} else {
			    				$("label[for='sky-tab6']").css('background-color', '#F22613');
			    				$(".modal-cat, .overlay").fadeIn();
			    				if(isValid(applicantdata[8])){
								    $('#window_cat').loadJSON(applicantdata[8]);
								}
				    			scorestatus = false;
			    			}
			    		} else {
			    			scorestatus = true;
			    			$("label[for='sky-tab6']").css('background-color', '#26C281');
			    			$("#sky-tab7").prop("checked", true);
			    			$("body").scrollTop(0);
			    		}

			    	} else {
			    		$("label[for='sky-tab6']").css('background-color', '#F22613');
			    		$("#sky-tab7").prop("checked", true);
			    		$("body").scrollTop(0);

			    		scorestatus = false;
			    	}

			    	changeSectionStatus();
				},
			});
	    	
	    	
	    });

	    $("#back-button-score").click(function(){
	    	$("#sky-tab5").prop("checked", true);
	    	$("body").scrollTop(0);
	    });

	    $("#cat-save-button").click(function(){
	    	jQuery('#window_cat').ajaxSubmit({
                beforeSubmit:function(){ 

				},
				success:function(responseText, statusText, xhr, $form){ 
					if($( "#window_cat" ).valid()) {
			    		catValid = true;
			    	} else {
			    		catValid = false;
			    	}

			    	changeSectionStatus();
				},
		    });

		});;

		$("#gre-save-button").click(function(){
	    	jQuery('#window_gre').ajaxSubmit({
                beforeSubmit:function(){ 

				},
				success:function(responseText, statusText, xhr, $form){ 
					if($( "#window_gre" ).valid()) {
			    		
			    	} else {

			    	}

			    	changeSectionStatus();
				},
		    });

		});

		$("#gmat-save-button").click(function(){
	    	jQuery('#window_gmat').ajaxSubmit({
                beforeSubmit:function(){ 

				},
				success:function(responseText, statusText, xhr, $form){ 
					if($( "#window_gmat" ).valid()) {
			    		
			    	} else {

			    	}

			    	changeSectionStatus();
				},
		    });

		});

	    $("#continue-button-doc").click(function(){
	    	// $("#sky-tab8").prop("checked", true);
	    	// $("body").scrollTop(0);

	    	jQuery('#section_docs').ajaxSubmit({
                beforeSubmit:function(){ 
                	$.blockUI();
				},
				success:function(responseText, statusText, xhr, $form){
					$.unblockUI();
					
			    	if($( "#section_docs" ).valid()) {
			    		$("label[for='sky-tab7']").css('background-color', '#26C281');
			    		docstatus = true;
			    	} else {
			    		$("label[for='sky-tab7']").css('background-color', '#F22613');
			    		docstatus = false;
			    	}

			    	if(responseText.length > 5) {
			    		if(responseText.indexOf('login') < -1) {
			    			alert(responseText);
			    		}
						
						$("label[for='sky-tab7']").css('background-color', '#F22613');
			    		docstatus = false;
					}

					changeSectionStatus();
				},
				error:function() {
					$.unblockUI();
				}
			});

	    	if($( "#section_personal" ).valid()) {
	    		$("label[for='sky-tab1']").css('background-color', '#26C281');
	    		personalstatus = true;
	    	} else {
	    		$("label[for='sky-tab1']").css('background-color', '#F22613');
	    		personalstatus = false;
	    	}

	    	if($( "#section_contact" ).valid()) {
	    		$("label[for='sky-tab2']").css('background-color', '#26C281');
	    		contactstatus = true;
	    	} else {
	    		$("label[for='sky-tab2']").css('background-color', '#F22613');
	    		contactstatus = false;
	    	}

	    	if($( "#section_academic" ).valid()) {
	    		$("label[for='sky-tab3']").css('background-color', '#26C281');
	    		academicestatus = true;
	    	} else {
	    		$("label[for='sky-tab3']").css('background-color', '#F22613');
	    		academicestatus = false;
	    	}

	    	if($( "#section_workex" ).valid()) {
	    		$("label[for='sky-tab4']").css('background-color', '#26C281');
	    		workexstatus = true;
	    	} else {
	    		$("label[for='sky-tab4']").css('background-color', '#F22613');
	    		workexstatus = false;
	    	}

	    	if($( "#section_reference" ).valid()) {
	    		$("label[for='sky-tab5']").css('background-color', '#26C281');
	    		refreestatus = true;
	    	} else {
	    		$("label[for='sky-tab5']").css('background-color', '#F22613');
	    		refreestatus = false;
	    	}

	    	if($( "#section_scores" ).valid()) {
	    		var isCatSelected = false;
	    		$('input[name="testappearing[]"]:checked').each(function() {
	    			if(this.value == 'CAT') {
	    				isCatSelected = true;
	    			}
				});
	    		if(isCatSelected) {
	    			if(catValid) {
	    				scorestatus = true;
	    				$("label[for='sky-tab6']").css('background-color', '#26C281');
	    				$("#sky-tab7").prop("checked", true);
	    				$("body").scrollTop(0);
	    			} else {
	    				$("label[for='sky-tab6']").css('background-color', '#F22613');
		    			scorestatus = false;
	    			}
	    		} else {
	    			scorestatus = true;
	    			$("label[for='sky-tab6']").css('background-color', '#26C281');
	    			$("#sky-tab7").prop("checked", true);
	    			$("body").scrollTop(0);
	    		}

	    	} else {
	    		$("label[for='sky-tab6']").css('background-color', '#F22613');
	    		$("#sky-tab7").prop("checked", true);
	    		$("body").scrollTop(0);

	    		scorestatus = false;
	    	}

	    	if(personalstatus && contactstatus && academicestatus && workexstatus && refreestatus && scorestatus && docstatus) {
	    		isApplicationValid = true;
	    		$("#sky-tab8").prop("checked", true);
	    		$("body").scrollTop(0);
	    	} else {
	    		isApplicationValid = false;
	    	}

	    	changeSectionStatus();

	    });

	    $("#back-button-doc").click(function(){
	    	$("#sky-tab6").prop("checked", true);
	    	$("body").scrollTop(0);
	    });

	    $("#continue-button-payment").click(function(){
	    	jQuery('#section_payment').ajaxSubmit({
                beforeSubmit:function(){ 

				},
				success:function(responseText, statusText, xhr, $form){ 
					if($( "#section_payment" ).valid()) {
						$("label[for='sky-tab8']").css('background-color', '#26C281');
				        if ($('input[name=paymentmode]:checked', '#section_payment').val() == 'ddbanktransfer') {
				        	$('#demanddraft-container').css('display', 'block');
				        }
				        else{
				        	$('#demanddraft-container').css('display', 'none');
					    	window.open('http://jbims.edu/admission/payment/TestSsl.php', '_self');
					    	$.blockUI();
				        }
					} else {
						$("label[for='sky-tab8']").css('background-color', '#F22613');
					}
				},
		    });

		});

		 $.ajax({ 
		    url:'../php/processor-populate.php',
		    type:"post",
		    beforeSend: function(){
		    	$.blockUI(); 
		    },
		    success:function(data){
		    	if(isValid(data)) {
		    		applicantdata = JSON.parse(data);
		    		console.log(applicantdata);
			    	if(isValid(applicantdata[0])){
			    		$('#section_personal').loadJSON(applicantdata[0]);
			    	}
			    	if(isValid(applicantdata[1])){
			    		$('#section_contact').loadJSON(applicantdata[1]);
			    	}
			    	if(isValid(applicantdata[2])){
			    		$('#section_academic').loadJSON(applicantdata[2]);
			    	}
			    	if(isValid(applicantdata[3])){
			    		$('#section_workex').loadJSON(applicantdata[3]);
			    	}
			    	if(isValid(applicantdata[4])){
			    		$('#section_reference').loadJSON(applicantdata[4]);
			    	}
			    	if(isValid(applicantdata[5])){
			    		$('#section_scores').loadJSON(applicantdata[5]);
			    		if(applicantdata[5].testappearing.indexOf("CAT") > -1) {
			    			$(":checkbox[name='testappearing[]'][id='cattest']").attr('checked', true);
			    		}
			    		if(applicantdata[5].testappearing.indexOf("CET") > -1) {
			    			$(":checkbox[name='testappearing[]'][id='cettest']").attr('checked', true);
			    		}
			    	}
			    	if(isValid(applicantdata[6])){
			    		$('#section_docs').loadJSON(applicantdata[6]);
			    	}
			    	if(isValid(applicantdata[7])){
			    		$('#section_payment').loadJSON(applicantdata[7]);
			    	}

			    	$.unblockUI();
		    	}
		    	
		    	// $("ul :input").attr("disabled", true);
		    	// $("ul :button").attr("disabled", true);
		    },
		    error: function(xhr,status,error) {
		    	$.unblockUI();
		    }
		  });


		 function isValid(object) {
		 	if(object == undefined || object == null || object.length == 0) {
		 		return false;
		 	} else {
		 		return true;
		 	}
		 }

		 function changeSectionStatus() {
		 	$.ajax({ 
		    url:'../php/processor-status.php',
		    type:"post",
		    data: {
		    	personalstatus: personalstatus,
		    	contactstatus: contactstatus,
		    	academicestatus: academicestatus,
		    	workexstatus: workexstatus,
		    	refreestatus: refreestatus,
		    	scorestatus: scorestatus,
		    	docstatus: docstatus
		    },
		    beforeSend: function(){

		    },
		    success:function(data){

		    }
		});

});