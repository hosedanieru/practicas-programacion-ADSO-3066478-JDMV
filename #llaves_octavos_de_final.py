#llaves_octavos_de_final
import random

# Lista de partidos 
partidos = [("Paises Bajos", "Corea del Sur"), ("Senegal", "Portugal"), ("Inglaterra", "Suiza"), 
            ("USA", "Brazil"), ("Argentina", "Croacia"), ("Polonia", "Marruecos"), 
            ("Francia", "España"), ("Australia", "Japon")]

# Diccionario para almacenar los resultados
resultados = {}

# Lista para almacenar los equipos que pasan a la siguiente ronda
equipos_pasan = []

# Iterar sobre cada partido
for partido in range(len(partidos)):
    equipo1, equipo2 = partidos[partido]  # Desempaquetar los equipos
    resultado = random.choice([0, 1, 2])  # Generar un resultado aleatorio
    
    # Almacenar el resultado en el diccionario
    resultados[partido] = resultado

    # Imprimir el resultado del partido
    if resultado == 2:
        print(f"{equipo1} gana contra {equipo2}")
        equipos_pasan.append(equipo1)  # El equipo1 pasa a la siguiente ronda
    elif resultado == 1:
        print(f"Empate entre {equipo1} y {equipo2}")
        # En este caso, no se agrega ningún equipo a la siguiente ronda
    else:
        print(f"{equipo1} pierde contra {equipo2}")
        equipos_pasan.append(equipo2)  # El equipo2 pasa a la siguiente ronda

# Imprimir todos los resultados
print("\nResultados finales:", resultados)

# Imprimir los equipos que pasan a la siguiente ronda
print("\nEquipos que pasan a la siguiente ronda:")
for equipo in equipos_pasan:
    print(equipo)