import { Router } from "express";
import routerApiProducts from "./products";
import routerApiCarts from "./carts";
import routerApiGenres from "./genres";
import routerApiAuthors from "./authors";
const router = Router();

router
    .use('/products', routerApiProducts)
    .use('/cars', routerApiCarts)
    .use('/genres', routerApiGenres)
    .use('/authors', routerApiAuthors)
    
router.get("/", (req, res) => {
    res.send("Hello World!");
});

export default router;