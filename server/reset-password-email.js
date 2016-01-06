 Meteor.startup(function () {
        Accounts.emailTemplates.resetPassword.text = function(user, url){
            var token = url.substring(url.lastIndexOf('/')+1, url.length);
            var newUrl = Meteor.absoluteUrl('reset/' + token);
            var str = 'Hello,\n';
                str+= 'To reset your password, please click follow link...\n';
                str+= newUrl;
            return str;
        }
    });

