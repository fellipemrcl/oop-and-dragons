import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _racesInstancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._racesInstancesCount += 1;
    this._maxLifePoints = 74;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._racesInstancesCount;
  }
}

export default Orc;
