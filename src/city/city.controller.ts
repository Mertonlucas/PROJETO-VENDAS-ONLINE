import { Controller, Get, Param } from '@nestjs/common';
import { CityService } from './city.service';
import { CityEntity } from './entities/city.entity';

@Controller('city')
export class CityController {
    constructor(private readonly cityService: CityService) {}

    @Get('/:stateId')
    async getAllCitiesByStateId(
        @Param('stateId') stateId: number
    ): Promise<CityEntity[]> {
        return this.cityService.getAllCitiesByStateId(stateId);
    }
}

// no contexto do Nest.js (ou de muitos outros frameworks MVC), as solicitações do cliente 
// passam primeiro pelos controllers. O controller atua como um intermediário 
//entre as solicitações HTTP do cliente e a lógica de negócios do aplicativo.
// Quando o cliente faz uma solicitação relacionada à entidade "city", e;
// ssa solicitação é roteada para o controller correspondente. O controller processa a solicitação, 
// interage com os serviços apropriados (por exemplo, serviços que lidam com a lógica de negócios relacionada 
//     à cidade) e, em seguida, retorna uma resposta adequada ao cliente.