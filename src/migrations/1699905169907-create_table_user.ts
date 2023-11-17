import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser1699905169907 implements MigrationInterface {
//O queryRunner permite executar transações no banco de dados, enquanto a função query permite executar consultas SQL.
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(` 
        CREATE TABLE public.user (
            id integer NOT NULL,
            name character varying NOT NULL,
            email character varying NOT NULL,
            cpf character varying NOT NULL,
            type_user int NOT NULL,
            phone character varying NOT NULL,
            password character varying NOT NULL,
            createdAt timestamp without time zone DEFAULT now() NOT NULL, 
            updatedAt timestamp without time zone DEFAULT now() NOT NULL,
            PRIMARY KEY (id)
        );

        CREATE SEQUENCE public.user_id_seq
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;

        ALTER SEQUENCE public.user_id_seq OWNED BY public.user.id;

        ALTER TABLE ONLY public.user ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE public.user;
        `);
    }
}
