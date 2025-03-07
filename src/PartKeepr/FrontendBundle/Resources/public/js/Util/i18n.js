/**
 * Returns an internationalized string based on current locale setting.
 * @param {string} string - The string to be translated
 * @return {string} The translated string or original string if translation not found
 */
function i18n(string) {
	if (!Ext.jm_locale || !Ext.locales[Ext.jm_locale]) {
		return string;
	}

	const translations = Ext.locales[Ext.jm_locale];
	return translations[string] || string;
}