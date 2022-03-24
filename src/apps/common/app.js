define(function(require) {
	var monster = require('monster');

	var appSubmodules = [
		'accountAncestors',
		'accountBrowser',
		'appSelector',
		'buyNumbers',
		'callerId',
		'carrierSelector',
		'chooseModel',
		'conferenceViewer',
		'csvUploader',
		'deleteSmartUser',
		'dragableUploads',
		'e911',
		'extensionTools',
		'failover',
		'mediaSelect',
		'monsterListing',
		'navigationWizard',
		'numberFeaturesMenu',
		'numberPrepend',
		'numberRenameCarrier',
		'numberSelector',
		'numberMessaging',
		'numbers',
		'portListing',
		'portWizard',
		'ringingDurationControl',
		'servicePlanDetails',
		'servicePlanItemEditor',
		'storagePlanManager',
		'storageSelector',
		'webphone'
	];

	require(_.map(appSubmodules, function(name) {
		return './submodules/' + name + '/' + name;
	}));

	var app = {
		name: 'common',

		subModules: appSubmodules,

		css: [ 'app' ],

		i18n: {
			'de-DE': { customCss: false },
			'en-US': { customCss: false },
			'fr-FR': { customCss: false },
			'ru-RU': { customCss: false }
		},

		requests: {
			'sv.numbers.get': {
				apiRoot: monster.config.api.simplevoip,
				url: 'monster/api_functions.php?m=numbers&accountId={accountId}&phoneNumber={phoneNumber}',
				verb: 'GET',
				removeHeaders: [
					'X-Auth-Token'
				]
			},
			'sv.numbers.update': {
				apiRoot: monster.config.api.simplevoip,
				url: 'monster/api_functions.php?m=numbers&accountId={accountId}&phoneNumber={phoneNumber}',
				verb: 'POST',
				removeHeaders: [
					'X-Auth-Token'
				]
			},
			'sv.numbers.create': {
				apiRoot: monster.config.api.simplevoip,
				url: 'monster/api_functions.php?m=numbers&accountId={accountId}&phoneNumber={phoneNumber}',
				verb: 'PUT',
				removeHeaders: [
					'X-Auth-Token'
				]
			},
			'sv.callerid.update': {
				apiRoot: monster.config.api.simplevoip,
				url: 'monster/api_functions.php?m=callerid&accountId={accountId}&phoneNumber={phoneNumber}',
				verb: 'POST',
				removeHeaders: [
					'X-Auth-Token'
				]
			}
		},
		subscribe: {},

		load: function(callback) {
			var self = this;

			self.initApp(function() {
				callback && callback(self);
			});
		},

		initApp: function(callback) {
			var self = this;

			monster.pub('auth.initApp', {
				app: self,
				callback: callback
			});
		}
	};

	return app;
});
