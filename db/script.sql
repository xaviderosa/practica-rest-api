create database if not exists empresa;
use empresa;
create table empleados(
	id int (11) not null auto_increment,
    nombre varchar(45) default null,
    salario int(11) default null,
    primary key (id)
);