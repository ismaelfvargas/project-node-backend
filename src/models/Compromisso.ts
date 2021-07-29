import { v4 as uuid } from 'uuid';

class Compromisso {
    id: string;

    profissional: string;

    data: Date;

    constructor(profissional: string, data: Date) {
        this.profissional = profissional;
        this.data = data;
        this.id = uuid();
    }
}

export default Compromisso;