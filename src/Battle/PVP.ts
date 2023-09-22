import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _firstChar: Fighter;
  private _secondChar: Fighter;

  constructor(firstChar: Fighter, secondChar: Fighter) {
    super(firstChar);
    this._firstChar = firstChar;
    this._secondChar = secondChar;
  }

  fight(): number {
    while (this._firstChar.lifePoints > 0 && this._secondChar.lifePoints > 0) {
      this._firstChar.attack(this._secondChar);
      this._secondChar.attack(this._firstChar);
    }
  
    if (this._firstChar.lifePoints <= 0) {
      return -1;
    } 
    return 1;
  }
}

export default PVP;
