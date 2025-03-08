#include <iostream>

using namespace std;

int main() {
    double num1, num2, resultado;
    char operacion;
    
    cout << "Ingrese el primer número: ";
    cin >> num1;
    cout << "Ingrese la operación (+, -, *, /): ";
    cin >> operacion;
    cout << "Ingrese el segundo número: ";
    cin >> num2;

    switch (operacion) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 != 0)
                resultado = num1 / num2;
            else {
                cout << "Error: No se puede dividir por cero." << endl;
                return 1;
            }
            break;
        default:
            cout << "Operación no válida." << endl;
            return 1;
    }

    cout << "El resultado es: " << resultado << endl;
    return 0;
}
