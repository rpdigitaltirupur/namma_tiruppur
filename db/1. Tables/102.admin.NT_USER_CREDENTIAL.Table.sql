-- Table: admin.NT_USER_CREDENTIAL

-- DROP TABLE IF EXISTS admin.nt_user_credential;

CREATE TABLE IF NOT EXISTS admin.nt_user_credential
(
    id INT GENERATED ALWAYS AS IDENTITY (START WITH 1000 INCREMENT BY 1) NOT NULL,
	user_id INT NOT NULL,
    pwd VARCHAR(500) NOT NULL,
    salt VARCHAR(32) NOT NULL,
    CONSTRAINT "NT_USER_CREDENTIAL_pkey" PRIMARY KEY (id),
	CONSTRAINT "NT_USER_CREDENTIAL_NT_USER_fkey" FOREIGN KEY(user_id) REFERENCES admin.nt_user(id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS admin.nt_user_credential
    OWNER to postgres;
	
	
