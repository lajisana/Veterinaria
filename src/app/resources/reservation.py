from flask_restful import Resource
from app.models import Reservation
from app import db

class ReservationResource(Resource):
    def get(self):
        reservations = Reservation.query.all()
        return [{'id': r.id, 'name': r.name, 'table_id': r.table_id} for r in reservations]
