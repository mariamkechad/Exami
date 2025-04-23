export function authMiddleware(req, res, next) {
  // check jwt,
  // check the encripted passworld
  // call next() -> main handler.
  const data = req.body;
  console.log("Data is : ", data);
}
