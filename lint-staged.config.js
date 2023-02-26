module.exports = {
    '*.{js,json,md,mdx,html,css,scss,jsx}': 'prettier --write',
    './src/**/*.{js,jsx,ts,tsx,json,md}': 'eslint --fix'
}
