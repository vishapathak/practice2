const express = require("express");
const {
  Registercontroller,
  loginController,
  profileController,
  updateUser,
  deleteuser,
  forgotPassword,
} = require("../controller/userController");
const route = express.Router();
const { authenticate } = require("../middleware/userAuthentication");

{
  /**
    RegisterEndpoint = /a1/register/routes;
    */
}

route.post("/v1/register/routes", Registercontroller);

{
  /**
    loginEndpoint = /login/router/userRouter
    */
}

route.post("/v1/login/router", loginController);

{
  /** profileendpoint = /profile/router/userprofile */
}

route.get("/v1/profile/router", authenticate, profileController);

{
  /**
    this is for updating the user
    endpoint: /updateUser/route/User/:email
    */
}
route.put("/v1/updateUser/router", authenticate, updateUser);
{
  /**
    this is for delete user
    endpoint: delete/route/user
    */
}
route.delete("/v1/delete/router", authenticate, deleteuser);

{
    /**
     * forgot password - this does't need any authentication
     * endpoint - /forgot/userpassword/route
     */
}
route.post("v1/forgotPassword/router",forgotPassword)

module.exports = route;
