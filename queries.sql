




    CREATE TABLE class_labenu(
        id INT PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL,
        start_date DATE NOT NULL,
        end_date DATE NOT NULL,
        module ENUM ('0','1','2','3','4','5','6','7') DEFAULT '0'

    );
        CREATE TABLE student_labenu(
        id INT PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        birth_date DATE NOT NULL,
        class_id INT NOT NULL,
        FOREIGN KEY (class_id) REFERENCES class_labenu(id)
    );

    CREATE TABLE teacher_labenu(
        id INT PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        birth_date DATE NOT NULL,
        class_id INT NOT NULL,
        FOREIGN KEY (class_id) REFERENCES class_labenu(id)
    );

    CREATE TABLE student_hobbies (
        id INT PRIMARY KEY NOT NULL,
        name VARCHAR(255) NOT NULL
    );

    CREATE TABLE student_hobbies_labenu(
        id INT PRIMARY KEY NOt NULL,
        student_id INT NOT NULL,
        hobby_id INT NOT NULL,
        FOREIGN KEY(student_id) REFERENCES student_labenu(id),
        FOREIGN KEY(hobby_id) REFERENCES student_hobbies(id)   
    ); 

    CREATE TABLE teacher_specialty(
        id INT PRIMARY KEY NOT NULL,
        specialty ENUM('React', 'Redux', 'CSS', 'Testes', 'Typescript','Programação Orientada a Objetos', 'Backend')
    );

    CREATE TABLE teacher_speacialty_labenu (
        id INT PRIMARY KEY NOT NULL,
        teacher_id INT NOT NULL,
        specialty_id INT NOT NULL,
        FOREIGN KEY (teacher_id) REFERENCES teacher_labenu(id),
        FOREIGN KEY (specialty_id) REFERENCES teacher_specialty(id)
        );
