import {get} from '../../lib/systemMessage';
import FilterXSS from 'xss';

export default () => {
    let msg = get();
    if (!msg.IsVisible || !msg.Text) {
        return '';
    }
    const defTags = ['style','class','id'];
    return `<div><div class="alert-info" role="alert">${FilterXSS(msg.Text, {whiteList: {
        a: ['href', 'title', 'target', 'rel', ...defTags],
        span: defTags,
        h1: defTags, 
        h2: defTags,
        h3: defTags,
        h4: defTags,
        h5: defTags,
        h6: defTags,
        hr: defTags,
        div: defTags,
    }})}</div></div>`;
}