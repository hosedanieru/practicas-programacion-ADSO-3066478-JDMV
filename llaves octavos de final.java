import java.util.*;

public class TorneoFutbol {

    // Clase para representar los partidos y sus resultados
    static class Partido {
        String equipo1;
        String equipo2;
        int golesEquipo1;
        int golesEquipo2;
        String ganador;

        Partido(String equipo1, String equipo2) {
            this.equipo1 = equipo1;
            this.equipo2 = equipo2;
        }

        // Métodos para introducir los resultados y determinar al ganador
        public void introducirResultado(Scanner scanner) {
            while (true) {
                try {
                    System.out.print("Ingresa los goles de " + equipo1 + ": ");
                    golesEquipo1 = Integer.parseInt(scanner.nextLine());
                    System.out.print("Ingresa los goles de " + equipo2 + ": ");
                    golesEquipo2 = Integer.parseInt(scanner.nextLine());

                    if (golesEquipo1 == golesEquipo2) {
                        System.out.println("Error: No se permiten empates. Intenta de nuevo.");
                    } else {
                        ganador = (golesEquipo1 > golesEquipo2) ? equipo1 : equipo2;
                        break;
                    }
                } catch (NumberFormatException e) {
                    System.out.println("Error: Ingresa un número válido de goles.");
                }
            }
        }

        @Override
        public String toString() {
            return equipo1 + " " + golesEquipo1 + " - " + golesEquipo2 + " " + equipo2;
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Equipos participantes
        Map<String, Integer> equipos = new HashMap<>();
        equipos.put("Países Bajos", 0);
        equipos.put("Estados Unidos", 0);
        equipos.put("Argentina", 0);
        equipos.put("Australia", 0);
        equipos.put("Japón", 0);
        equipos.put("Croacia", 0);
        equipos.put("Brasil", 0);
        equipos.put("Corea del Sur", 0);
        equipos.put("Inglaterra", 0);
        equipos.put("Senegal", 0);
        equipos.put("Francia", 0);
        equipos.put("Polonia", 0);
        equipos.put("Marruecos", 0);
        equipos.put("España", 0);
        equipos.put("Portugal", 0);
        equipos.put("Suiza", 0);

        // Generar llaves del torneo
        List<String> equiposList = new ArrayList<>(equipos.keySet());
        Collections.shuffle(equiposList);

        // Rondas del torneo
        Map<String, List<Partido>> llaves = new HashMap<>();
        llaves.put("Octavos de final", new ArrayList<>());
        llaves.put("Cuartos de final", new ArrayList<>());
        llaves.put("Semifinales", new ArrayList<>());
        llaves.put("Final", new ArrayList<>());
        llaves.put("Tercer lugar", new ArrayList<>());

        List<String> ganadoresOctavos = jugarRonda("Octavos de final", equiposList, llaves, scanner);
        List<String> ganadoresCuartos = jugarRonda("Cuartos de final", ganadoresOctavos, llaves, scanner);
        List<String> ganadoresSemifinales = jugarRonda("Semifinales", ganadoresCuartos, llaves, scanner);

        // Final
        Partido finalPartido = new Partido(ganadoresSemifinales.get(0), ganadoresSemifinales.get(1));
        System.out.println("\nFinal: " + finalPartido.equipo1 + " vs " + finalPartido.equipo2);
        finalPartido.introducirResultado(scanner);
        llaves.get("Final").add(finalPartido);

        // Tercer lugar
        String perdedorSemifinal1 = finalPartido.ganador.equals(finalPartido.equipo1) ? finalPartido.equipo2 : finalPartido.equipo1;
        String perdedorSemifinal2 = ganadoresCuartos.get(2).equals(ganadoresSemifinales.get(0)) ? ganadoresCuartos.get(3) : ganadoresCuartos.get(2);
        Partido tercerLugarPartido = new Partido(perdedorSemifinal1, perdedorSemifinal2);
        System.out.println("\nTercer lugar: " + tercerLugarPartido.equipo1 + " vs " + tercerLugarPartido.equipo2);
        tercerLugarPartido.introducirResultado(scanner);
        llaves.get("Tercer lugar").add(tercerLugarPartido);

        // Imprimir resumen
        System.out.println("\nResumen del torneo:");
        for (Map.Entry<String, List<Partido>> entry : llaves.entrySet()) {
            System.out.println("\n" + entry.getKey() + ":");
            for (Partido partido : entry.getValue()) {
                System.out.println("  " + partido);
                System.out.println("    Ganador: " + partido.ganador);
            }
        }

        System.out.println("\nResultados finales:");
        System.out.println("Campeón: " + finalPartido.ganador);
        System.out.println("Subcampeón: " + (finalPartido.ganador.equals(finalPartido.equipo1) ? finalPartido.equipo2 : finalPartido.equipo1));
        System.out.println("Tercer lugar: " + tercerLugarPartido.ganador);
    }

    // Método para jugar una ronda
    public static List<String> jugarRonda(String ronda, List<String> equipos, Map<String, List<Partido>> llaves, Scanner scanner) {
        List<String> ganadores = new ArrayList<>();
        System.out.println("\n" + ronda + ":");
        for (int i = 0; i < equipos.size(); i += 2) {
            Partido partido = new Partido(equipos.get(i), equipos.get(i + 1));
            System.out.println(ronda + " - Partido " + (i / 2 + 1) + ": " + partido.equipo1 + " vs " + partido.equipo2);
      
