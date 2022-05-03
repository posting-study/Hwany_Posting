const express = require('express');

const app = express();
const nunjucks = require('nunjucks');

app.set('port', 80);
app.set('view engine', 'html');

// views는 템플릿 파일 저장 폴더명
nunjucks.configure('views', {
	express : app,
	watch : true
});

app.get('/', (req, res) => {
	res.render('index', { title : "express", isLoggedIn : true });
});

app.get('/include', (req, res) => {
	res.render('include/main');
});

app.get('/layout', (req, res) => {
	res.render('layout/body');
});

app.listen(app.get('port'));
