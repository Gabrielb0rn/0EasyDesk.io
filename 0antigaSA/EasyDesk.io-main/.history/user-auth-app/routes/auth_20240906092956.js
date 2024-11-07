const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../config/db');
const router = express.Router();

// Rota de registro
router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.send('Por favor, preencha todos os campos.');
    }

    // Verificar se o usuário já existe
    db.query('SELECT username FROM users WHERE username = ?', [username], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            return res.send('Este nome de usuário já está em uso.');
        }

        // Criptografar a senha
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) throw err;

            // Inserir usuário no banco de dados
            db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hash], (err, result) => {
                if (err) throw err;
                res.redirect('/login');
            });
        });
    });
});

// Rota de login
router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.send('Por favor, preencha todos os campos.');
    }

    // Verificar se o usuário existe
    db.query('SELECT * FROM users WHERE username = ?', [username], (err, result) => {
        if (err) throw err;
        if (result.length === 0) {
            return res.send('Usuário não encontrado.');
        }

        const user = result[0];

        // Comparar senhas
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                req.session.user = user;
                res.send('Login bem-sucedido.');
            } else {
                res.send('Senha incorreta.');
            }
        });
    });
});

module.exports = router;