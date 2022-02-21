import jwt from "jsonwebtoken";
import appConfig from "../config/env";
import { UserModel } from "../module/auth/auth.model";

const auth = async (req, res, next) => {
  const token = req.header("authorization");
  if (token) {
    try {
      const decoded = jwt.verify(token, appConfig.jwt_key);
      const user = await UserModel.findOne({
        _id: decoded.sub,
      });
      if (!user) {
        return res.status(401).send({
          status: "ERROR",
          message: "Auth-Token is not valid",
        });
      }
      req.token = token;
      req.user = user;
      next();
    } catch (e) {
      return res.status(401).send({
        status: "ERROR",
        message: "Auth-Token is not valid",
      });
    }
  } else {
    return res.status(401).send({
      status: "ERROR",
      message: "Auth-Token not set in header",
    });
  }
};

export default auth;
