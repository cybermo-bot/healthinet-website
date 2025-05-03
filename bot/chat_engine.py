import ollama
from flask import session

def build_prompt(user_input, memory):
    return f"""
You are a helpful and friendly virtual medical assistant. Respond in English.

"{user_input}"

Known symptoms so far: {', '.join(memory.get('symptoms', []) or ['none'])}
Follow-up questions already asked: {', '.join(memory.get('follow_ups', []) or ['none'])}

Your job is to:
1. greet the user warmly and ask how you can help them with their health today.
2. Acknowledge the discomfort briefly and empathetically.
3. Ask some smart, relevant follow-up question (based on what they said).
4. Do not explain or suggest too much at once — wait for their next reply.
 when enough details are known:
- You give simple advice (rest, hydration, etc.).
- If needed, suggest seeing a general practitioner or a specialist.
- Only mention you're not a doctor when suggesting medical action.

Be conversational, clear, and medically reasonable.
"""

def get_bot_reply(user_input):
    greetings = ["hello", "hi", "hey", "good morning", "good evening"]
    if user_input.lower().strip() in greetings:
        return "Hi there! 😊 How can I assist you with your health today?"

    # Initialize session memory
    session.setdefault('symptoms', [])
    session.setdefault('follow_ups', [])
    session.setdefault('history', [])

    session['history'].append({"user": user_input})

    # Capture symptom if pain-related keywords are used
    if any(word in user_input.lower() for word in ["pain", "ache", "hurt", "sore", "throbbing", "burning"]):
        session['symptoms'].append(user_input)

    prompt = build_prompt(user_input, session)

    response = ollama.chat(model='mistral', messages=[
        {"role": "user", "content": prompt}
    ])
    reply = response['message']['content']
    session['history'].append({"bot": reply})

    return reply
