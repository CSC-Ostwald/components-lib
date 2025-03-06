import js from '@eslint/js';
import prettierPlugin from "eslint-config-prettier";
import importsPlugin from 'eslint-plugin-import';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import ts from 'typescript-eslint';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
    js.configs.recommended,
    ...ts.configs.recommended,
    {
        files: [
            'src/**/*.ts',
            'src/**/*.tsx',
            'src/**/*.js',
            'src/**/*.jsx',
            'packages/**/*.ts',
            'packages/**/*.tsx',
            'packages/**/*.js',
            'packages/**/*.jsx',
        ],
        languageOptions: {
            parser: ts.parser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            'react-hooks': reactHooksPlugin,
            prettier: prettierPlugin,
            import: importsPlugin,
        },
        rules: {
            'no-nested-ternary': 'error',
            'no-undef': 'off',
            '@typescript-eslint/prefer-for-of': 'warn',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            '@typescript-eslint/no-empty-function': ['warn', { allow: [] }],
            '@typescript-eslint/consistent-type-definitions': 'warn',
            '@typescript-eslint/consistent-type-imports': 'warn',
            '@typescript-eslint/no-empty-object-type': 'off',
            '@typescript-eslint/no-inferrable-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-namespace': 'off',
            '@typescript-eslint/no-empty-interface': 'off',
            '@typescript-eslint/ban-ts-comment': 'off',
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "error",
            'import/no-duplicates': [
                'error',
                {
                    'prefer-inline': true,
                },
            ],
            'import/no-mutable-exports': 'error',
        },
    },
];
