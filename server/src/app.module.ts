import { Module } from '@nestjs/common';
import { TodoModule } from "./todos/todo.module";
import { SequelizeModule } from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import {databaseConfig} from "./config/configuration";
import {SequelizeConfigService} from "./config/sequelizeConfig";

@Module({
  imports: [
      SequelizeModule.forRootAsync({
        imports: [ConfigModule],
        useClass: SequelizeConfigService,
      }),
      ConfigModule.forRoot({
        load: [databaseConfig],
      }),
      TodoModule
  ]
})
export class AppModule {}
