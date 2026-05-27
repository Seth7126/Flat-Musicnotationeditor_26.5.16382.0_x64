(function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
		var n = new e.Error().stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7861f236-6141-4a8a-8703-9bbde34a6027", e._sentryDebugIdIdentifier = "sentry-dbid-7861f236-6141-4a8a-8703-9bbde34a6027");
	} catch (e) {}
})();
let electron = require("electron");
//#region ../../node_modules/.pnpm/@sentry+electron@7.11.0/node_modules/@sentry/electron/esm/preload/default.js
/** Ways to communicate between the renderer and main process  */
var IPCMode;
(function(IPCMode) {
	/** Configures Electron IPC to receive messages from renderers */
	IPCMode[IPCMode["Classic"] = 1] = "Classic";
	/** Configures Electron protocol module to receive messages from renderers */
	IPCMode[IPCMode["Protocol"] = 2] = "Protocol";
	/**
	* Configures both methods for best compatibility.
	*
	* Renderers favour IPC but fall back to protocol if IPC has not
	* been configured in a preload script
	*/
	IPCMode[IPCMode["Both"] = 3] = "Both";
})(IPCMode || (IPCMode = {}));
/**
* Utility for creating namespaced IPC channels and protocol routes
*/
function ipcChannelUtils(namespace) {
	return {
		createUrl: (channel) => {
			return `${namespace}://${channel}/sentry_key`;
		},
		urlMatches: function(url, channel) {
			return url.startsWith(this.createUrl(channel));
		},
		createKey: (channel) => {
			return `${namespace}.${channel}`;
		},
		namespace
	};
}
/**
* This preload script may be used with sandbox mode enabled which means regular require is not available.
*/
/**
* Hook up IPC to the window object and uses contextBridge if available.
*
* @param namespace An optional namespace to use for the IPC channels
*/
function hookupIpc(namespace = "sentry-ipc") {
	const ipcUtil = ipcChannelUtils(namespace);
	window.__SENTRY_IPC__ = window.__SENTRY_IPC__ || {};
	if (window.__SENTRY_IPC__[ipcUtil.namespace]) console.log("Sentry Electron preload has already been run");
	else {
		const ipcObject = {
			sendRendererStart: () => electron.ipcRenderer.send(ipcUtil.createKey("start")),
			sendScope: (scopeJson) => electron.ipcRenderer.send(ipcUtil.createKey("scope"), scopeJson),
			sendEnvelope: (envelope) => electron.ipcRenderer.send(ipcUtil.createKey("envelope"), envelope),
			sendStatus: (status) => electron.ipcRenderer.send(ipcUtil.createKey("status"), status),
			sendStructuredLog: (log) => electron.ipcRenderer.send(ipcUtil.createKey("structured-log"), log),
			sendMetric: (metric) => electron.ipcRenderer.send(ipcUtil.createKey("metric"), metric)
		};
		window.__SENTRY_IPC__[ipcUtil.namespace] = ipcObject;
		if (electron.contextBridge) try {
			electron.contextBridge.exposeInMainWorld("__SENTRY_IPC__", window.__SENTRY_IPC__);
		} catch {}
	}
}
hookupIpc();
//#endregion
//#region src/preload/index.ts
var flatDesktopAPI = {
	getConfig: () => electron.ipcRenderer.invoke("config:get"),
	cacheLocalScore: (scoreId, scoreData, title) => electron.ipcRenderer.invoke("editor:cacheLocalScore", scoreId, scoreData, title),
	fetchScoreRevisionData: (cloudId, revisionId) => electron.ipcRenderer.invoke("score:fetch-revision", cloudId, revisionId),
	requestOpenFile: () => electron.ipcRenderer.invoke("score:open"),
	openFilePath: (filePath) => electron.ipcRenderer.invoke("score:open-file", filePath),
	openScoreById: (id) => electron.ipcRenderer.invoke("score:open-by-id", id),
	getUserState: () => electron.ipcRenderer.invoke("userState:get"),
	signIn: (options) => electron.ipcRenderer.invoke("auth:signIn", options),
	signInWithApple: () => electron.ipcRenderer.invoke("auth:signInWithApple"),
	signOut: () => electron.ipcRenderer.invoke("auth:signOut"),
	getAccountState: () => electron.ipcRenderer.invoke("auth:getState"),
	onAccountUpdated: (callback) => {
		const handler = (_event, state) => callback(state);
		electron.ipcRenderer.on("account:updated", handler);
		return () => electron.ipcRenderer.removeListener("account:updated", handler);
	},
	getScoreData: () => electron.ipcRenderer.invoke("editor:getScoreData"),
	saveScore: (scoreData) => electron.ipcRenderer.invoke("editor:saveScore", scoreData),
	saveScoreAs: (scoreData) => electron.ipcRenderer.invoke("editor:saveScoreAs", scoreData),
	saveFile: (filePath, scoreData, scoreId, title) => electron.ipcRenderer.invoke("editor:save", filePath, scoreData, scoreId, title),
	saveFileAs: (scoreData, scoreId, title, defaultPath) => electron.ipcRenderer.invoke("editor:saveAs", scoreData, scoreId, title, defaultPath),
	setDocumentEdited: (edited) => electron.ipcRenderer.send("window:setDocumentEdited", edited),
	isDocumentEdited: () => electron.ipcRenderer.invoke("window:isDocumentEdited"),
	setWindowTitle: (title) => electron.ipcRenderer.send("window:setWindowTitle", title),
	setScoreTitle: (title) => electron.ipcRenderer.send("editor:setScoreTitle", title),
	setRepresentedFilename: (filePath) => electron.ipcRenderer.send("window:setRepresentedFilename", filePath),
	setFullScreen: (fullscreen) => electron.ipcRenderer.send("window:setFullScreen", fullscreen),
	onFullScreenChanged: (callback) => {
		const handler = (_event, fullscreen) => callback(fullscreen);
		electron.ipcRenderer.on("window:fullScreenChanged", handler);
		return () => electron.ipcRenderer.removeListener("window:fullScreenChanged", handler);
	},
	confirmClose: () => electron.ipcRenderer.send("window:confirmClose"),
	shellReady: () => electron.ipcRenderer.send("window:shellReady"),
	onMenuAction: (callback) => {
		const handler = (_event, action) => callback(action);
		electron.ipcRenderer.on("menu:action", handler);
		return () => electron.ipcRenderer.removeListener("menu:action", handler);
	},
	exportSave: (data, defaultFilename) => electron.ipcRenderer.invoke("editor:exportSave", data, defaultFilename),
	printPDF: (data) => electron.ipcRenderer.invoke("editor:printPDF", data),
	requestNewScore: () => electron.ipcRenderer.invoke("creation:open"),
	createLocalScore: (title, scoreJson) => electron.ipcRenderer.invoke("creation:create", title, scoreJson),
	setProgressBar: (progress) => electron.ipcRenderer.send("window:setProgressBar", progress),
	getDeviceIdentifier: () => electron.ipcRenderer.invoke("device:getIdentifier"),
	getBootData: () => electron.ipcRenderer.invoke("library:getBootData"),
	openCloudScore: (scoreId) => electron.ipcRenderer.invoke("library:openCloudScore", scoreId),
	openInBrowser: (targetPath) => electron.ipcRenderer.invoke("library:openInBrowser", targetPath),
	openExternalUrl: (url) => electron.ipcRenderer.invoke("app:openExternalUrl", url),
	syncGetStatus: () => electron.ipcRenderer.invoke("sync:getStatus"),
	syncTrigger: () => electron.ipcRenderer.invoke("sync:triggerNow"),
	...process.env.NODE_ENV !== "production" ? { setSimulateOffline: (offline) => electron.ipcRenderer.invoke("dev:setSimulateOffline", offline) } : {},
	onSyncStateChanged: (callback) => {
		const handler = (_event, status) => callback(status);
		electron.ipcRenderer.on("sync:stateChanged", handler);
		return () => electron.ipcRenderer.removeListener("sync:stateChanged", handler);
	},
	onConnectivityChanged: (callback) => {
		const handler = (_event, online) => callback(online);
		electron.ipcRenderer.on("sync:connectivity", handler);
		return () => electron.ipcRenderer.removeListener("sync:connectivity", handler);
	},
	onSyncMetadataUpdated: (callback) => {
		const handler = () => callback();
		electron.ipcRenderer.on("sync:metadataUpdated", handler);
		return () => electron.ipcRenderer.removeListener("sync:metadataUpdated", handler);
	},
	onLibraryRefresh: (callback) => {
		const handler = () => callback();
		electron.ipcRenderer.on("library:refresh", handler);
		return () => electron.ipcRenderer.removeListener("library:refresh", handler);
	},
	onImportStatusUpdate: (callback) => {
		const handler = (_event, status) => callback(status);
		electron.ipcRenderer.on("import:statusUpdate", handler);
		return () => electron.ipcRenderer.removeListener("import:statusUpdate", handler);
	},
	onBootDataRefreshed: (callback) => {
		const handler = (_event, bootData) => callback(bootData);
		electron.ipcRenderer.on("boot:refreshed", handler);
		return () => electron.ipcRenderer.removeListener("boot:refreshed", handler);
	},
	syncGetOverview: () => electron.ipcRenderer.invoke("sync:getOverview"),
	onRevisionSyncProgress: (callback) => {
		const handler = (_event, progress) => callback(progress);
		electron.ipcRenderer.on("sync:revisionProgress", handler);
		return () => electron.ipcRenderer.removeListener("sync:revisionProgress", handler);
	},
	apiDispatch: async (operationId, args) => {
		const result = await electron.ipcRenderer.invoke("api:dispatch", operationId, args);
		if (result && typeof result === "object" && "__apiError" in result) {
			const err = new Error(result.message);
			Object.assign(err, {
				status: result.status,
				responseBody: result.responseBody,
				response: { status: result.status }
			});
			throw err;
		}
		return result;
	},
	getSystemFontData: (family, variant) => electron.ipcRenderer.invoke("fonts:getSystemFontData", family, variant),
	storageDispatch: (method, args) => electron.ipcRenderer.invoke("storage:dispatch", method, args),
	rtStorageDispatch: (accountId, scoreId, method, args) => electron.ipcRenderer.invoke("rt-storage:dispatch", accountId, scoreId, method, args),
	audioGetSoundfonts: (ids) => electron.ipcRenderer.invoke("audio:getSoundfonts", ids),
	audioLoadSamples: (samplesPath, instruments) => electron.ipcRenderer.invoke("audio:loadSamples", samplesPath, instruments),
	audioScheduleNotes: (notes) => electron.ipcRenderer.invoke("audio:scheduleNotes", notes),
	audioPlayNote: (note) => electron.ipcRenderer.invoke("audio:playNote", note),
	audioPlay: (opts) => electron.ipcRenderer.invoke("audio:play", opts),
	audioPause: () => electron.ipcRenderer.invoke("audio:pause"),
	audioStop: () => electron.ipcRenderer.invoke("audio:stop"),
	audioSetSpeed: (speed) => electron.ipcRenderer.invoke("audio:setSpeed", speed),
	audioMutePart: (partIdx, muted) => electron.ipcRenderer.invoke("audio:mutePart", partIdx, muted),
	audioSoloPart: (partIdx, soloed) => electron.ipcRenderer.invoke("audio:soloPart", partIdx, soloed),
	audioSetPartVolume: (partIdx, volume) => electron.ipcRenderer.invoke("audio:setPartVolume", partIdx, volume),
	audioExportRender: (notes, format, outputPath, speed) => electron.ipcRenderer.invoke("audio:exportRender", {
		notes,
		format,
		outputPath,
		speed
	}),
	onAudioNotesRequest: (callback) => {
		const handler = (_event, request) => callback(request);
		electron.ipcRenderer.on("audio:notesRequest", handler);
		return () => electron.ipcRenderer.removeListener("audio:notesRequest", handler);
	},
	respondAudioNotesRequest: (id, notes) => {
		electron.ipcRenderer.send("audio:notesResponse", {
			id,
			notes
		});
	},
	onAudioTime: (callback) => {
		const handler = (_event, data) => callback(data);
		electron.ipcRenderer.on("audio:time", handler);
		return () => electron.ipcRenderer.removeListener("audio:time", handler);
	},
	onAudioState: (callback) => {
		const handler = (_event, data) => callback(data);
		electron.ipcRenderer.on("audio:state", handler);
		return () => electron.ipcRenderer.removeListener("audio:state", handler);
	},
	onAudioExportProgress: (callback) => {
		const handler = (_event, data) => callback(data);
		electron.ipcRenderer.on("audio:exportProgress", handler);
		return () => electron.ipcRenderer.removeListener("audio:exportProgress", handler);
	},
	onAudioError: (callback) => {
		const handler = (_event, data) => callback(data);
		electron.ipcRenderer.on("audio:error", handler);
		return () => electron.ipcRenderer.removeListener("audio:error", handler);
	},
	requestReview: () => electron.ipcRenderer.invoke("app:requestReview"),
	maybeRequestReview: (location) => electron.ipcRenderer.send("app:maybeRequestReview", location),
	storekitProducts: (ids) => electron.ipcRenderer.invoke("storekit:products", ids),
	storekitPurchase: (id) => electron.ipcRenderer.invoke("storekit:purchase", id),
	storekitAppStoreSync: (ids) => electron.ipcRenderer.invoke("storekit:appStoreSync", ids),
	storekitCurrentEntitlements: (ids) => electron.ipcRenderer.invoke("storekit:currentEntitlements", ids),
	storekitTransactionFinish: (txId) => electron.ipcRenderer.invoke("storekit:transactionFinish", txId),
	storekitTransactionUpdates: () => electron.ipcRenderer.invoke("storekit:transactionUpdates"),
	storekitTransactionUpdatesStop: () => electron.ipcRenderer.invoke("storekit:transactionUpdatesStop"),
	onStorekitTransactionUpdate: (callback) => {
		const handler = (_event, tx) => callback(tx);
		electron.ipcRenderer.on("storekit:transactionUpdate", handler);
		return () => electron.ipcRenderer.removeListener("storekit:transactionUpdate", handler);
	},
	getUpgradeOffers: () => electron.ipcRenderer.invoke("upgrade:getOffers"),
	upgradePurchase: (storeProductId) => electron.ipcRenderer.invoke("upgrade:purchase", storeProductId),
	upgradeRestorePurchases: () => electron.ipcRenderer.invoke("upgrade:restorePurchases"),
	upgradeRetryReceipt: () => electron.ipcRenderer.invoke("upgrade:retryReceipt"),
	requestUpgradeWindow: (params) => electron.ipcRenderer.invoke("upgrade:openWindow", params),
	getUpgradeContext: () => electron.ipcRenderer.invoke("upgrade:getContext"),
	onUpgradeCompleted: (callback) => {
		const handler = (_event, bootData) => callback(bootData);
		electron.ipcRenderer.on("upgrade:completed", handler);
		return () => electron.ipcRenderer.removeListener("upgrade:completed", handler);
	},
	...process.env.NODE_ENV !== "production" ? {
		devSnapshot: () => electron.ipcRenderer.invoke("dev:snapshot"),
		devDbListTables: (dbName) => electron.ipcRenderer.invoke("dev:db:list-tables", dbName),
		devDbTableInfo: (dbName, tableName) => electron.ipcRenderer.invoke("dev:db:table-info", dbName, tableName),
		devDbRowCount: (dbName, tableName) => electron.ipcRenderer.invoke("dev:db:row-count", dbName, tableName),
		devDbQuery: (dbName, sql, params) => electron.ipcRenderer.invoke("dev:db:query", dbName, sql, params),
		devDbTableRows: (dbName, tableName, opts) => electron.ipcRenderer.invoke("dev:db:table-rows", dbName, tableName, opts)
	} : {},
	openSettings: (section) => electron.ipcRenderer.invoke("settings:openSettings", section),
	getInitialSettingsSection: () => electron.ipcRenderer.invoke("settings:getInitialSection"),
	getSettings: () => electron.ipcRenderer.invoke("settings:get"),
	setSettings: (partial) => electron.ipcRenderer.invoke("settings:set", partial),
	getInstrumentInfo: () => electron.ipcRenderer.invoke("settings:getInstrumentInfo"),
	getCacheSize: () => electron.ipcRenderer.invoke("settings:getCacheSize"),
	clearCache: () => electron.ipcRenderer.invoke("settings:clearCache"),
	resetSetting: (key) => electron.ipcRenderer.invoke("settings:reset", key),
	openLicenses: () => electron.ipcRenderer.invoke("settings:openLicenses"),
	getAboutInfo: () => electron.ipcRenderer.invoke("settings:getAboutInfo")
};
if (!process.contextIsolated) throw new Error("Context isolation is required — refusing to expose API without sandbox");
electron.contextBridge.exposeInMainWorld("flatDesktopAPI", flatDesktopAPI);
electron.contextBridge.exposeInMainWorld("flatDesktopPlatform", process.platform);
electron.ipcRenderer.on("settings:navigateTo", (_event, section) => {
	window.dispatchEvent(new CustomEvent("flat:settings:navigateTo", { detail: section }));
});
//#endregion

//# sourceMappingURL=index.js.map