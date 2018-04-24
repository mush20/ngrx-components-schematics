"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
const strings_1 = require("@angular-devkit/core/src/utils/strings");
const stringUtils = { dasherize: strings_1.dasherize, classify: strings_1.classify };
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
function reduxPage(options) {
    options.path = options.path ? core_1.normalize(options.path) : options.path;
    const templateSource = schematics_1.apply(schematics_1.url('./files'), [
        schematics_1.template(Object.assign({}, stringUtils, options)),
        schematics_1.move(options.sourceDir)
    ]);
    return schematics_1.chain([
        schematics_1.mergeWith(templateSource)
    ]);
}
exports.reduxPage = reduxPage;
//# sourceMappingURL=index.js.map