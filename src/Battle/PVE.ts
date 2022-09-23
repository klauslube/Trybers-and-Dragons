import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player1:Fighter;
  private _monster:SimpleFighter[];
  constructor(player1:Fighter, monster:SimpleFighter[]) {
    super(player1);
    this._player1 = player1;
    this._monster = monster;
  }

  fight(): number {
    this._monster.forEach((monster) => {
      while (this._player1.lifePoints !== -1 && monster.lifePoints !== -1) {
        this._player1.attack(monster);
        monster.attack(this._player1);
      }
    });
    return super.fight();
  }
}