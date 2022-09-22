import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static instances = 0;
  private _energyType: EnergyType;
  constructor(name:string) {
    super(name);
    Mage.instances += 1;
    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return Mage.instances;
  }
}