const config = {
    url: 'www.roblox.com',
    realtime: 'realtime.roblox.com',
}
/**
 * Replace roblox.com with our url in Roblox html
 * @param data
 * @param newUrl
 */
const replacer = (data: string) => {
    // realtime replacer
    data = data.replace(/https:\/\/realtime\.roblox\.com/g, config.realtime);
    const newUrl = config.url;
    const urlNoProto = newUrl.replace(/(https|http):\/\//g, '');
    let urlNoPort = urlNoProto;
    if (urlNoPort.indexOf(':') !== -1) {
        urlNoPort = urlNoPort.slice(0, urlNoPort.indexOf(':'));
    }
    let useHttps = true;
    if (newUrl.indexOf('https') === -1) {
        useHttps = false;
    }
    let response = data
        .replace(/<div id="?roblox-linkify"?.+?(<\/div>)/g, '')
        .replace(/([a-z0-9]+)\.roblox\.com/g, `${urlNoProto}/apisite/$1`)
        // Change "www.roblox.com" to current domain set in config
        .replace(/\/apisite\/www/g, '')
        // Mark user as premium
        .replace(/data-ispremiumuser=false/g, 'data-ispremiumuser=true');

    if (!useHttps) {
        const noHttpsRegex = new RegExp('https://' + urlNoPort, 'g');
        response = response
            // Don't use HTTPs
            .replace(noHttpsRegex, `http://${urlNoPort}`);
    }
    return response;
};

export default replacer;
