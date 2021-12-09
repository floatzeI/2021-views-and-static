import { AudioMetaData, Type } from "../../../../models/Asset";

const getContentName = (t: Type) => {
	if (t === Type.Audio) {
		return '.mp3 or .ogg file';
	}
	return 'image';
}

const getUploadHeader = (t: Type) => {
	const withRow = (str: string) => `<div class="form-row">${str}</div>`;
	if (t === Type.Shirt || t === Type.Pants) {
		return withRow(`Did you use the template? If not, <a target="_blank" href="/rbxcdn/static/images/Template-Shirts-R15_07262019.png">download it here</a>.`);
	} else if (t === Type.Audio) {
		return withRow(`Audio uploads cost 350 Robux regardless of size, however this will change in the future. Audio uploads must be less than ${AudioMetaData.maxLengthInSeconds / 60} minutes and smaller than ${(AudioMetaData.maxFileSizeInBytes / 1048576).toFixed(1)} MB.`);
	}
	return '';
}

export default (type: Type) => {
	return `


<link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet'  href='/rbxcdn/static/css/MainCSS___0921edf3222ac7b5f224256c078ea1b1_m.css/fetch' />

    <link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="LegacyStyleGuide" data-bundle-source="Main" href="/rbxcdn/css/549b976e2d39abc487ceeba8044b42b8f35bc98f4087dd78aa3eff7a7f16eec7.css" />

    <link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="Thumbnails" data-bundle-source="Main" href="/rbxcdn/css/9517d686dc47015c200496d77e2b18146ee37652d18e25ecf9e1ed230310ea13.css" />


<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="VerificationUpsell" data-bundle-source="Main" href="/rbxcdn/css/4cfc9413aaac922000f010ba651f264e59a200d6062d41f8196017ade0094116.css" />

<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="Footer" data-bundle-source="Main" href="/rbxcdn/css/d5344f38053922e5936f0d7e2d3496ee4f83b46f0bb40d1d2c253b80ac82668e.css" />


    <link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="ConfigureWebApps" data-bundle-source="Main" href="/rbxcdn/css/08def520152a575438e73a81aa9a310c2415c327df7b624a24aa6e794d24dba3.css" />


<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="AccountSecurityPrompt" data-bundle-source="Main" href="/rbxcdn/css/9856228925f28fad6a7bdb2fd7f92be876ba970048ad6384195a735184161ce4.css" />

    <link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="RobuxIcon" data-bundle-source="Main" href="/rbxcdn/css/2f599b9e9ca20ee3c155684adbf1cdcb7220bab681b55b4505123a0c34e81969.css" />


<link rel="stylesheet" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-bundlename="NotificationStream" data-bundle-source="Main" href="/rbxcdn/css/d1c36a57982296706964ac2b650ba2f3087c47056ba37ac02822dc0192ce7820.css" />


<link onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' rel='stylesheet'  href='/rbxcdn/static/css/page___ecc16679633fe73483a0d2c8fd5cc8e1_m.css/fetch' />





    <script onerror='Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)' data-monitor='true' data-bundlename='base' type='text/javascript' src='/rbxcdn/js/f5c646fd7f56d2cba8a9c7c243601848.js'></script>

	
    <script type='text/javascript'>Roblox.config.externalResources = [];Roblox.config.paths['Pages.Catalog'] = '/rbxcdn/js/0d2759e7f03a464f0b8c0909a28405c5.js';Roblox.config.paths['Pages.CatalogShared'] = '/rbxcdn/js/1b451357891fcc5351b20d20504aa8ad.js';Roblox.config.paths['Widgets.AvatarImage'] = '/rbxcdn/js/7d49ac94271bd506077acc9d0130eebb.js';Roblox.config.paths['Widgets.DropdownMenu'] = '/rbxcdn/js/da553e6b77b3d79bec37441b5fb317e7.js';Roblox.config.paths['Widgets.HierarchicalDropdown'] = '/rbxcdn/js/4a0af9989732810851e9e12809aeb8ad.js';Roblox.config.paths['Widgets.ItemImage'] = '/rbxcdn/js/61a0490ba23afa17f9ecca2a079a6a57.js';Roblox.config.paths['Widgets.PlaceImage'] = '/rbxcdn/js/a6df74a754523e097cab747621643c98.js';</script>


    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="ConfigureWebApps" data-bundle-source="Main" src="/rbxcdn/js/c756de2b0f5f2f05d62899a3b602b4a3b573ad3faa1adea789291ebe9c66a002.js"></script>



    <script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="AssetsUploader" data-bundle-source="Main" src="/rbxcdn/js/fc6a434e6b2ab4a16302b4d443fa6657e445c8059aa75929b49fc070f7c5f330.js"></script>



<form action="/build/upload" enctype="multipart/form-data" id="upload-form" method="post">
    <input name="__RequestVerificationToken" type="hidden" value="_deprecated_field_do_not_use" />
    <input id="assetTypeId" name="assetTypeId" type="hidden" value="${type}" />
    <input id="isOggUploadEnabled" name="isOggUploadEnabled" type="hidden" value="True" />
    <input id="groupId" name="groupId" type="hidden" value="" />
    <input id="onVerificationPage" name="onVerificationPage" type="hidden" value="False" />
    <input id="captchaEnabled" name="captchaEnabled" type="hidden" value="True" />
    <input id="captchaToken" name="captchaToken" type="hidden" value="" />
    <input id="captchaProvider" name="captchaProvider" type="hidden" value="" />

    <div id="container">
            ${getUploadHeader(type)}
            <div class="form-row">
                <label for="file">Find your ${getContentName(type)}:</label>
                <input id="file" type="file" name="file" tabindex="1" />
                <span id="file-error" class="error"></span>
            </div>
            <div class="form-row">
                <label for="name">Name:</label>
                <input id="name" type="text" class="text-box text-box-medium" name="name" maxlength="50" tabindex="2" />
                <span id="name-error" class="error"></span>
            </div>
                <div class="form-row submit-buttons">
                            <a id="upload-button-real" class="btn-medium btn-primary btn-level-element " tabindex="4">Upload<span class=></span></a>
                                    <span id="loading-container"><img src="/rbxcdn/images/ec4e85b0c4396cf753a06fade0a8d8af.gif"></span>
            <div id="upload-fee-item-result-error" class="status-error btn-level-element hidden">Insufficient Funds</div>
            <div id="upload-fee-item-result-success" class="status-confirm btn-level-element hidden">
                <div><a id="upload-fee-confirmation-link" target="_top">Shirt</a> successfully created!</div>
            </div>
        </div>
    </div>
</form>
<script type="text/javascript">
    if (typeof Roblox === "undefined") {
        Roblox = {};
    }
    if (typeof Roblox.EmbeddedUpload === 'undefined') {
        Roblox.EmbeddedUpload = {};
    }

    Roblox.EmbeddedUpload.Resources = {
        invalidImageFile: 'Must be a .png, .jpg, .tga, or .bmp file',
        invalidSoundFile: 'Must be a .mp3 or .ogg file',
        invalidPluginFile: 'Must be an .rbxm file',
        noFile: 'You must select a file',
        noName: 'You must specify a name',
        noDescription: 'You must add a description',
        longDescription: 'The description is too long',
        fileIsEmpty: 'The file is empty',
        fileTooLarge: 'The file is too large'
    };

    // Only disabled upload button for Badge and GamePass

    Roblox.EmbeddedUpload.isInsufficientFunds = false;
    Roblox.EmbeddedUpload.isPlaceSpecificAsset = false;

	// begin economy-sim edits
	var debounce = false;
	$(document).on('click', '#upload-button-real', function(e) {
		e.preventDefault();
		if (debounce) {
			return;
		}
		$('#file-error').text("");
		$('#name-error').text("");
		debounce = true;
		var bodyFormData = new FormData();
		bodyFormData.append("name", document.getElementById("name").value);
		bodyFormData.append("assetType", ${type});
		bodyFormData.append("file", document.getElementById("file").files[0]);
		$.ajax({
			url: '/develop/upload',
			data: bodyFormData,
			processData: false,
			contentType: false,
			type: 'POST',
			success: function(data){
				console.log('Upload OK!');
				window.location.reload();
			},
			error: function(xhr) {
				debounce = false;
				$('#file-error').text("Error uploading file. Try again.");
				if (xhr.responseJSON) {
					var errs = xhr.responseJSON.errors;
					if (errs[0] && errs[0].message) {
						var errCode = errs[0].message;
						var msg = Roblox.EmbeddedUpload.Resources[errCode];
						if (msg) {
							$('#file-error').text(msg);
						}
						return
					}
				}
			},
		});
	});
	// end economy-sim edits
</script>


`;
}