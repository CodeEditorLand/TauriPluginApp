if ("__TAURI__" in window) {
	var __TAURI_APP__ = (function (_) {
		"use strict";
		return (
			(_.getName = async function () {
				return window.__TAURI_INVOKE__("plugin:app|name");
			}),
			(_.getTauriVersion = async function () {
				return window.__TAURI_INVOKE__("plugin:app|tauri_version");
			}),
			(_.getVersion = async function () {
				return window.__TAURI_INVOKE__("plugin:app|version");
			}),
			(_.hide = async function () {
				return window.__TAURI_INVOKE__("plugin:app|hide");
			}),
			(_.show = async function () {
				return window.__TAURI_INVOKE__("plugin:app|show");
			}),
			_
		);
	})({});
	Object.defineProperty(window.__TAURI__, "app", { value: __TAURI_APP__ });
}
