import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import 'material-design-lite';

export function configure(aurelia: Aurelia) {
	aurelia.use
		.standardConfiguration()
		.feature('resources') 
		.plugin('aurelia-mdl-plugin');

	if (environment.debug) {
		aurelia.use.developmentLogging();
	}

	if (environment.testing) {
		aurelia.use.plugin('aurelia-testing');
	}

	aurelia.start().then(() => aurelia.setRoot());
}
