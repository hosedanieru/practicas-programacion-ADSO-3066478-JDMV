import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // Crear un HashMap para simular un diccionario
        HashMap<String, String> coche = new HashMap<>();

        // Agregar valores al "diccionario"
        coche.put("marca", "ford");
        coche.put("color", "rojo");
        coche.put("modelo", "sedan");
        coche.put("placa", "LLW019");

        // Acceder a un valor usando una clave
        System.out.println("Placa del coche: " + coche.get("placa")); // LLW019

        // Cambiar el valor de una clave
        coche.put("modelo", "cupe");
        System.out.println("Modelo del coche: " + coche.get("modelo")); // cupe

        // Acceder a otro valor
        System.out.println("Color del coche: " + coche.get("color")); // rojo

        // Cambiar el valor de otra clave
        coche.put("color", "amarillo");
        System.out.println("Nuevo color del coche: " + coche.get("color")); // amarillo

        // Imprimir todo el objeto
        System.out.println("Información completa del coche: " + coche);
    }
}
