export function validateMessage(req, res, next) {
    if (!req.body.text
        || !req.body.sourceLanguage
        || !req.body.targetLanguage
    ) {
        res.send('one or more fields are missing')
        }
    next()
}
