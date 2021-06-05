--To add table relationships
ALTER TABLE score ADD CONSTRAINT set_fk FOREIGN KEY (set_id) REFERENCES question_sets(set_id);
alter table question_sets add constraint category_fk1 foreign key (category_id) references set_category(category_id);
alter table question_sets add constraint difficulty_fk foreign key (difficulty_id) references set_difficulty(difficulty_id);
alter table score add constraint user_fk foreign key (user_id) references users(user_id);
alter table users add constraint role_fk foreign key (role_id) references user_role(role_id);
alter table users add constraint status_fk foreign key (status_id) references user_status(status_id);

--Populate Categories 
insert into set_category(category_id, category)values
(9, 'General Knowledge'),
(10, 'Books'),
(11, 'Film'),
(12, 'Music'),
(13, 'Musicals & Theatres'),
(14, 'Television'),
(15, 'Video Games'),
(16, 'Board Games'),
(17, 'Science & Nature'),
(18, 'Science: Computers'),
(19, 'Science: Mathematics'),
(20, 'Mythology'),
(21, 'Sports'),
(22, 'Geography'),
(23, 'History'),
(24, 'Politics'),
(25, 'Art'),
(26, 'Celebrities'),
(27, 'Animals'),
(28, 'Vehicles'),
(29, 'Entertainment: Comics'),
(30, 'Science: Gadgets'),
(31, 'Entertainment: Japanese Anime & Manga'),
(32, 'Entertainment: Cartoon & Animations');

--Populate Difficulties
insert into set_difficulty(difficulty_id, difficulty)values
(1, 'easy'),
(2, 'medium'),
(3, 'hard');

--Populate User Roles
insert into user_role(role_id, "role")values
(1, 'Player'),
(2, 'Admin');

--Populate User Status
insert into user_status(status_id, status)values
(1, 'Permitted'),
(2, 'Banned');

--Populate Users
insert into users(email, "password", role_id, status_id, username)values


--Populate Question sets
insert into question_sets(category_id, difficulty_id, num_questions)values
