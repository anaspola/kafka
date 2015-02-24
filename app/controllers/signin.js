import Ember from 'ember';

export default Ember.Controller.extend({
	error: { //error messages
		hasError : false, msg : ""
	},
	actions: {
		authenticate: function(){
			console.log("sdafffffffffffffa");
			var username = Ember.$.trim(this.get('username')), 
			password = this.get('password');
			console.log(this.get('username'));
			console.log(this.get('password'));
        if(Ember.isEmpty(username)){ //empty username
        	this.set('error.msg',"Enter an email address to log in.");
        	Ember.$("input[name=username]").focus();
        	this.validationFailed();          
        }else if(Ember.isEmpty(password)){ //empty password
        	this.set('error.msg',"Enter your password to log in.");
        	Ember.$("input[name=password]").focus();
        	this.validationFailed();          
        }else if(!this.validateEmail(username)){ //invalid email address
        	this.set('error.msg',"Enter your full email address, including everything after the \"@\" symbol. Also, the address can\'t include unconventional special characters or blank space.");
        	Ember.$("input[name=username]").focus();
        	this.validationFailed();          
        }else{
         // this.set('error.hasError',false); 
          //this.transitionToRoute('access.loading');

          var self=this,
          params = {
          	url: 'mghmiddleware/restservices/kafkaMonitor/login',
          	type: "POST",
          	async: true,
          	contentType: "application/json",
          	dataType:"json",
          	data: JSON.stringify({ email: username, password: password}),
          	success : function(response) {
          		console.log("success---");
          		console.log(response);
          		if (response.user.email && response.user.token) {
          			console.log('User Authenticated') ;                        
          			self.xhrsuccessful(response);
          		}
          		else {
          			self.xhrfailed(response);
          		}
          	},
          	error : function(response) {
          		console.log('Error in authentication') ;
          		console.log(response); 
                // self.xhrfailed(response.responseJSON);
            }
        };
        Ember.$.ajax(params);
    }
}
},
validationFailed: function(){
	this.set('error.hasError',true);
	try{
		this.transitionToRoute('todos');
	}
	catch(e){}
},
validateEmail: function(email) {
	var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return reg.test(email);
},
xhrsuccessful: function(obj){
	console.log("success");
	this.session.set('user_authentication_token', obj.user.token);
	this.session.set('user_id', obj.user.email);
  this.set('username',"");
  this.set('password',"");
  this.set('error.msg',"");
	try{
		this.transitionToRoute('groups');
	}
	catch(e){}
},
xhrfailed: function(obj){
	this.set('error.hasError',true);
	var msg = "Unexpected system error has occurred while processing the request.";
	this.set('error.msg',msg);
	if(obj && obj.error && obj.error.code !== ''){
		switch (obj.error.code) {
			case "OAPI-1028":
			msg = "Invalid email address or password. Please check your entry and try again.";
			break;
			case "OAPI-1029": 
			msg = "Sorry, only students with access can sign in here.";
			break;
             case "RMSDOWN": //TODO handle case for rms down
             msg = "Unable to reach the authentication system, please try again later.";
             break;                            
         }
     }
 }
});