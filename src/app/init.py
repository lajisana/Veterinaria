from flask import Flask
from app.routes import register_routes  # ← esta función la crearemos

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'mi_clave_secreta'
    
    register_routes(app)  # ← registrar tus rutas

    return app
