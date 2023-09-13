/**
 * This file lets you connect your different backend services to Monster UI and
 * exposes other settings like whitelabeling that can be set for the entire UI.
 *
 * This minimal, working example is designed to get you up and running in no
 * time when Monster UI is installed on the same server running Kazoo and the
 * APIs are accessible at the default location (`:8000/v2/`).
 *
 * If that is not the case, you will need to hook up your Kazoo server with the
 * `api.'default'` property and you should be good to go.
 *
 * For a full list and description of configurable options, head over to:
 * https://docs.2600hz.com/ui/docs/configuration/
 */
define({
	whitelabel: {
		companyName: 'SimpleVoIP',
		applicationTitle: 'Monster UI',
		callReportEmail: 'support@simplevoip.us',
		disableNumbersFeatures: false,
		hide_powered: true,
		hideAppStore: false,
		hideBuyNumbers: true,
		hideNewAccountCreation: true,
		hide_port: true,
		brandColor: '#000000',
		logoPath: 'https://portal.simplevoip.us:8443/v2/whitelabel/portal.simplevoip.us/logo',
		nav: {
			help: 'http://simplevoip.editme.com/'
		},
		port: {
			loa: 'http://ui.zswitch.net/Editable.LOA.Form.pdf',
			resporg: 'http://ui.zswitch.net/Editable.Resporg.Form.pdf'
		},
		e911_readonly: true
	},
	api: {
		'default': 'https://portal.simplevoip.us:8443/v2/', // PRODUCTION
		// 'default': 'https://sandbox.2600hz.com:8443/v2/', // SANDBOX
		simplevoip: 'https://glacier.simplevoip.us/',
		// simplevoip: 'https://staging.simplevoip.us/', // STAGING
		// simplevoip: 'https://admin.simplevoip.local/', // LOCAL
		sv_ajax: 'https://ajax.simplevoip.us/'
		// sv_ajax: 'https://ajax-staging.simplevoip.us/' // STAGING
		// sv_ajax: 'https://ajax.simplevoip.local/' // LOCAL
	}
});
