from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

products = [
    {"id": 1, "name": "Heifer", "price": 50000, "image": "https://i.pinimg.com/1200x/dd/21/ed/dd21edfd95be8d006545cf5e31f282e4.jpg"},
    {"id": 2, "name": "Sukuma Wiki", "price": 50, "image": "https://i.pinimg.com/736x/58/dd/9d/58dd9d1ac2cfc92f33e43c3a07a1123f.jpg"},
    {"id": 3, "name": "Spinach", "price": 60, "image": "https://i.pinimg.com/1200x/b6/c5/97/b6c597c76d4a9225f27428ce3621443d.jpg"},
]

@app.route("/api/products", methods=["GET"])
def get_products():
    return jsonify(products)

@app.route("/api/order", methods=["POST"])
def place_order():
    data = request.json
    return jsonify({"message": "Order received!", "order": data}), 201

import os

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=False, host="0.0.0.0", port=port)

