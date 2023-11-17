import { Atividade } from 'src/enum/atividade.enum';
import { Porte } from 'src/enum/porte.enum';

export interface ICalculator {
  peso: number;
  atividade: Atividade;
  porte: Porte;
}
