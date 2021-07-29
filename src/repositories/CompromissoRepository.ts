import Compromisso from "../models/Compromisso";
import {isEqual} from "date-fns";

class CompromissoRepository {
    private compromissos: Compromisso[];

    constructor() {
        this.compromissos = [];
    }

    // o findByDate vai encontra um compromisso em uma data especifica e retorna o "Compromisso" caso encontre
    // se não encontrar, vai retornar null
    public findByDate(data: Date): Compromisso | null {
        // essa função vai pegar a dataAnalise(hora e data) que foi selecionado e percorrer todo o array de datas que já foram salvas
        const procurarUmCompromisso = this.compromissos.find( compromisso =>
            isEqual(data, compromisso.data)
        );

        return procurarUmCompromisso;
    }

    // Metodo de criação do compromisso, com as informações necessárias da entidade p/ criar.
    public create(profissional: string, data: Date): Compromisso {
    const compromisso = new Compromisso(profissional, data);

    // vai salvar o compromisso criado, no array de compromissos
    this.compromissos.push(compromisso);

    // retorna o compromisso que foi criado
    return compromisso;
    }
}

export default CompromissoRepository;
