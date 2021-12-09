
import moment = require('moment');
import {
    NavigationAuthenticated,
    NavigationUnauthenticated,
} from './views/partials/navigation';
import authScripts, { coreUtilities, reactUtilities } from './views/partials/auth-scripts';
import { IUserInfo } from './copied';
import replacer from './replacer';

const metaFlags = `
<meta id="roblox-display-names" data-enabled="true">
`;

export default (str: string, session?: IUserInfo): string => {
    let result = str;
    if (session) {
        str = str
            .replace(/<navbar \/>/g, NavigationAuthenticated)
            .replace(/<authScripts \/>/g, authScripts);
    } else {
        str = str.replace(/<navbar \/>/g, NavigationUnauthenticated);
    }
    str = str.replace(/<metaflags \/>/gi, metaFlags).replace(/<coreutilities \/>/gi, coreUtilities).replace(/<ReactUtilities \/>/g, reactUtilities)
    if (session) {
        result = replacer(str)
            .replace(/1335179568/g, session.userId.toString())
            // add quotes to data- fields so spaced names work
            .replace(/data-name=discofurrr/g, `data-name="${session.username}"`)
            .replace(
                /data-displayname=discofurrr/g,
                `data-displayname="${session.username}"`
            )
            .replace(/discofurrr/g, session.username)
            .replace(
                /11\/26\/2019 5:03:41 PM/g,
                moment(session.created).format()
            )
            .replace(/data-isPremiumUser="false"/g, 'data-isPremiumUser="true"')
            .replace(/data-user-bc="0"/g, 'data-user-bc="4"');

        if (session.theme === 'dark') {
            result = result.replace(/light-theme/g, 'dark-theme');
        }
    } else {
        result = replacer(str)
            .replace(
                /<meta name=user-data data-userid=1335179568 data-name=discofurrr data-displayname=discofurrr data-isunder13=false data-created="11\/26\/2019 5:03:41 PM" data-ispremiumuser=false>/g,
                ''
            )
            .replace(/discofurrr/g, '')
            .replace(/1335179568/g, '');
    }
    // ugly hack #69420
    // @ts-ignore
    if (session && session.originalUserInfo) {
        const exitId = 'exit-impersonation-bhack1';
        result = result + `\n\n
<div style="display: block; margin:0 auto; max-width: 490px; text-align: center;">
    <p style="cursor: pointer;" id="${exitId}">Exit Impersonation</p>
</div>
<script>
    $(document).on('click', '#${exitId}', function(e) {
        $.ajax({
            method: 'DELETE',
            url: '/apisite/auth/v1/users/${session.userId}/impersonate',
        }).done(function() {
            window.location.reload();
        })
    });
</script>
`;
    }
    return result;
};