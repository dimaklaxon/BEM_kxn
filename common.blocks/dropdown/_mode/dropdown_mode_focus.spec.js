modules.define('spec', ['spec__utils', 'dropdown', 'link'], function(provide, helper) {

    describe('dropdown_mode_focus', function() {
        var dropdown,
            bemjson = {
                block: 'dropdown',
                mods: { switcher: 'link', mode: 'focus' },
                switcher: 'dropdown link',
                popup: 'popup'
            };

        beforeEach(function() {
            dropdown = helper.buildBlock('dropdown', bemjson);
        });

        afterEach(function() {
            helper.destruct(dropdown);
        });

        it('should add mod "opened" on focus', function() {
            dropdown.hasMod('opened').should.be.false;
            dropdown.getSwitcher().domElem.focus();
            dropdown.hasMod('opened').should.be.true;
        });

        it('should remove mod "opened" on blur on popup', function() {
            dropdown.hasMod('opened').should.be.false;
            dropdown.getSwitcher().domElem.focus();
            dropdown.getSwitcher().hasMod('focused').should.be.true;
            dropdown.getSwitcher().domElem.blur();
            dropdown.hasMod('opened').should.be.false;
        });
    });

    provide();

});
