import { Router } from "express";
import routerAuth from "./auth";
import routerApi from "./api-routes/api";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World!");
})
router
    .use('/auth/v1', routerAuth)
    .use('/api/v1', routerApi);

export default router;