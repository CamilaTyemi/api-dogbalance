import { Injectable } from '@nestjs/common';
import { ICalculator } from './interface/calculator.interface';
import { Porte } from './enum/porte.enum';
import { Atividade } from './enum/atividade.enum';

type resultadoCalculator = {
  minimo: number;
  maximo: number;
};

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  calculator({ atividade, peso, porte }: ICalculator): resultadoCalculator {
    let resultado = { minimo: 0, maximo: 0 };
    switch (porte) {
      case Porte.MINIATURA:
        resultado = { minimo: peso * 0.07, maximo: peso * 0.1 };
        break;
      case Porte.PEQUENO:
        resultado = { minimo: peso * 0.04, maximo: peso * 0.06 };
        break;
      case Porte.MEDIO:
        resultado = { minimo: peso * 0.04, maximo: peso * 0.05 };
        break;
      case Porte.GRANDE:
        resultado = { minimo: peso * 0.03, maximo: peso * 0.04 };
        break;
    }

    switch (atividade) {
      case Atividade.SEDENTARIO:
        resultado = this.calculatorAtividade(resultado, 1.2);
        break;
      case Atividade.LEVE:
        resultado = this.calculatorAtividade(resultado, 1.4);
        break;
      case Atividade.MODERADO:
        resultado = this.calculatorAtividade(resultado, 1.6);
        break;
      case Atividade.ATIVO:
        resultado = this.calculatorAtividade(resultado, 1.8);
        break;
    }
    return resultado;
  }

  private calculatorAtividade(
    dado: resultadoCalculator,
    porcentagem: number,
  ): resultadoCalculator {
    return {
      minimo: dado.minimo * porcentagem,
      maximo: dado.maximo * porcentagem,
    };
  }
}
