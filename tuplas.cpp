#include <iostream>
#include <array>
#include <vector>

using namespace std;

int main() {
    // Crear una tupla inmutable (usamos std::array para tamaño fijo)
    array<int, 4> a = {1, 2, 3, 4};

    // Imprimir toda la "tupla"
    cout << "Tupla: ";
    for (int i : a) {
        cout << i << " ";
    }
    cout << endl;

    // Acceder a un elemento por índice
    cout << "Primer elemento: " << a[0] << endl;

    // Acceder a un rango (en C++ no se pueden hacer cortes como en Python)
    cout << "Primeros dos elementos: " << a[0] << " " << a[1] << endl;

    // Obtener el tamaño del "array"
    cout << "Tamaño de la tupla: " << a.size() << endl;

    // Ver si un elemento está en la tupla
    int buscar = 5;
    bool encontrado = false;
    for (int i : a) {
        if (i == buscar) {
            encontrado = true;
            break;
        }
    }
    cout << "¿5 está en la tupla? " << (encontrado ? "Sí" : "No") << endl;

    buscar = 1;
    encontrado = false;
    for (int i : a) {
        if (i == buscar) {
            encontrado = true;
            break;
        }
    }
    cout << "¿1 está en la tupla? " << (encontrado ? "Sí" : "No") << endl;

    // Convertir a lista modificable (usamos std::vector)
    vector<int> lista(a.begin(), a.end());

    // Imprimir la lista
    cout << "Lista modificable: ";
    for (int i : lista) {
        cout << i << " ";
    }
    cout << endl;

    // Agregar un elemento
    lista.push_back(5);

    // Imprimir la lista después de modificarla
    cout << "Lista después de agregar 5: ";
    for (int i : lista) {
        cout << i << " ";
    }
    cout << endl;

    return 0;
}
