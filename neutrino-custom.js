module.exports = neutrino => {
	const vendorBundle = neutrino.config.entry('vendor');
	Object.keys(require('./package.json').dependencies).forEach(d => vendorBundle.add(d));
	neutrino.config.devtool('cheap-module-eval-source-map');
};