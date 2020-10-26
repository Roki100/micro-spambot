"use strict";
let $in = $(`#${findChat()}`).find('> div');
let message = 'yes';
let num = 50;
for (let i = 0; i < num; i++) {
    $in.html(message);
    $('#send-message-button').click();
}
function findChat() {
    let name = []; // Array because it can return more than one elements
    document
        .querySelectorAll('div[id^="cke_"]')
        .forEach(e => {
            if (e.id.includes('contents') && !e.style.cssText.includes('height: 0px') && !e.style.cssText.includes('width: 0px')) {
                name.push(e.id);
            };
        });
    return name[0]; // First element always should be the right one
}