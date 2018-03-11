$('#submit_button').click(function() {
    $('#loginform').validate({
        rules: {
            login: {
                required: true,
                minlength: 4,
                maxlength:16
            },
            password: {
                required: true,
                minlength: 6,
                maxlength:16
            }
        },
        messages: {
            login: {
                required: 'This field is required!',
                minlength: 'Login must be at least 4 characters',
                maxlength: 'Login must be at most 16 characters'
            },
            password: {
                required: 'This field is required!',
                minlength: 'Password must be at least 4 characters',
                maxlength: 'Password must be at most 16 characters'
            }
        }
    });
});