import { Editor, Plugin } from 'obsidian';
import * as fs from 'fs';
import * as path from 'path';

export default class AutoCompletion {
	private plugin: Plugin;
	private commands: string[] = [];

	constructor(plugin: Plugin) {
		this.plugin = plugin;
		this.loadCommands();
	}

	private loadCommands() {
		const filePath = path.join(this.plugin.manifest.dir || '', 'shared', 'latex-commands.json');
		const data = fs.readFileSync(filePath, 'utf8');
		this.commands = JSON.parse(data).commands;
	}

	registerAutoCompletion(cm: CodeMirror.Editor) {
		cm.on('inputRead', (cm: CodeMirror.Editor, change: CodeMirror.EditorChange) => {
			const cursor = cm.getCursor();
			const line = cm.getLine(cursor.line);
			const match = line.match(/\\[a-zA-Z]*$/);
			if (match) {
				this.showSuggestions(cm, match[0]);
			}
		});
	}

	private showSuggestions(cm: CodeMirror.Editor, prefix: string) {
		const filtered = this.commands.filter(cmd => cmd.startsWith(prefix));
		// Display suggestions in a dropdown list
		// ...existing code...
	}
}
