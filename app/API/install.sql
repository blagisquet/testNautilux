CREATE DATABASE Interventions;

CREATE TABLE Intervention (
  id SMALLINT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255),
  description TEXT,
  name VARCHAR(120),
  localisation VARCHAR(255)
  date_int DATE,
  PRIMARY KEY (id)
);

INSERT INTO Intervention (title, description, name, localisation, date_int)
VALUES
('Réparation du trottoir', 'Trottoir en mauvais état', 'JPG', 'rue du Douanier', '2020-04-01'),
('Changement abribus', 'Abribus Lemoine à changer', 'CS', 'Boulevard des Belges', '2020-01-01'),
('Panneau travaux', 'Enlever le panneau rue Michelet', NULL, '12 rue Michelet');