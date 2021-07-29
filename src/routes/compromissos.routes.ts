import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Compromisso from "../models/Compromisso";
import CompromissoRepository from "../repositories/CompromissoRepository";

const compromissosRouter = Router();
const compromissoRepository = new CompromissoRepository();

compromissosRouter.post('/', (request, response) => {
    const { profissional, data } = request.body;

    // Vai validar se a variável encontrarUmAgendamentoData é true (ou seja, se já existe a mesma data e hora marcada) então, retorna um erro
    if (encontrarUmAgendamentoData) {
        return response
            .status(400)
            .json({message: 'Já existe agendamento marcado nesse horário, escolha outro!!'});
    }

    // Depois de tudo, ele vai chamar um compromissoRepository, que foi criado na linha 7 e vai retornar os dados em json
    const compromisso = compromissoRepository.create(profissional, data);
    return response.json(compromisso);

});

export default compromissosRouter;