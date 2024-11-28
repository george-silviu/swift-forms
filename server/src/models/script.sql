-- SwiftForms Database Administration Scripts

-- Connect to postgres using the "postgres" superuser and create database

-- create database
CREATE DATABASE swiftforms_db;

-- create a user that will be used for connection (login is added by default)
CREATE USER swiftforms_user WITH ENCRYPTED PASSWORD 'swiftpwdforms';

-- create a role 
CREATE ROLE swiftforms_role NOLOGIN;

-- add permissions to created role
GRANT USAGE ON SCHEMA public TO swiftforms_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO swiftforms_role;

-- assign role to user
GRANT swiftforms_role TO swiftforms_user;

-- restrict other attributes from user
ALTER USER swiftforms_user NOSUPERUSER NOCREATEDB NOCREATEROLE;

