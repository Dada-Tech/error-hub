module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended',
        'stylelint-config-recommended-scss',
    ],
    plugins: ['stylelint-order', 'stylelint-scss'],
    rules: {
        // Add specific Stylelint rules if needed
        'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
    },
};
