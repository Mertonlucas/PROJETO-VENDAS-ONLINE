// O algoritmo em questão é uma função chamada "getAllCitiesByStateId". Ela busca todas as 
// cidades associadas a um estado específico no banco de dados através do cache que ajuda no desempenho do sistema.

import { Inject, Injectable } from '@nestjs/common';
import { CityEntity } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()

export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getAllCitiesByStateId(stateId: number): Promise<CityEntity[]> {
    const citiesCache: CityEntity[] = await this.cacheManager.get(
      `state_${stateId}`,
    );

    if (citiesCache) {
      return citiesCache;
    }

    const cities = await this.cityRepository.find({
      where: {
        stateId,
      },
    });
    await this.cacheManager.set(`state_${stateId}`, cities); 

    return cities;
  }
}
