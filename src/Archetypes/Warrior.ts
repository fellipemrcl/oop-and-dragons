import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _archetypesInstancesCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._archetypesInstancesCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._archetypesInstancesCount;
  }
}

export default Warrior;
