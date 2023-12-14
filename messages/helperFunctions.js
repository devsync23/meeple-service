export function recentTranslations(input1, input2) {
    const result = []
    let counter = 3;
    const userEmail = input2
    const existingUserEmail = input1[userEmail]
    const userEmailLength = existingUserEmail.length
    userEmailLength === 2 ? counter = 2 :
        userEmailLength === 1 ? counter = 1 : counter = 3;

    for (let i = userEmailLength - 1; i >= userEmailLength - counter; i--) {
        const recentMessage = {
            text: existingUserEmail[i].text,
            sourceLanguage: existingUserEmail[i].sourceLanguage,
            targetLang: existingUserEmail[i].targetLanguage,
            translation: existingUserEmail[i].translation
        }
        result.push(recentMessage)
    }
    return result;
}
