import mysql.connector
from mysql.connector import Error

try: 
  # connection au serveur mysql database interventions
  connection = mysql.connector.connect(host='localhost',
                                       database='interventions',
                                       user='root')

  # SELECT la totalité de la table Intervention      
  sql_select_Query = "select * from Intervention"
  cursor = connection.cursor()
  cursor.execute(sql_select_Query)
  records = cursor.fetchall()
  print("Total number of rows in Intervention is: ", cursor.rowcount)
  # Récupération de chaque entrée de la table Intervention
  print("\nPrinting each intervention record")
  for row in records:
      print("Id = ", row[0], )
      print("Title = ", row[1])
      print("Description = ", row[2])
      print("Name = ", row[3])
      print("Localisation = ", row[4])
      print("Date = ", row[5], "\n")
  

  #donne les informations à propos du serveur mysql si connecté       
  if connection.is_connected():
    db_Info = connection.get_server_info()
    print("Connected to MySQL Server version ", db_Info)
    cursor = connection.cursor()
    cursor.execute("select database();")
    record = cursor.fetchone()
    print("You're connected to database: ", record)

# renvoie les erreurs eventuelles
except Error as e:
  print("Error while connecting to MySQL", e)
# finally:
#   if (connection.is_connected()):
#     cursor.close()
#     connection.close()
#     print("MySQL connection is closed")