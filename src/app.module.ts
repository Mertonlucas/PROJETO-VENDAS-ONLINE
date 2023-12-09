import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AdressModule } from './address/adress.module';
import { CacheModule } from './cache/cache.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'], //caminho do arquivo de ambiente (.env) para o aplicativo em desenvolvimento.
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number (process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
      migrations: [`${__dirname}/migrations/{.ts,*.js}`],
      migrationsRun: true,
      
    }),
    UserModule,
    StateModule,
    CityModule,
    AdressModule,
    CacheModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}


//define o módulo principal do aplicativo NestJS, que importa o módulos
//configura o ambiente a partir de um arquivo .env e estabelece uma conexão com um banco de dados Postgres
//configura o TypeOrm para executar automaticamente as migrações na inicialização
