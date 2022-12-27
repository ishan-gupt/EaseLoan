from flask import Flask, request, jsonify, render_template
from flask_mysqldb import MySQL
import yaml
import random
import string
from mysql.connector import connect, Error

from mysql.connector.cursor import MySQLCursor
import numpy as np
import pickle; pickle.HIGHEST_PROTOCOL
app = Flask(__name__)
db = yaml.full_load(open('E:\CodeBase\Loan\db.yaml'))
#cnx = mysql.connector.connect(user=db['mysql_user'], password=db['mysql_password'], host=db['mysql_host'], database=db['mysql_db'])
def create_connection():
    try:
        conn = connect(
            host=db['mysql_host'],
            user=db['mysql_user'],
            password=db['mysql_password'],
            database=db['mysql_db']
        )
        return conn
    except Error as e:
        print(e)
    return None

def create_cursor(conn):
    try:
        cursor = conn.cursor()
        return cursor
    except Error as e:
        print(e)
    return None

def insert_data(cursor, id,amt, emimonth , status,email):
    try:
        sql = "INSERT INTO loan_data(id,amount,emimonths,status,user) VALUES(%s,%s,%s,%s,%s)"
        val = (id,amt, emimonth, status,email)
        cursor.execute(sql, val)
    except Error as e:
        print(e)

def fetch_data(cursor,param):
    sql='SELECT * FROM loan_data where user = %s'
    val=[(param)]
    cursor.execute(sql,val)
    rows = cursor.fetchall()
    return rows

def commit_changes(conn):
    conn.commit()

def close_connection(cursor, conn):
    cursor.close()
    conn.close()


with open(r"E:\CodeBase\Loan\loanmodel.pkl", 'rb') as f:
    model = pickle.load(f)

@app.route("/predict/<param>", methods=["POST"])
def predict(param):
    int_features = [int(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    feature=np.array(int_features)
    prediction = model.predict(final_features)
    print(prediction);
    output = round(prediction[0], 2)
    #prediction_text = "{}".format(output)
    ide = ''.join([random.choice(string.ascii_letters + string.digits) for n in range(32)])
    print(feature[3])
    print(prediction.item())
    if feature[3] == 240:
        month = 6
    elif feature[3] == 360:
        month = 12
    else:
        month = 0

    amt = feature[2].item()
    if prediction.item() == 1:
        stat = "ACCEPTED"
    elif prediction.item() == 2:
        stat = "REJECTED"
    else:
        stat = "NULL"

    conn = create_connection();
    cursor=create_cursor(conn);
    insert_data(cursor,ide,amt,month,stat,param)
    commit_changes(conn)
    close_connection(cursor,conn)
    return 'Sucess'



@app.route('/data/<param>', methods=['GET'])
def results(param):
    print(type(param))
    conn = create_connection()
    cursor = conn.cursor()
    rows = fetch_data(cursor,param)
    cursor.close()
    conn.close()
    return jsonify(rows)


if __name__ == "__main__":
    app.run(debug=True)
