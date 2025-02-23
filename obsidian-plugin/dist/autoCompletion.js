"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class AutoCompletion {
    constructor(plugin) {
        this.commands = [];
        this.plugin = plugin;
        this.loadCommands();
    }
    loadCommands() {
        const filePath = path.join(this.plugin.manifest.dir || '', 'shared', 'latex-commands.json');
        const data = fs.readFileSync(filePath, 'utf8');
        this.commands = JSON.parse(data).commands;
    }
    registerAutoCompletion(cm) {
        cm.on('inputRead', (cm, change) => {
            const cursor = cm.getCursor();
            const line = cm.getLine(cursor.line);
            const match = line.match(/\\[a-zA-Z]*$/);
            if (match) {
                this.showSuggestions(cm, match[0]);
            }
        });
    }
    showSuggestions(cm, prefix) {
        const filtered = this.commands.filter(cmd => cmd.startsWith(prefix));
        // Display suggestions in a dropdown list
        // ...existing code...
    }
}
exports.default = AutoCompletion;
