import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gh-instance-host', 'Integration | Component | gh instance host', {
    integration: true
});

test('it renders', function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(hbs`{{gh-instance-host}}`);
    assert.equal(this.$().text().trim(), '');
});
