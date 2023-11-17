import { Atividade } from 'src/enum/atividade.enum';
import { Porte } from 'src/enum/porte.enum';

export class calculatorDTO {
  porte: Porte;
  peso: number;
  atividade: Atividade;
}
