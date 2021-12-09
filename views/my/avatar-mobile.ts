import formatView from '../../lib/formatView';
import importReact from '../../lib/import-react';
import replacer from '../../lib/replaceUrls';
import { IUserInfo } from '../../middleware';
import getTemplate from '../partials/general-page-template';
let avatarMobile = importReact('avatar-mobile');

export default (session?: IUserInfo): string => {
    if (process.env.NODE_ENV === 'development') {
        avatarMobile = importReact('avatar-mobile');
    }
    let avatarMobilePage = getTemplate(avatarMobile, 'Avatar');
    avatarMobilePage = replacer(avatarMobilePage);
	return formatView(avatarMobilePage, session);
};
