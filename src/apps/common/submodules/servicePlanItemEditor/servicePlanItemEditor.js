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
			var self = this;

			self.servicePlanItemEditorSetStore({
				/**
				 * Map of editable fields per items for `category`.
				 * @type {Object}
				 *
				 * This map is populated either on publish or lazily on first render.
				 *
				 * We need to hold on to the entire list of editable items because when _all is
				 * edited, it is possible to exclude any of those items.
				 */
				editable: _.get(
					args,
					'editable',
					self.servicePlanItemEditorGetStore('editable', undefined)
				),

				/**
				 * Holds the service plan item's category,
				 * @type {String}
				 */
				category: _.get(args, 'category'),

				/**
				 * Holds the service plan item's identifier
				 * @type {String}
				 */
				item: _.get(args, 'item'),
				/**
				 * Holds the service plan item being edited.
				 * @type {Object}
				 */
				data: _.get(args, 'data', {}),

				/**
				 * Holds the original service plan item.
				 * @type {Object}
				 */
				originalData: _
					.chain(args)
					.get('data', {})
					.cloneDeep()
					.value(),

				/**
				 * Describes which fields are available/selected for the service plan item.
				 * @type {Object}
				 */
				fields: {
					available: [],
					selected: []
				},

				/**
				 * Holds the onSave callback.
				 * @type {Function}
				 */
				callback: _.get(args, 'callback')
			});

			monster.waterfall([
				function maybeFetchEditableFields(callback) {
					if (!_.isUndefined(self.servicePlanItemEditorGetStore('editable'))) {
						return callback(null);
					}
					self.servicePlanItemEditorRequestListEditable({
						success: function(editable) {
							self.servicePlanItemEditorSetStore(
								'editable',
								self.servicePlanItemEditorGetStore('category')
							);
							callback(null);
						}
					});
				}
			], function() {
				self.servicePlanItemEditorUpdateStoredFields();

				console.log(
					self.servicePlanItemEditorGetStore()
				);
			});
		},

		/**
		 * @param  {Object} [args.data.accountId]
		 */
		servicePlanItemEditorRequestListEditable: function(args) {
			var self = this;

			self.callApi({
				resource: 'services.listEditable',
				data: _.merge({
					accountId: self.accountId
				}, args.data),
				success: function(data, status) {
					_.has(args, 'success') && args.success(data.data);
				},
				error: function(parsedError) {
					_.has(args, 'error') && args.error(parsedError);
				}
			});
		}
	};
});
