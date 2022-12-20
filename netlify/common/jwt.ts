import jwt from "jsonwebtoken";

export const signToken = (id: string) => {
  return jwt.sign(
    {
      "https://hasura.io/jwt/claims": {
        "x-hasura-allowed-roles": ["admin"],
        "x-hasura-default-role": "admin",
        "x-hasura-user-id": id,
      },
    },
    "H79fZlPt2hv962y3GBzkG05Z4bWZ5haR"
  );
};
