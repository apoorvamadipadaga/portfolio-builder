

create table portfolios (
	id int primary key not null, 
    uname varchar(20),
    pin int,
    name varchar(20), 
    header varchar(20),
    description varchar(20),
    
    
);

create table Projects ( 
	id int primary key not null, 
    pid int,
    title varchar(20),
    description varchar(20), 
    start_date datetime, 
    end_date datetime, 
    foreign key (pid) references portfolios(id)
);

create table skills (
	id int primary key,
    pid int, 
   skillname varchar(20)
	foreign key (pid) references portfolios(id)
);

create table achievements (
	id int primary key, 
    pid int,
    achievement varchar(20),
    foreign key (pid) references portfolios(id)
);
