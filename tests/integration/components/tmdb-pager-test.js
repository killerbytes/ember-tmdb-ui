import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tmdb-pager', 'Integration | Component | tmdb pager', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tmdb-pager}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#tmdb-pager}}
      template block text
    {{/tmdb-pager}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
