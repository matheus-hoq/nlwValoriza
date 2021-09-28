import express from "express";

// @types/express
const app = express();

/**
 * GET => Buscar uma informação
 * POST => Inserir (criar) uma informação
 * PUT => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH => Alterar uma informação específica
 *  **/

/** 
 * Tipos de parâmetros
 * Routes Params => http://localhost:3000/produtos/16543161531
 * Query Params => http://localhost:3000/produtos?name=teclado&tecladobom
 * 
 * Body Params => {
 *  "name": "teclado",
 *  "description": "teclado bom"
 * }
 * 
 *  */

app.get("/test", (request, response) => {
  //Request => Entrando
  //Response => Saindo
  return response.send("Olá, NLW!");
});

app.post("/test-post", (request, response) => {
    return response.send("Olá, NLW - Método POST")
})

// http://localhost:3000
app.listen(3000, () => console.log("Server rodando"));