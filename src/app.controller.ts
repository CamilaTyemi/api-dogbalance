import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { calculatorDTO } from './dto/calculator.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('calculator')
  calculator(@Body() data: calculatorDTO): { minimo: number; maximo: number } {
    return this.appService.calculator({
      atividade: data.atividade,
      peso: data.peso,
      porte: data.porte,
    });
  }
}
