from flask_restful import Resource
from app.models import Table
from app import db

class TableResource(Resource):
    def get(self):
        tables = Table.query.all()
        return [{'id': t.id, 'number': t.number} for t in tables]
