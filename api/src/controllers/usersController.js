const usuarios = [
    {'id':1,'nome':'Exemplo 1'},
    {'id':2,'nome':'Exemplo 2'}
];
  
listarUsuarios = (req, res) => {
    res.send(usuarios);
};

inserirUsuario = (req, res) =>{
    const usuario = req.body
    usuarios.push(usuario)
    res.status(201).send("Usuario Criado com sucesso!")
}

module.exports = {listarUsuarios, inserirUsuario};