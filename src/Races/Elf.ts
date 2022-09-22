import Race from './Race';

export default class Elf extends Race {
  static instances = 0;
  private _maxLifePoints:number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances():number {
    return Elf.instances;
  }
}