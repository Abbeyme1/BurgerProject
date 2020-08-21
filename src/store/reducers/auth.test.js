import React from "react";
import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("auth reducer", () => {
  it("should render the inital state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: "/",
    });
  });

  it("should store toekn and userid when login/authSuccess", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: "/",
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: "random-val",
          userId: "random-id",
        }
      )
    ).toEqual({
      token: "random-val",
      userId: "random-id",
      error: null,
      loading: false,
      authRedirectPath: "/",
    });
  });
});
