var emailregex = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
var alphabetsregex = "^[A-z]+$";

jQuery.noConflict()(function($) {
    $(document).ready(function() {

        $("input[name=mobilenumber]").ForceNumericOnly();
        $("input[name=phonenumber]").ForceNumericOnly();
        $("input[name=emergencymobile]").ForceNumericOnly();
        $("input[name=annualrenumeration]").ForceNumericOnly();
        $("input[name=totalworkex]").ForceNumericOnly();
        $("input[name=refreecontact]").ForceNumericOnly();
        $("input[name=paymentamount]").ForceNumericOnly();


        $("input[name=firstname]").ForceAlphabestOnly();
        $("input[name=middlename]").ForceAlphabestOnly();
        $("input[name=lastname]").ForceAlphabestOnly();
        $("input[name=refreename]").ForceAlphabestOnly();


        $("#section_personal").validate({
            rules: {
                firstname: {
                    required: true,
                    regexalpha: alphabetsregex
                },
                lastname: {
                    required: true,
                    regexalpha: alphabetsregex
                },
                middlename: {
                    regexalpha: alphabetsregex
                },
            },
            errorPlacement: function(error, element) {
                $(element).tooltipster('update', $(error).text());

            },
            success: function(label, element) {

            }
        });

        // the following method must come AFTER .validate()
        $('#section_personal .itrequired').each(function() {
            $(this).rules('add', {
                required: true,
            });
        });



        $("#section_contact").validate({
            rules: {
                email: {
                    required: true,
                    regexemail: emailregex
                },
                mobilenumber: {
                    required: true,
                    minlength: 10
                },
                emergencymobile: {
                    minlength: 10
                }
            },
            errorPlacement: function(error, element) {
                $(element).tooltipster('update', $(error).text());
            },
            success: function(label, element) {

            },
            submitHandler: function(form) {

            }
        });

        // the following method must come AFTER .validate()
        $('#section_contact .itrequired').each(function() {
            $(this).rules('add', {
                required: true,
            });
        });

        $("#section_academic").validate({

            rules: {
                tenthaggregate: {
                    required: true,
                    max: 100
                },
                twelfthaggregate: {
                    required: true,
                    max: 100
                },
                graduationpercentage: {
                    required: true,
                    max: 100
                },
                graduationgpaobtained: {
                    required: true,
                    number: true
                },
                graduationgpamax: {
                    required: true,
                    number: true
                }
            },

            errorPlacement: function(error, element) {
                $(element).tooltipster('update', $(error).text());
            },
            success: function(label, element) {

            },
            submitHandler: function(form) {

            }
        });

        // the following method must come AFTER .validate()
        $('#section_academic .itrequired').each(function() {
            $(this).rules('add', {
                required: true,
            });
        });

        $("#section_workex").validate({

            errorPlacement: function(error, element) {
                $(element).tooltipster('update', $(error).text());
            },
            success: function(label, element) {

            },
            submitHandler: function(form) {

            }
        });

        // the following method must come AFTER .validate()
        $('#section_workex .itrequired').each(function() {
            $(this).rules('add', {
                required: true,
            });
        });

        $("#section_reference").validate({

            rules: {
                refreeemail: {
                    required: true,
                    regexemail: emailregex
                }
            },

            errorPlacement: function(error, element) {
                $(element).tooltipster('update', $(error).text());
            },
            success: function(label, element) {

            },
            submitHandler: function(form) {

            }
        });

        // the following method must come AFTER .validate()
        $('#section_reference .itrequired').each(function() {
            $(this).rules('add', {
                required: true,
            });
        });

        $("#section_scores").validate({

            errorPlacement: function(error, element) {

            },
            success: function(label, element) {

            },
            submitHandler: function(form) {

            }
        });

        // the following method must come AFTER .validate()
        $('#section_scores .itrequired').each(function() {
            $(this).rules('add', {
                required: true,
            });
        });

        $("#window_cat").validate({

            errorPlacement: function(error, element) {

            },
            success: function(label, element) {

            },
            submitHandler: function(form) {

            }
        });

        // the following method must come AFTER .validate()
        $('#window_cat .itrequired').each(function() {
            $(this).rules('add', {
                required: true,
            });
        });

        $("#window_cet").validate({

            errorPlacement: function(error, element) {

            },
            success: function(label, element) {

            },
            submitHandler: function(form) {

            }
        });

        // the following method must come AFTER .validate()
        $('#window_cet .itrequired').each(function() {
            $(this).rules('add', {
                required: true,
            });
        });


        $("#section_done_cet").validate({

            errorPlacement: function(error, element) {
                $(element).tooltipster('update', $(error).text());
            },
            success: function(label, element) {

            },
            submitHandler: function(form) {

            }
        });

        // the following method must come AFTER .validate()
        $('#section_done_cet .itrequired').each(function() {
            $(this).rules('add', {
                required: true,
            });
        });

        $("#window_gre").validate({

            errorPlacement: function(error, element) {

            },
            success: function(label, element) {

            },
            submitHandler: function(form) {

            }
        });

        // the following method must come AFTER .validate()
        $('#window_gre .itrequired').each(function() {
            $(this).rules('add', {
                required: true,
            });
        });

        $("#window_gmat").validate({

            errorPlacement: function(error, element) {

            },
            success: function(label, element) {

            },
            submitHandler: function(form) {

            }
        });

        // the following method must come AFTER .validate()
        $('#window_gmat .itrequired').each(function() {
            $(this).rules('add', {
                required: true,
            });
        });

        $("#section_docs").validate({

            errorPlacement: function(error, element) {

            },
            success: function(label, element) {

            },
            submitHandler: function(form) {

            }
        });

        // the following method must come AFTER .validate()
        $('#section_docs .itrequired').each(function() {
            $(this).rules('add', {
                required: true,
            });
        });

        $("#section_payment").validate({

            rules: {
                paymentemailid: {
                    required: true,
                    regexemail: emailregex
                }
            },

            errorPlacement: function(error, element) {
                $(element).tooltipster('update', $(error).text());

            },
            success: function(label, element) {

            }
        });

        // the following method must come AFTER .validate()
        $('#section_payment .itrequired').each(function() {
            $(this).rules('add', {
                required: true,
            });
        });

        $("#ddreference").validate({

            errorPlacement: function(error, element) {

            },
            success: function(label, element) {

            },
            submitHandler: function(form) {

            }
        });

        // the following method must come AFTER .validate()
        $('#ddreference .itrequired').each(function() {
            $(this).rules('add', {
                required: true,
            });
        });

    });

});

// Alphabets only control handler
jQuery.fn.ForceAlphabestOnly =
    function() {
        return this.each(function() {
            jQuery(this).keydown(function(e) {
                if ((e.which > 47 && e.which < 58) && (e.which != 32)) {
                    return false;
                }
            });
        });
    };

// Numeric only control handler
jQuery.fn.ForceNumericOnly =
    function() {
        return this.each(function() {
            jQuery(this).keydown(function(e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    return false;
                }
            });
        });
    };
