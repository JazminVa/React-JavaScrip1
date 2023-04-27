//Http es un protoco que nos permite la comunicacion entre varias computadoras
//En la Api usaremos los metodos get, post, put, delete de Http
//Http nos devolvera un codigo de respuesta(200 si todo sale bien y 400 si falla)
//Las Api siempre devuelven al cliente un codigo de estado y un Json si tofo sale bien con los datos

//request = solicitud, response = Respuesta

import{Router} from "express"
import {createAprendiz, getAprendices,getAprendiz,editAprendiz,deleteAprendiz} from "../controllers/aprendices.controllers.js";
const router = Router();
router.get("/aprendices",getAprendices);
router.get("/aprendices/:id",getAprendiz)
router.post("/aprendices",createAprendiz);
router.put("/aprendices/:id", editAprendiz);
router.delete("/aprendices/:id", deleteAprendiz);
export default router;