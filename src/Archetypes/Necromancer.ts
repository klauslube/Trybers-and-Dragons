import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Necromancer extends Archetypes {
  static instances = 0;
  private _energyType: EnergyType;
  constructor(name:string) {
    super(name);
    Necromancer.instances += 1;
    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return Necromancer.instances;
  }
}