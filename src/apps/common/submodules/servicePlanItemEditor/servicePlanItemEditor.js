define(function(require) {
	return {
		subscribe: {
			'common.servicePlanItemEditor.render': 'servicePlanItemEditorRender'
		},

		/**
		 * Store getter
		 * @param  {Array|String} [path]
		 * @param  {*} [defaultValue]
		 * @return {*}
		 */
		servicePlanItemEditorGetStore: function(path, defaultValue) {
			var self = this,
				store = ['_store', 'servicePlanItemEditor'];
			return _.get(
				self,
				_.isUndefined(path)
					? store
					: _.flatten([store, _.isString(path) ? path.split('.') : path]),
				defaultValue
			);
		},

		/**
		 * Store setter
		 * @param  {Array|String} [path]
		 * @param  {*} [value]
		 */
		servicePlanItemEditorSetStore: function(path, value) {
			var self = this,
				hasValue = _.toArray(arguments).length === 2,
				store = ['_store', 'servicePlanItemEditor'];
			_.set(
				self,
				hasValue
					? _.flatten([store, _.isString(path) ? path.split('.') : path])
					: store,
				hasValue ? value : path
			);
		},

		/**
		 * @param  {Object} args
		 * @param  {String} args.caterogy
		 * @param  {String} args.item
		 * @param  {Object} [args.data={}]
		 * @param  {Object} [args.editable]
		 * @param  {Function} args.callback
		 */
		servicePlanItemEditorRender: function(args) {
		}
	};
});
