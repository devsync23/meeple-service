

export function validateRegisterData(req, res, next) {
  if (
    !req.body.email
    || !req.body.password
    || !req.body.name
    || !req.body.age
  ) {
    return res.send('could not regsiter user')
  }

  next()
}

export function validateLoginData(req, res, next) {
  console.log('hello from middleware 2')
  next()
}