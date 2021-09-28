// interface Usuario {
//     nome: string, email: string, telefone?: string
// }

// function enviarEmail ({email, nome, telefone}: Usuario) {
//     console.log (`Olá ${nome} seu email é ${email} e o seu telefone é ${telefone}`);
// }

// enviarEmail ({
//     email: "matheus.querido@outlook.com",
//     nome: "Matheus",
// });

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

  //Request => Entrando
  //Response => Saindo