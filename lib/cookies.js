import cookie from "cookie";

const isProd = process.env.NODE_ENV === "production";
const TEN_MINS = 1000 * 60 * 10;
const options = {
  httpOnly: true,
  maxAge: TEN_MINS,
  sameSite: "lax",
  path: "/",
  secure: isProd,
};

export const session_cookie = {
  write(sid) {
    return cookie.serialize("sid", sid, options);
  },
  clear() {
    return cookie.serialize("sid", null, { ...options, maxAge: 0 });
  },
};
