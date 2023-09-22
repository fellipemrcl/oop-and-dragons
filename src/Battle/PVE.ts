import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _character: Fighter;
  private _enemies: (SimpleFighter | Fighter)[];

  constructor(character: Fighter, enemies: (SimpleFighter | Fighter)[]) {
    super(character);
    this._character = character;
    this._enemies = enemies;
  }

  fight(): number {
    let battleResult = 0;
    this._enemies.forEach((enemy) => {
      while (this._character.lifePoints > 0 && enemy.lifePoints > 0) {
        this._character.attack(enemy);
        enemy.attack(this._character);

        if (this._character.lifePoints <= 0) {
          battleResult = -1;
        } else {
          battleResult = 1;
        }
      }
    });
    return battleResult;
  }
}

export default PVE;
