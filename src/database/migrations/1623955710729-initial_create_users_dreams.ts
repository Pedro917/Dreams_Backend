import {MigrationInterface, QueryRunner} from "typeorm";

export class initialCreateUsersDreams1623955710729 implements MigrationInterface {
    name = 'initialCreateUsersDreams1623955710729'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "age" integer NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dreams" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, "url" character varying NOT NULL, "userId" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_b4f37d6173d7b9d9db610860082" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "dreams" ADD CONSTRAINT "FK_37ed376765930ab008dced8ab96" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dreams" DROP CONSTRAINT "FK_37ed376765930ab008dced8ab96"`);
        await queryRunner.query(`DROP TABLE "dreams"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
