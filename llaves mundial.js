function generarLlaves(equipos) {
    if (Object.keys(equipos).length !== 16) {
        throw new Error("Debe haber exactamente 16 equipos para octavos de final.");
    }

    const llaves = {
        "Octavos de final": {},
        "Cuartos de final": {},
        "Semifinales": {},
        "Final": {},
        "Tercer lugar": {}
    };

    function introducirResultado(equipo1, equipo2) {
        while (true) {
            try {
                const golesEquipo1 = parseInt(prompt(`Ingresa los goles de ${equipo1}:`));
                const golesEquipo2 = parseInt(prompt(`Ingresa los goles de ${equipo2}:`));
                if (isNaN(golesEquipo1) || isNaN(golesEquipo2)) {
                    throw new Error("Ingresa un número válido de goles.");
                }
                if (golesEquipo1 === golesEquipo2) {
                    alert("Error: No se permiten empates. Intenta de nuevo.");
                } else {
                    const ganador = golesEquipo1 > golesEquipo2 ? equipo1 : equipo2;
                    return { golesEquipo1, golesEquipo2, ganador };
                }
            } catch (error) {
                alert(error.message);
            }
        }
    }
    
    const equiposList = Object.keys(equipos);
    for (let i = equiposList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [equiposList[i], equiposList[j]] = [equiposList[j], equiposList[i]];
    }

    const ganadoresOctavos = [];
    for (let i = 0; i < 8; i++) {
        const partido = `Partido ${i + 1}`;
        const equipo1 = equiposList[i * 2];
        const equipo2 = equiposList[i * 2 + 1];
        alert(`\nOctavos de final - ${partido}: ${equipo1} vs ${equipo2}`);
        const { golesEquipo1, golesEquipo2, ganador } = introducirResultado(equipo1, equipo2);
        llaves["Octavos de final"][partido] = {
            "Equipo 1": equipo1,
            "Goles Equipo 1": golesEquipo1,
            "Equipo 2": equipo2,
            "Goles Equipo 2": golesEquipo2,
            "Ganador": ganador
        };
        ganadoresOctavos.push(ganador);
    }

    const ganadoresCuartos = [];
    for (let i = 0; i < 4; i++) {
        const partido = `Partido ${i + 1}`;
        const equipo1 = ganadoresOctavos[i * 2];
        const equipo2 = ganadoresOctavos[i * 2 + 1];
        alert(`\nCuartos de final - ${partido}: ${equipo1} vs ${equipo2}`);
        const { golesEquipo1, golesEquipo2, ganador } = introducirResultado(equipo1, equipo2);
        llaves["Cuartos de final"][partido] = {
            "Equipo 1": equipo1,
            "Goles Equipo 1": golesEquipo1,
            "Equipo 2": equipo2,
            "Goles Equipo 2": golesEquipo2,
            "Ganador": ganador
        };
        ganadoresCuartos.push(ganador);
    }

    const ganadoresSemifinales = [];
    for (let i = 0; i < 2; i++) {
        const partido = `Partido ${i + 1}`;
        const equipo1 = ganadoresCuartos[i * 2];
        const equipo2 = ganadoresCuartos[i * 2 + 1];
        alert(`\nSemifinales - ${partido}: ${equipo1} vs ${equipo2}`);
        const { golesEquipo1, golesEquipo2, ganador } = introducirResultado(equipo1, equipo2);
        llaves["Semifinales"][partido] = {
            "Equipo 1": equipo1,
            "Goles Equipo 1": golesEquipo1,
            "Equipo 2": equipo2,
            "Goles Equipo 2": golesEquipo2,
            "Ganador": ganador
        };
        ganadoresSemifinales.push(ganador);
    }

    const equipo1 = ganadoresSemifinales[0];
    const equipo2 = ganadoresSemifinales[1];
    alert(`\nFinal: ${equipo1} vs ${equipo2}`);
    const { golesEquipo1, golesEquipo2, ganador: campeon } = introducirResultado(equipo1, equipo2);
    const subcampeon = campeon === equipo1 ? equipo2 : equipo1;
    llaves["Final"]["Partido 1"] = {
        "Equipo 1": equipo1,
        "Goles Equipo 1": golesEquipo1,
        "Equipo 2": equipo2,
        "Goles Equipo 2": golesEquipo2,
        "Ganador": campeon
    };

    const perdedorSemifinal1 = campeon === equipo1 ? equipo2 : equipo1;
    const perdedorSemifinal2 = ganadoresCuartos[2] === perdedorSemifinal1 ? ganadoresCuartos[3] : ganadoresCuartos[2];
    alert(`\nTercer lugar: ${perdedorSemifinal1} vs ${perdedorSemifinal2}`);
    const { golesEquipo1: golesTercero1, golesEquipo2: golesTercero2, ganador: tercerLugar } = introducirResultado(perdedorSemifinal1, perdedorSemifinal2);
    llaves["Tercer lugar"]["Partido 1"] = {
        "Equipo 1": perdedorSemifinal1,
        "Goles Equipo 1": golesTercero1,
        "Equipo 2": perdedorSemifinal2,
        "Goles Equipo 2": golesTercero2,
        "Ganador": tercerLugar
    };

    return { llaves, campeon, subcampeon, tercerLugar };
}


const equipos = {
    "Países Bajos": 0,
    "Estados Unidos": 0,
    "Argentina": 0,
    "Australia": 0,
    "Japón": 0,
    "Croacia": 0,
    "Brasil": 0,
    "Corea del Sur": 0,
    "Inglaterra": 0,
    "Senegal": 0,
    "Francia": 0,
    "Polonia": 0,
    "Marruecos": 0,
    "España": 0,
    "Portugal": 0,
    "Suiza": 0
};

try {
    const { llaves, campeon, subcampeon, tercerLugar } = generarLlaves(equipos);

    console.log("\nResumen del torneo:");
    for (const [ronda, partidos] of Object.entries(llaves)) {
        console.log(`\n${ronda}:`);
        for (const [partido, resultado] of Object.entries(partidos)) {
            console.log(`  ${partido}:`);
            console.log(`    ${resultado["Equipo 1"]} ${resultado["Goles Equipo 1"]} - ${resultado["Goles Equipo 2"]} ${resultado["Equipo 2"]}`);
            console.log(`    Ganador: ${resultado["Ganador"]}`);
        }
    }

    console.log("\nResultados finales:");
    console.log(`Campeón: ${campeon}`);
    console.log(`Subcampeón: ${subcampeon}`);
    console.log(`Tercer lugar: ${tercerLugar}`);
} catch (error) {
    console.error(error.message);
}