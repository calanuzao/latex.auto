"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const obsidian_1 = require("obsidian");
const view_1 = require("@codemirror/view");
class LatexAutoCompletionPlugin extends obsidian_1.Plugin {
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Loading LaTeX Auto-Completion Plugin');
            // Register the editor extension
            this.registerEditorExtension([
                view_1.ViewPlugin.fromClass(class {
                    constructor(view) {
                        // Initialize your auto-completion here
                    }
                    update(update) {
                        if (update.docChanged) {
                            // Handle document changes here
                            // This is where you'll implement your LaTeX auto-completion logic
                        }
                    }
                })
            ]);
        });
    }
    onunload() {
        console.log('Unloading LaTeX Auto-Completion Plugin');
    }
}
exports.default = LatexAutoCompletionPlugin;
