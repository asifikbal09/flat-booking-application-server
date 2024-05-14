import { Router } from "express";
import { UserRoutes } from "../modules/User/user.route";
import { AuthRoutes } from "../modules/auth/auth.router";


const router = Router();

const moduleRoutes = [
{
    route:UserRoutes
},
{
    route:AuthRoutes
}
];

moduleRoutes.forEach((route) => router.use('/', route.route));

export default router;
