interface Usuario {
    nome: string, email: string, telefone?: string
}

function enviarEmail ({email, nome, telefone}: Usuario) {
    console.log (`Enviar email para ${nome} com email ${email}`);
}

enviarEmail ("Matheus", "matheus.querido@outlook.com");