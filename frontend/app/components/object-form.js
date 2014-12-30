import Ember from 'ember';

/*
 * Form for an object. Accepts:
 * - for: object the form is for
 * - name: name of the form (e.g. "new-comment")
 * - buttonLabel: label for the submit button
 * */
export default Ember.Component.extend({
  tagName: 'form',
  classNameBindings: ['loading', 'cssClass'],

  /* Properties */
  // Defaults
  buttonLabel: "Submit",
  // Computed
  loading: Ember.computed.alias('for.loading'),
  errors: Ember.computed.alias('for.errors'),
  cssClass: function() {
    if (this.get('action')) {
      return 'form-' + this.get('action').dasherize();
    } else {
      return '';
    }
  }.property('action'),

  /* Browser events */
  /* Called when the browser submits a 'submit' event (see http://emberjs.com/api/classes/Ember.View.html#toc_method-implementation) */
  submit: function() {
    this.sendAction();
    // `return false` needed otherwise it's bubbled up
    return false;
  },
});
