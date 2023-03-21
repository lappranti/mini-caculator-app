import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, DoCheck {
  currentTheme!: string;
  display: string = '0';
  previousDisplay: string = '0';

  ngDoCheck(): void {
    // Vérifiez si la propriété "display" a changé depuis la dernière détection de changement
    if (this.display !== this.previousDisplay) {
      // Affichez la nouvelle valeur de "display"
      let affichage = document.getElementById('input');
      if (affichage) affichage.innerHTML = this.display;
      // Mettez à jour la valeur précédente de "display"
      this.previousDisplay = this.display;
    }
  }
  ngOnInit(): void {
    this.currentTheme = 'theme1';
  }

  onKeyClick(input: string) {
    this.display =
      this.display == '0' || this.display == 'Error'
        ? input
        : this.display + input;
    console.log(this.display);
    //this.display = this.calculator(this.display);
  }

  calculator() {
    let expression = this.display;
    // Vérifie que l'expression contient uniquement des chiffres et des opérateurs valides (+, -, *, /)
    if (!/^[\d+\-*/.()]+$/.test(expression)) {
      this.display = expression;
    } else {
      // Évalue l'expression et retourne le résultat en tant que chaîne de caractères
      const result = eval(expression);
      this.display = result.toString();
    }
  }

  deleteLastChar() {
    this.display = this.display.length > 1 ? this.display.slice(0, -1) : '0';
  }

  onClear() {
    this.display = '0';
  }

  selectTheme(theme: string) {
    this.currentTheme = theme;
  }
}
