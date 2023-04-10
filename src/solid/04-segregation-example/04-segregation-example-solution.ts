interface run {
  run(): void;
}

interface jump {
  jump(): void;
}

interface throwFireBalls {
  throwFireBalls(): void;
}

interface slideInPipes {
  slideInPipes(): void;
}

interface climbTrees {
  climbTrees(): void;
}

interface throwKisses {
  throwKisses(): void;
}

interface runWithHighHeels {
  runWithHighHeels(): void;
}

interface swim {
  swim(): void;
}

interface throwShells {
  throwShells(): void;
}


class MarioBrossCharacter implements run, jump, throwFireBalls, slideInPipes, climbTrees {

  public jump() { return 200 }
  public throwFireBalls() { }
  public slideInPipes() { }
  public run() { }
  public climbTrees() { }

}

class LuigiBrossCharacter implements jump, throwFireBalls, slideInPipes, run, climbTrees, throwKisses {

  public jump() { return 150 }
  public throwFireBalls() { }
  public slideInPipes() { }
  public run() { }
  public climbTrees() { }
  public throwKisses() { }
}

class PrincessCharacter implements jump, throwKisses, runWithHighHeels, climbTrees {
  public jump() { return 500 }
  public throwKisses() { }
  public runWithHighHeels() { }
  public climbTrees() { }

}

class TurtleCharacter implements jump, swim, throwShells {
  public jump() { return 85 }
  public swim() { }
  public throwShells() { }
}
