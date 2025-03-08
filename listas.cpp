#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> numeros = {10, 20, 30, 40, 50};

    numeros.push_back(60);

    cout << "Lista de números: ";
    for (int num : numeros) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}
