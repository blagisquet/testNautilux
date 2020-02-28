import mysql.connector
from mysql.connector import Error

try: 
  connection = mysql.connector.connect(host='localhost',
                                        database='interventions',
                                        user='root')
  cursor = connection.cursor()
  print("Displaying interventions before deleting it")
  sql_select_query = """ SELECT * FROM Intervention WHERE id = 5"""
  cursor.execute(sql_select_query)
  record = cursor.fetchone()
  print(record)

  sql_Delete_query = """DELETE FROM Intervention WHERE id = 5"""
  cursor.execute(sql_Delete_query)
  connection.commit()

  cursor.execute(sql_select_query)
  records = cursor.fetchall()
  if len(records) == 0:
    print("\nRecord deleted successfully")

except mysql.connector.Error as error:
  print("Failed to delete record from table: {}".format(error))
finally:
  if (connection.is_connected()):
    cursor.close()
    connection.close()
    print("MySQL connection is closed")                              
  