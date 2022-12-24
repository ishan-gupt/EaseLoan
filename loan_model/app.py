from flask import Flask, request, jsonify, render_template
from flask_mysqldb import MySQL
import yaml
import random
import string
import mysql.connector
from mysql.connector.cursor import MySQLCursor
import numpy as np
import pickle; pickle.HIGHEST_PROTOCOL
app = Flask(__name__)
db = yaml.full_load(open('E:\CodeBase\Loan\db.yaml'))
cnx = mysql.connector.connect(user=db['mysql_user'], password=db['mysql_password'], host=db['mysql_host'], database=db['mysql_db'])

with open(r"E:\CodeBase\Loan\loanmodel.pkl", 'rb') as f:
    model = pickle.load(f)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():
    int_features = [int(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    feature=np.array(int_features)
    prediction = model.predict(final_features)
    print(prediction);

    output = round(prediction[0], 2)
    prediction_text = "{}".format(output)
    if feature[3] == 240:
        month = 6
    elif feature[3] == 360:
        month = 12

    amt=feature[2].item()

    print(type(amt))
    if prediction==1:
        stat="ACCEPTED"
    elif prediction==2:
        stat="REJECTED"
    print(stat)
    cur = cnx.cursor()
    cur.execute("INSERT INTO loan_data(amount,emimonths,status) VALUES(%s,%s,%s)", (amt, month, stat))
    return 'Sucess'



@app.route('/results', methods=['POST'])
def results():
    data = request.get_json(force=True)
    prediction = model.predict([np.array(list(data.values()))])

    output = prediction[0]
    return jsonify(output)


if __name__ == "__main__":
    app.run(debug=True)
