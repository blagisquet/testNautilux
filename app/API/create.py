import mysql.connector
from mysql.connector import Error
from datetime import date

try:
# connection au serveur mysql database interventions
  connection = mysql.connector.connect(host='localhost',
                                        database='interventions',
                                        user='root')
  # INSERT une nouvelle valeur dans la table intervention
  cursor = connection.cursor()
  mySql_insert_query = """INSERT INTO Intervention (title, description, name, localisation, date_int)
                          VALUES (%s, %s, %s, %s, %s) """
  insertIntervention = ('Réfection de la voirie', 'Refaire la route rue Saint Michel', 'JPG', 'rue Saint Michel', date(2020, 12, 27))
  cursor.execute(mySql_insert_query, insertIntervention)
  connection.commit()
  print("Record inserted successfully into Intervention table")

except mysql.connector.Error as error:
  print("Failed to insert into MySQL table {}".format(error))

finally:
  if (connection.is_connected()):
    cursor.close()
    connection.close()
    print("MySQL connection is closed")
