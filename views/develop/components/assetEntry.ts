import moment from "moment";
import convertToSeoName from "../../../lib/convertToSeoName";
import xss from "../../../lib/xss";
import { ModerationStatus, Type } from "../../../models/Asset";
import * as model from '../../../models';

const placeNameDetails = (data: any) => {
	return `
<td class="universe-name-col">
	<a class="title" href=""/universes/configure?id=${data.universeId}">${xss(data.universeName)}</a>
	
	<table class="details-table">
		<tbody>
			<tr>
				<td class="item-universe">
					<span>Start Place:</span> 
					<a class="title start-place-url" href="/games/${data.assetId}/${convertToSeoName(data.name)}">${xss(data.name)}</a>
				</td>
			</tr>
			<tr class="activate-cell">
				<td>
					${data.isPublic ? `<a class="place-active" href="/universes/configure?id=${data.universeId}">Public</a>` : `<a class="place-inactive" href="/universes/configure?id=${data.universeId}">Private</a>`
		}
				</td>
			</tr>
		</tbody>
	</table>
</td>
<td class="edit-col"><a class="btn-control btn-control-large" href="https://www.roblox.com/sponsored-games/universes/${data.universeId}/create">Sponsor</a></td>
<td class="edit-col"><a class="roblox-edit-button btn-control btn-control-large" href="javascript:">Edit</a></td>
	`;
}

const placeTableHeader = (data: any) => {
	return `<table class="item-table" data-item-id="${data.universeId}" data-rootplace-id="${data.assetId}" data-in-showcase="false" data-configure-url="/universes/configure?id=${data.universeId}" data-configure-localization-url="/localization/games/${data.universeId}/configure" data-create-badge-url="/develop?selectedPlaceId=${data.assetId}&amp;View=21" data-create-gamepass-url="/develop?selectedPlaceId=${data.assetId}&amp;View=34" data-developerstats-url="/places/${data.assetId}/stats" data-advertise-url="/user-ads/create?targetId=${data.assetId}&amp;targetType=Asset" data-activate-universe-url="/apisite/develop/v1/universes/${data.universeId}/activate" data-deactivate-universe-url="/apisite/develop/v1/universes/${data.universeId}/deactivate" data-type="universes">`;
}

export default (data: { moderationStatus: ModerationStatus, assetId: number, assetType: Type, createdAt: string, name: string }) => {
	return `
	${data.assetType === Type.Place ? placeTableHeader(data) :
			`<table class="item-table" data-item-id="${data.assetId}" data-item-moderation-approved="${data.moderationStatus === ModerationStatus.ReviewApproved ? 'True' : 'False'}" data-type="clothing">`
		}
		<tbody>
			<tr>
				<td class="${data.assetType === Type.Place ? 'image-col universe-image-col' : 'image-col'}">
					<a href="/catalog/${data.assetId}/${convertToSeoName(data.name)}" class="item-image">
						<img src="/thumbs/asset.ashx?assetid=${data.assetId}">
					</a>
				</td>
				${data.assetType === Type.Place ? placeNameDetails(data) : `
				<td class="name-col">
					<a class="title" href="/catalog/${data.assetId}/${convertToSeoName(data.name)}">${xss(data.name)}</a>
					<table class="details-table">
						<tbody>
							<tr>
								<td class="item-date">
									<span>Created</span>${moment(data.createdAt).format('M/D/YYYY')}
								</td>
							</tr>
						</tbody>
					</table>
				</td>
				
				<td class="stats-col">
					<div class="totals-label">
						Total Sales: <span>0</span>
					</div>
					<div class="totals-label">
						Last 7 days: <span>0</span>
					</div>
				</td>
				`}
				<td class="menu-col">
					<div class="gear-button-wrapper" style="background-color: rgb(255, 255, 255); border-color: white; z-index: 0;">
						<a href="#" class="gear-button"></a>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
	<div class="separator"></div>
	
	`;
}