export class Pokemon {
    id!: number;
    hp!: number;
    cp!: number;
    name!: string;
    picture?: string;
    types!: Array<string>;
    created?: Date;

    constructor(
        hp: number = 100,
        cp: number = 10,
        name: string = 'Entrer un nom...',
        picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png Remplacer xxx par le numéro du pokémon',
        types : string[] = ['Normal'],
        created: Date = new Date()
    ){
        this.hp = hp;
        this.cp = cp;
        this.name = name;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }

}