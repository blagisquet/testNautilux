import mysql.connector
from mysql.connector import Error

try:
  # connection au serveur mysql database interventions
  connection = mysql.connector.connect(host='localhost',
                                      database='interventions',
                                      user='root')

  cursor = connection.cursor()
  #Update single record now
  sql_update_query = """Update Intervention SET title = %s, description = %s, name = %s, localisation = %s, date_int = %s where id= %s"""
  title = "Changer abribus"
  description = "Abribus boulevard des Belges à changer"
  name = "DC"
  localisation = "Boulevard des Belges"
  date_int = '2020-10-25'
  id = 5
  input = (title, description, name, localisation, date_int, id)
  cursor.execute(sql_update_query, input)
  connection.commit()
  print("Record Updated successfully")

except mysql.connector.Error as error:
  print("Failed to update record to database: {}".format(error))

finally:
  if (connection.is_connected()):
    cursor.close()
    connection.close()
    print("MySQL connection is closed")
                                  