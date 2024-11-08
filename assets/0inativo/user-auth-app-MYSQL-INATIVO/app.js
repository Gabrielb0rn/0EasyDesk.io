const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express();

// Configuração de sessão
app.use(session({
    secret: 'segredo_seguro',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  // Use true se usar HTTPS
}));

// Configuração de body-parser para capturar os dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));

// Configuração da engine de templates EJS
app.set('view engine', 'ejs');

// Arquivos estáticos
app.use(express.static('public'));

// Rotas de autenticação
app.use('/', authRoutes);

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
