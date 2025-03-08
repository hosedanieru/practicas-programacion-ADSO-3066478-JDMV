import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        // Crear una lista (ArrayList en Java)
        ArrayList<Integer> a = new ArrayList<>();
        a.add(1);
        a.add(2);
        a.add(3);
        a.add(4);
        
        // Mostrar la tupla original
        System.out.println("Tupla original: " + a);

        // Primer elemento
        System.out.println("Primer elemento: " + a.get(0));

        // Subsección (sublista)
        System.out.println("Subsección: " + a.subList(0, 2));

        // Tamaño de la tupla
        System.out.println("Tamaño de la tupla: " + a.size());

        // Verificar si un número está en la tupla
        System.out.println("¿El número 5 está en la tupla? " + a.contains(5));
        System.out.println("¿El número 1 está en la tupla? " + a.contains(1));

        // Convertir la tupla a una lista (aunque ya es una lista en Java)
        ArrayList<Integer> lista = new ArrayList<>(a);
        System.out.println("Convertido a lista: " + lista);

        // Agregar un elemento a la lista
        lista.add(5);
        System.out.println("Lista con nuevo elemento: " + lista);
    }
}
