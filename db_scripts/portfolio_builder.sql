create table users (
	id int primary key not null,
    username varchar(20), 
    email varchar(20),
    password varchar(20)
);

create table portfolios (
	id int primary key not null, 
    uid int,
    name varchar(20), 
    header varchar(20),
    description varchar(20),
    published bit default 0,
    created_date datetime,
    modified_date datetime,
    foreign key (uid) references users(id)
);

create table projects ( 
	id int primary key not null, 
    pid int,
    title varchar(20),
    description varchar(20), 
    start_date datetime, 
    end_date datetime, 
    created_date datetime, 
    modified_date datetime,  
    foreign key (pid) references portfolios(id)
);

create table skills (
	id int primary key,
    pid int, 
    created_date datetime,
    modified_date datetime,
	foreign key (pid) references portfolios(id)
);

create table achievements (
	id int primary key, 
    pid int,
    achievement varchar(20),
    created_date datetime,
    modified_date datetime,
    foreign key (pid) references portfolios(id)
);
