--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.students (
    _id integer NOT NULL,
    student_name character varying(255),
    email character varying(255),
    status character varying(255)
);


ALTER TABLE public.students OWNER TO postgres;

--
-- Name: students__id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.students__id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.students__id_seq OWNER TO postgres;

--
-- Name: students__id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.students__id_seq OWNED BY public.students._id;


--
-- Name: students _id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students ALTER COLUMN _id SET DEFAULT nextval('public.students__id_seq'::regclass);


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.students (_id, student_name, email, status) FROM stdin;
87	troy	troy@gmail.com	active
88	chan	chan@gmail.com	active
89	lyka	lyka@gmail.com	active
16	test	test@gmail.com	deleted
7	steven	steven@gmail.com	active
45	test	test@gmail.com	deleted
5	update	update@gmail.com	deleted
14	jane	jane@gmail.com	active
15	cindy	cindy@gmail.com	deleted
3	mary	mary@gmail.com	active
4	ban2	ban@gmail.com	active
109	\N	\N	active
110	\N	\N	active
111	\N	\N	active
112	\N	\N	active
\.


--
-- Name: students__id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.students__id_seq', 112, true);


--
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (_id);


--
-- PostgreSQL database dump complete
--

