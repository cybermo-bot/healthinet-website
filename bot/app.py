from flask import Flask, request, jsonify
from flask_cors import CORS
from chat_engine import get_bot_reply
from memory import memory  # make sure this import works correctly

app = Flask(__name__)
app.secret_key = 'my-healthinet-secret' 
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    # Reset memory at the beginning of each session/message
    memory["symptoms"] = []
    memory["follow_ups"] = []
    memory["history"] = []

    data = request.get_json()
    user_input = data.get("message", "")
    reply = get_bot_reply(user_input)
    return jsonify({"response": reply})

if __name__ == "__main__":
    app.run(debug=True)
