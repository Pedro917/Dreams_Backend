import {MigrationInterface, QueryRunner} from "typeorm";

export class userIdAddJoinColumn1623698543980 implements MigrationInterface {
    name = 'userIdAddJoinColumn1623698543980'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `dreams` DROP FOREIGN KEY `FK_37ed376765930ab008dced8ab96`");
        await queryRunner.query("ALTER TABLE `dreams` CHANGE `userId` `userId` int NULL");
        await queryRunner.query("ALTER TABLE `dreams` ADD CONSTRAINT `FK_37ed376765930ab008dced8ab96` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `dreams` DROP FOREIGN KEY `FK_37ed376765930ab008dced8ab96`");
        await queryRunner.query("ALTER TABLE `dreams` CHANGE `userId` `userId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `dreams` ADD CONSTRAINT `FK_37ed376765930ab008dced8ab96` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
