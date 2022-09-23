import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player2: Fighter;
  constructor(
    player1:Fighter,
    player2: Fighter,
  ) {
    // const player = super(player1);
    super(player1);
    this._player2 = player2;
    // super.fight();
  }

  fight(): number {
    // while (this.player.lifePoints > 0) {
    this.player.attack(this._player2);
    // this._player2.attack(this.player);
    console.log(this.player.lifePoints, this._player2.lifePoints);
    // }
    return this.player.lifePoints;
  }
}