#include <iostream>
#include <vector>
#include <map>

using namespace std;

int main() {
    vector<string> nombres = {"Ana", "Pablo", "Diego", "Carmen"};

    cout << "Lista de nombres:" << endl;
    for (const string& nombre : nombres) {
        cout << nombre << endl;
    }

    vector<map<string, int>> personas;

    map<string, int> a = {{"Ana", 28}};
    map<string, int> b = {{"Pablo", 35}};
    map<string, int> c = {{"Luis", 38}};

    personas.push_back(a);
    personas.push_back(b);
    personas.push_back(c);

    cout << "\nLista de personas:" << endl;
    for (const auto& persona : personas) {
        for (const auto& p : persona) {
            cout << "Nombre: " << p.first << ", Edad: " << p.second << endl;
        }
    }

    vector<string> lista_nombres;
    for (const auto& persona : personas) {
        for (const auto& p : persona) {
            lista_nombres.push_back(p.first);
        }
    }

    cout << "\nLista de nombres extraída:" << endl;
    for (const string& nombre : lista_nombres) {
        cout << nombre << endl;
    }

    vector<int> numeros = {1, 2, 3, 4, 5};

    for (size_t i = 0; i < numeros.size(); i++) {
        numeros[i] += 3;
    }

    cout << "\nLista de números modificados:" << endl;
    for (int numero : numeros) {
        cout << numero << " ";
    }
    cout << endl;

    return 0;
}
