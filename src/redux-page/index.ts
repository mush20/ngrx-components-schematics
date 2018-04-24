import { Rule, chain, mergeWith, apply, move, template, url } from '@angular-devkit/schematics';
import { normalize } from '@angular-devkit/core';
import { dasherize, classify } from '@angular-devkit/core/src/utils/strings';

interface ReduxPageOptions {
    path: string;
    name: string;
    sourceDir: string;
}

const stringUtils = { dasherize, classify };

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function reduxPage(options: ReduxPageOptions): Rule {

    options.path = options.path ? normalize(options.path) : options.path;

    const templateSource = apply(url('./files'), [
        template({
            ...stringUtils,
            ...options
        }),
        move(options.sourceDir)
    ]);

    return chain([
        mergeWith(templateSource)
    ]);
}
