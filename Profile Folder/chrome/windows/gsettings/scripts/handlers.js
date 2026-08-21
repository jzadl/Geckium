document.getElementById("resetOverridesBtn").addEventListener("click", () => {
	disableOverrides();
});

document.getElementById("overridesModalYesBtn").addEventListener("click", () => {
	disableOverrides();
});

document.getElementById("app_restoreBtn").addEventListener("click", () => {
	gkNTP.restoreDefaultApps();
	populateAppsList();
});

document.getElementById("openChrThemesFolderBtn").addEventListener("click", () => {
	openChrThemesDir();
});

document.getElementById("refreshListBtn").addEventListener("click", () => {
	rebuildGrids();
});

document.querySelectorAll("#gkthemes-grid button[data-systheme]").forEach(themeBtn => {
	themeBtn.addEventListener("click", () => {
		applySysTheme(themeBtn.dataset.systheme);
	});
});

document.getElementById("wizardModalYesBtn").addEventListener("click", () => {
	gkPrefUtils.set("Geckium.firstRun.complete").bool(false);
	UC_API.Runtime.restart(true);
});

document.getElementById("restartModalYesBtn").addEventListener("click", () => {
	UC_API.Runtime.restart();
});

document.getElementById("clearCacheModalYesBtn").addEventListener("click", () => {
	UC_API.Runtime.restart(true);
});
