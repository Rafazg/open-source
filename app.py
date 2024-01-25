from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.secret_key = ''

login_manager = login_manager(app)
login_manager.login.view = 'pagina_entrar'

class User(UserMixin):
        pass

def load_user(user_id):

        
        pass

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/paginaCursos')
def pagina_cursos():
        return render_template('paginaCursos.html')


@app.route('/paginaEntrar')
def pagina_entrar():
        q
        return render_template('paginaEntrar.html')

@app.route('/paginaQuiz')
def paginha_quiz():
        return render_template('paginaQuiz.html')

@app.route('/paginaRegistro')
def pagina_registro():
        return render_template('paginaRegistro.html')

@app.route('/paginaResultado')
def pagina_resultado():
        return render_template('paginaResultado.html')

@app.route('/paginaSobre')
def pagina_sobre():
    return render_template('paginaSobre.html')

@app.route('/paginaUsuario')    
def pagina_usuario():
        return render_template('paginaUsuario.html')


if __name__ == "__main__":
    app.run(debug=True) 
    

    