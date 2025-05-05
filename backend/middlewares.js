import jwt from "jsonwebtoken";

function authMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "No token provided in cookies" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // attach decoded data to user object
    // so it become available on every route.
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
}

// to protect all routes except public ones.
export function globalAuthMiddleware(req, res, next) {
  const publicRoutes = ["/api/login", "/api/signup"];

  if (publicRoutes.includes(req.path)) {
    return next(); // skip auth
  }

  return authMiddleware(req, res, next);
}

