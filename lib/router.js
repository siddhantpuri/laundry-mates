Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return [Meteor.subscribe('posts'), Meteor.subscribe('lounges'),
                             Meteor.subscribe('requests'), Meteor.subscribe('chapters'),
                             Meteor.subscribe('allUsers')/*,Meteor.subscribe('emails')*/
                             ,Meteor.subscribe('images'), Meteor.subscribe('files')]; }
});


Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() { return Posts.findOne(this.params._id); }
});


Router.onBeforeAction('dataNotFound', {only: 'upcoming'});
Router.route('/loungebox', {name: 'loungebox'});
Router.route('/my-upcoming-lounges', {name: 'upcoming'});
Router.route('/my-settings', {name:'settings'});
Router.route('/my-past-lounges', {name:'pastLounges'});
Router.route('/create-a-lounge', {name:'createLounge'});
Router.route('/doatl', {name:'doatl'});
Router.route('/logout', {name:'logout'});

Router.route('/my-profile', {
waitOn: function() {
return [Meteor.subscribe('images')];
},
name: 'accountInfo'
});

Router.route('subscribers', {
  path: '/subscribers',
  template: 'subscribers',
  onBeforeAction: function(){
    Session.set( 'currentRoute', 'subscribers' );
    this.next();
  }
});


Router.map(function(){
	// Login-Home
	this.route('login', {
	    layoutTemplate: 'form_layout',
		path: '/',
		template: 'login'
	});

	// Register
	this.route('register', {
	    layoutTemplate: 'form_layout',
		path: '/register',
		template: 'register'
	});

	this.route('dashboard', {
		path: '/dashboard',
		template: 'upcoming',
		onBeforeAction: function(){
			if(Meteor.user() == null){
				Router.go('/');
			}
			this.next();
		}
	});
	
	this.route('permissions', {
		path: '/my-permissions',
		template: 'permissions',
		onBeforeAction: function(){
			if(Meteor.user() == null){
				Router.go('/');
			}
			this.next();
		}
	});
	
	
});






