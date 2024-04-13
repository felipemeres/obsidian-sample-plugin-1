import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting, Command } from 'obsidian';
import * as d3 from 'd3';

// Remember to rename these classes and interfaces!

interface MyPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default'
}

class SampleModal extends Modal {
	constructor(app: App) {
		super(app);
	}

	onOpen() {
		const { contentEl } = this;
		contentEl.setText('Woah oi querida!');
	}

	onClose() {
		const { contentEl } = this;
		contentEl.empty();
	}
}

class PieChartModal extends Modal {
	constructor(app: App) {
		super(app);
	}

	onOpen() {
		const { contentEl } = this;
		// code: Modal refactored so that only the pie chart appears without a box as a backdrop
		contentEl.addClass('pie-chart-modal');
		const data = [10, 20, 30, 40]; // Sample data
		const svg = d3.create("svg")
			.attr("width", 200)
			.attr("height", 200)
			.attr("viewBox", "-100 -100 200 200"); // Adjust viewBox for proper scaling and centering
		// <!-- code: make the pie a complete circle with multiple separations, making each one a different color -->
		const pie = d3.pie();
		const arc = d3.arc().innerRadius(0).outerRadius(100);

		svg.selectAll("path")
			.data(pie(data))
			.enter()
			.append("path")
			.attr("d", arc)
			.attr("fill", (d, i) => d3.interpolateRainbow(i / data.length)); // Use the rainbow color scale

		if (svg.node()) {
			contentEl.appendChild(svg.node());
		}
			.attr("d", arc)
			.attr("fill", (d, i) => d3.interpolateRainbow(i / data.length)); // Use the rainbow color scale

		const svgNode = svg.node();
		if (svgNode) {
			contentEl.appendChild(svgNode);
		}
		// code: Logic to render the pie chart is now included
	}

	onClose() {
		const { contentEl } = this;
		contentEl.empty();
	}
}
class SampleSettingTab extends PluginSettingTab {
	plugin: MyPlugin;

	constructor(app: App, plugin: MyPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Setting #1')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
	}
}

export default class MyPlugin extends Plugin {
	settings: MyPluginSettings;

	async onload() {
		await this.loadSettings();

		// This creates an icon in the left ribbon.
		const ribbonIconEl = this.addRibbonIcon('dice', 'Sample Plugin', (evt: MouseEvent) => {
			// Called when the user clicks the icon.
			new Notice('This is a notice!');
		});
		// Perform additional things with the ribbon
		ribbonIconEl.addClass('my-plugin-ribbon-class');

		// This adds a status bar item to the bottom of the app. Does not work on mobile apps.
		const statusBarItemEl = this.addStatusBarItem();
		statusBarItemEl.setText('Status Bar Text');

		// This adds a simple command that can be triggered anywhere
		this.addCommand({
			id: 'open-sample-modal-simple',
			name: 'Open sample modal (simple)',
			callback: () => {
				new SampleModal(this.app).open();
			}
		});
		// This adds an editor command that can perform some operation on the current editor instance
		this.addCommand({
			id: 'sample-editor-command',
			name: 'Sample editor command',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				console.log(editor.getSelection());
				editor.replaceSelection('Sample Editor Command');
			}
		});
		// This adds a complex command that can check whether the current state of the app allows execution of the command
		this.addCommand({
			id: 'open-sample-modal-complex',
			name: 'Open sample modal (complex)',
			checkCallback: (checking: boolean) => {
				// Conditions to check
				const markdownView = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (markdownView) {
					// If checking is true, we're simply "checking" if the command can be run.
					// If checking is false, then we want to actually perform the operation.
					if (!checking) {
						new SampleModal(this.app).open();
					}

					// This command will only show up in Command Palette when the check function returns true
					return true;
				}
			}
		});
		this.addCommand({
			id: 'open-feeling-wheel',
			name: 'Open Feeling Wheel',
			checkCallback: (checking: boolean) => {
				// Conditions to check
				const markdownView = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (markdownView) {
					// If checking is true, we're simply "checking" if the command can be run.
					// If checking is false, then we want to actually perform the operation.
					if (!checking) {
						new PieChartModal(this.app).open();
					}
					return true;
				}
			}
		});


		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new SampleSettingTab(this.app, this));

		// If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// Using this function will automatically remove the event listener when this plugin is disabled.
		this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
			console.log('click', evt);
		});

		// When registering intervals, this function will automatically clear the interval when the plugin is disabled.
		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}


	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

// Additional styles for the PieChartModal
.pie - chart - modal {
	background: none;
	box - shadow: none;
	width: auto;
	height: auto;
}
