create database ResumeDB

create table UserDetails(
  UserId bigint primary key not null,
  UserFullName varchar(25),
  UserJob varchar(20),
  UserAddress varchar(25),
  UserEmail varchar(35),
  UserPhone varchar(10),
  UserPhotoPath varchar(200)
);

create table Skills(
	SkillId bigint primary key not null,
	UserId bigint not null,
	SkillName varchar(20),
	SkillPrecent smallint,
	foreign key (UserId) references UserDetails(UserId)
);
create table Languages(
	LanguagesId bigint primary key not null,
	UserID BIGINT not null,
	LanguagesName varchar(15),
	LanguagesPrecent smallint,
	foreign key (UserId) references UserDetails(UserId)
);
create table WorkExperience(
	WorkExperienceId bigint primary key not null,
	UserID BIGINT NOT NULL,
	JobTitle varchar(50),
	JobStartDate Date,
	JobEndDate date,
	JobSummary varchar(500),
	foreign key (UserId) references UserDetails(UserId)
);
create table Education(
	EducationId bigint primary key not null,
	UserID BIGINT NOT NULL,
	NameSchool varchar(25),
	EducationStartDate date,
	EducationEndDate date,
	EducationTitle varchar(50),
	EducationDescription varchar(1000),
	foreign key (UserId) references UserDetails(UserId)
);

ALTER TABLE UserDetails
ALTER COLUMN UserJob VARCHAR(35)
ALTER TABLE UserDetails
ALTER COLUMN UserEmail VARCHAR(45)
ALTER TABLE UserDetails
ALTER COLUMN UserPhotoPath VARCHAR(800)
ALTER TABLE Education
ALTER COLUMN NameSchool VARCHAR(45);

INSERT INTO UserDetails(UserId,UserFullName,UserJob,UserAddress,UserEmail,UserPhone)
VALUES 
(1,'Eden Golan', 'Software Developer', 'Israel', 'Eden9123@gmail.com','0522877510')

INSERT INTO Skills(SkillId, UserId, SkillName, SkillPrecent)
VALUES 
(1,1,'Html',100),
(2,1,'Css', 100),
(3,1,'JavaScript',95)

INSERT INTO Languages(LanguagesId, UserID, LanguagesName,LanguagesPrecent)
VALUES
(1, 1,'Hebrew',100),
(2, 1,'English',90),
(3, 1,'Franch',80)

INSERT INTO WorkExperience(WorkExperienceId, UserID,JobTitle,JobStartDate,JobEndDate,JobSummary)
VALUES
(1, 1,'Jerusalem Municipality – residence service.','2022-11-01','2023-03-30','Residence service in Payment center, property tax and parking tickets. Managed residence services at Payment Center, specializing in property tax and parking ticket administration. Handled inquiries, resolved disputes and processed payments. Provided prompt and accurate service, contributing to process improvements and enhancing efficiency.'),
(2,1,'Army - Observer','2020-08-24','2022-08-23','Performed observational duties at Israels borders, monitoring screens and cameras to detect and report any suspicious activities. Utilized the Command & Control System to ensure effective surveillance and prompt response to potential security threats.')

INSERT INTO Education(EducationId,UserID,NameSchool,EducationStartDate,EducationEndDate,EducationTitle,EducationDescription)
VALUES 
(1, 1,'Sela College','2023-04-01','2024-04-01','Course Software Development','I have developed proficiency in server-side development, particularly excelling in the C# language within the ASP.NET framework. On the client-side, I demonstrate expertise in HTML, CSS, and JavaScript, with specialized knowledge in Angular and React frameworks. Additionally, I possess a strong command of SQL databases, particularly SQL Server. Furthermore, I am adept at deploying applications to the Azure cloud platform and proficient in utilizing Git for version control.
My motivation and ability to quickly grasp new concepts enable me to work effectively and independently.')