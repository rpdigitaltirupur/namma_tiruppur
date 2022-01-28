-- Table: admin.NT_USER

-- DROP TABLE IF EXISTS admin.nt_user;

CREATE TABLE IF NOT EXISTS admin.nt_user
(
    id INT GENERATED ALWAYS AS IDENTITY (START WITH 1000 INCREMENT BY 1) NOT NULL,
    user_nme VARCHAR(15) NOT NULL UNIQUE,
    first_nme VARCHAR(30) NOT NULL,
    last_nme VARCHAR(30) NOT NULL,
    dob date NOT NULL,
    gender INT NOT NULL,
    phone_nbr VARCHAR(30),
    mobile_nbr VARCHAR(30) NOT NULL,
    email VARCHAR(250) NOT NULL,
    CONSTRAINT "NT_USER_pkey" PRIMARY KEY (id),
	CONSTRAINT "NT_USER_NT_GENDER_fkey" FOREIGN KEY(gender) REFERENCES admin.nt_gender(id)
	
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS admin.nt_user
    OWNER to postgres;
	
	
