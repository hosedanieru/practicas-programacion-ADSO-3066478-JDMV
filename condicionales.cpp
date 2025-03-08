#include <iostream>
#include <string>

using namespace std;

int main() {
    int a = 2;
    
    if (a == 2) {
        cout << "a vale 2" << endl;
    } else {
        cout << "a es distinto de 2" << endl;
    }
    
    string nombre = "Ana";
    int edad = 28;
    string ciudad = "Colombia";

    if (nombre == "Ana" && edad == 28 && ciudad == "Colombia") {
        cout << "Su nombre es Ana, tiene 28 años y es de Colombia" << endl;
    } else if (nombre == "Ana" && edad != 28) {
        cout << "Su nombre es Ana y no tiene 28 años" << endl;
    } else if (nombre != "Ana" && edad == 28) {
        cout << "Su nombre no es Ana y tiene 28 años" << endl;
    } else {
        cout << "No se llama Ana ni tiene 28 años" << endl;
    }

    return 0;
}
