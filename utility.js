export function printMessage(data, userEmail, count){
    const userMessageLog = data[userEmail];
    const latestMessages = data[userEmail].slice(userMessageLog.length-count,userMessageLog.length);
    let output = '::::::::::Messages History::::::::::\n';
    for (let i = latestMessages.length-1; i>=0; i--){
        output += "Translating message:\n"
        + `${latestMessages[i].text}\n`
        + `from ${latestMessages[i].sourceLanguage}`
        + " to "
        + `${latestMessages[i].targetLanguage} `
        + `in ${latestMessages[i].formality} tone\n`
        + "Translated message:\n" + `${latestMessages[i].translation}\n`
        + '::::::::::Messages History::::::::::\n'
    }
    return output
}
