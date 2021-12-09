import { Type } from "../../../models/Asset";
import assetEntry from "./assetEntry";
import upload from "./iframe/upload";

const getTitle = (t: Type) => {
	switch (t) {
		case Type.Audio:
			return `an Audio`;
		case Type.Shirt:
			return `a Shirt`;
		case Type.Pants:
			return `Pants`;
		default:
			return '?';
	}
}

const getSubtitle = (t: Type) => {
	switch (t) {
		case Type.Shirt:
		case Type.Pants:
			return `<span class="aside-text">Don't know how? <a href="https://developer.roblox.com/articles/How-to-Make-Shirts-and-Pants-for-Roblox-Characters" target="_blank">Click here</a></span>`;
		default:
			return '';
	}
}

export default (viewModel: any, title: string, assetTypeId: number) => {
	return `
	${[Type.Shirt, Type.Audio, Type.Pants, Type.TeeShirt].includes(assetTypeId) ? `
	<h2>Create ${getTitle(assetTypeId)}</h2>${getSubtitle(assetTypeId)}
	
	<!-- <iframe id="upload-iframe" class="my-upload-iframe" src="/build/upload?AssetTypeId=11&amp;GroupId=" scrolling="no" frameborder="0"></iframe> -->
	${upload(assetTypeId)}

	` : assetTypeId === 0 ? `<a id="CreatePlace_alt" role="button" class="create-new-button btn-medium btn-primary">Create New Game</a>` : ''}
	
	<table class="section-header"><tbody><tr><td class="content-title"><div><h2 class="header-text">${title}</h2></div></td></tr></tbody></table><div class="items-container">
	
	${viewModel.creations.length === 0 ? `<div>You haven't created any ${(title.endsWith('s') ? title : title + 's').toLowerCase()}.</div>` : viewModel.creations.map((v: any) => {
		return assetEntry(v);
	}).join('')}
	
	
	<script>var anchorTags=$("a[data-retry-url]");if(anchorTags.loadRobloxThumbnails!=null){anchorTags.loadRobloxThumbnails();}</script></div><div class="build-loading-container" style="display:none"><div class="buildpage-loading-container"><img alt="^_^" src="/rbxcdn/images/ec4e85b0c4396cf753a06fade0a8d8af.gif"></div></div>

	<script onerror=Roblox.BundleDetector&amp;&amp;Roblox.BundleDetector.reportBundleError(this) data-monitor=true data-bundlename=page src=/rbxcdn/js/3959f7f54d035046c0b9b0a1c47ba1bf></script>
<script>
	$(document).on("click", "#CreatePlace_alt", function(e) {
		e.preventDefault();
		Roblox.Dialog.open({
				titleText: 'Not Available',
				bodyContent: 'Game creation is reserved to specific users right now. Check back soon.',
				xToCancel: true,
				dismissable: true,
				declineColor: Roblox.Dialog.none,
				acceptText: 'OK',
		});
	});
</script>
	`;
}