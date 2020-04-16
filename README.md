# Automata
Ejercicio para clase de IA

## Lenguaje
![Lenguaje a definir para gramática](Images/Lenguaje.PNG)

* n es menor que m
* n y m son mayores a 0

### Ejemplos:

* cuando n = 1, m = 2:
abbcccc

* cuando n = 2, m = 3:
aabbbccccccc

* cuando n = 3, m = 4:
aaabbbbcccccccccc

* cuando n = 2, m = 5:
aabbbbbccccccccc

## Patrones en cadenas

* siempre están en el orden a, b ,c
* b siempre es mayor que a
* c siempre es mayor que a y b
* c sería dos veces a,  mas  numero de veces b

G = {Σ, V, P, S}

Σ = {a, b, c}
V = {S, W, T, U}

P = {(1)S->WTU; (2)W->a; (3)W->aW; (4)T->b; (5)T->bT; (6)U->c; (7)U-cU}

abbcccc:    (1)WTU
            (2)aTU
            (5)abTU
            (4)abbU
            (7)abbcU
            (7)abbccU
            (7)abbcccU
            (6)abbcccc