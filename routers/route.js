const express = require("express");
const {
  Registercontroller,
  loginController,
  profileController,
  updateUser,
  deleteuser,
  forgotPassword,
} = require("../controller/controller");
const route = express.Router();
const { authenticate } = require("../middleware/authentication");

{
  /**
    RegisterEndpoint = /a1/register/routes;
    */
}

route.post("/a1/register/routes", Registercontroller);
{
  /**
    loginEndpoint = /login/router/userRouter
    */
}

route.post("/log/router/userRouter", loginController);

{
  /** profileendpoint = /profile/router/userprofile */
}

route.get("/profile/router/userprofile", authenticate, profileController);

{
  /**
    this is for updating the user
    endpoint: /updateUser/route/User/:email
    */
}
route.put("/updateUser/route/User", authenticate, updateUser);
{
  /**
    this is for delete user
    endpoint: delete/route/user
    */
}
route.delete("/delete/route/user", authenticate, deleteuser);

{
    /**
     * forgot password - this does't need any authentication
     * endpoint - /forgot/userpassword/route
     */
}
route.post("/forgot/userpassword/route",forgotPassword)

module.exports = route;
