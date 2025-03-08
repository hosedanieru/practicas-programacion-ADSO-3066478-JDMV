import java.util.Scanner;

public class LeyDeOhm {

    public static void main(String[] args) {
        // Crear un objeto Scanner para leer la entrada del usuario
        Scanner scanner = new Scanner(System.in);

        // Pedir al usuario que ingrese el valor del voltaje y la resistencia
        System.out.print("Ingrese el valor del voltaje del circuito (en voltios): ");
        int v = scanner.nextInt();

        System.out.print("Ingrese el valor de la resistencia del circuito (en ohmios): ");
        int r = scanner.nextInt();

        // Calcular la corriente utilizando la ley de Ohm: I = V / R
        double i = (double) v / r;

        // Mostrar el resultado
        System.out.println("Al conectar un resistor R" + r + " ohmios a una fuente de V" + v + " voltios, " +
                "circulará una corriente de " + i + " Amperios.");
        
        // Cerrar el scanner
        scanner.close();
    }
}
