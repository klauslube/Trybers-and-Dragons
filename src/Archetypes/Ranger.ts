import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Ranger extends Archetypes {
  static instances = 0;
  private _energyType: EnergyType;
  constructor(name:string) {
    super(name);
    Ranger.instances += 1;
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return Ranger.instances;
  }
}