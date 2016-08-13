modules.define('collapse', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl(this.name, {

        onSetMod: {
            'js': {
                'inited': function() {
                    this.__base.apply(this, arguments);

                    var _this = this;

                    this._link = this.findBlockOn('link', { block: 'link', modName: 'pseudo', modVal: true });
                    this.bindTo('link', 'click', function() {
                        _this.toggleMod('expanded');
                    });

                    this.elem('content').css('height', 'auto');
                    this._height = this.elem('content').outerHeight(true);
                    this.elem('content').height(this.getMod('expanded') ? this._height : 0);
                }
            },
            'expanded': {
                'true': function() {
                    this.__base.apply(this, arguments);
                    this._link.elem('text').text(this.params.expandedLabel);
                    this.elem('content').height(this._height);
                },
                '': function() {
                    this.__base.apply(this, arguments);
                    this._link.elem('text').text(this.params.collapsedLabel);
                    this.elem('content').height(0);
                }
            }
        }

    }));
});
