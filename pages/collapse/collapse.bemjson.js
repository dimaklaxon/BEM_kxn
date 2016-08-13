({
    block: 'page',
    title: 'Collapse',
    mods: { theme: 'alfa-on-color' },
    head: [{ elem: 'css', url: 'collapse.min.css' }],
    scripts: [{ elem: 'js', url: 'collapse.min.js' }],
    content: [
        {
            block: 'example-section',
            title: 'Default',
            content: ['alfa-on-color', 'alfa-on-white'].map(function(theme) {
                return {
                    elem: 'col',
                    elemMods: { theme: theme },
                    content: {
                        elem: 'item',
                        content: {
                            block: 'collapse',
                            mods: { theme: theme },
                            expandedLabel: 'Скрыть подробности',
                            collapsedLabel: 'Подробнее',
                            content: ['Подробности...']
                        }
                    }
                };
            })
        }
    ]
});
