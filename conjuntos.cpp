#include <iostream>
#include <set>

using namespace std;

int main() {
    set<int> a = {1, 2, 3, 4};

    cout << "Conjunto inicial: ";
    for (int num : a) {
        cout << num << " ";
    }
    cout << endl;

    cout << "Tamaño del conjunto: " << a.size() << endl;

    a.insert(8);

    a.erase(2);

    cout << "Conjunto modificado: ";
    for (int num : a) {
        cout << num << " ";
    }
    cout << endl;

    cout << "¿El número 5 está en el conjunto? " << (a.count(5) ? "Sí" : "No") << endl;
    cout << "¿El número 1 está en el conjunto? " << (a.count(1) ? "Sí" : "No") << endl;

    return 0;
}
