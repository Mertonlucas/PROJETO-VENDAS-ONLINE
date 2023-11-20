import { MigrationInterface, QueryRunner } from "typeorm"

export class InsertInCity1700511447677 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        ALTER TABLE state
        ADD uf varvhar(2) NOT NULL;
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        ALTER TABLE state
        drop uf;
        `);
    }

}
