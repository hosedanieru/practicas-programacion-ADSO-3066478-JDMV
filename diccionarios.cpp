#include <iostream>
#include <map>

using namespace std;

int main() {
    map<string, string> coche = {
        {"marca", "ford"},
        {"color", "rojo"},
        {"modelo", "sedan"},
        {"placa", "LLW019"}
    };

    cout << "Color inicial: " << coche["color"] << endl;

    coche["color"] = "amarillo";
    cout << "Color modificado: " << coche["color"] << endl;

    cout << "\nInformación del coche:" << endl;
    for (const auto& par : coche) {
        cout << par.first << ": " << par.second << endl;
    }

    return 0;
}
