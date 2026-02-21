// ASCII Art para el splash screen de la terminal
export const ASCII_ART = `

.                          @@=             
              -% .. . ..:@@@%@=     .::..   
.       %..   ..... ..=%%%%%@:.      :*@%   
      -@@@* -..-@-: -%%%%%%%@.:- -:   *@@   
     #%%@:. ....@%*=%%%%%%%%=... @=..  .*   
    @%%#@:   -+@%%%%%#%@%%%%%@@@@@=         
    @%%#@=: -.=@%%%%#@@@%##%#%%%%@=.- :-    
    :-+%%+-.:.=@%%##%%%%####%%##%@=.: ::    
          .- -+@%%###%######%%##%@+-   :@   
    :..:.::.::=@%%##@%%##**#####%@=.: -+@:. 
    -..-.::.-%%%%##*@@#*##**#@%#%@=.-%%%@-. 
    @:..-..-@%%%%#*+@##**#**#@@@%@+-@%%%@   
 .. @%%%%%%%%%%##***%****####+#@%%%%%#%%@:. 
 :: -%%%%##%%########******#++*##%%%#%%%@-. 
    .#%%%%%#########****+***+*#######%%%    
    ..-@%%%%#%%%+**##***+++**##**####%%% .. 
    -..-@%%%%#%@#***#****++*##***###%%%% -. 
    .... *%%%%%#%@#*#*++********@###%@=.    
     #@@    @%%######***+++***#@@%%%@..     
    . .-@@@@%#########*******#%%###%%@=     
         +#%%%%##%%@%%%#**#######%%%+.      
             %@@@%%%@#######%%%@@@=         
            -..- %%%%%%###%%%%+-  .         
                    =:+@@:::                
`;

export const USER_INFO = [
  { label: "Usuario", value: "ivan" },
  { label: "Hostname", value: "portfolio" },
  { label: "OS", value: "AndOS 1.0" },
  { label: "Shell", value: "ivsh" },
  { label: "", value: "" },
  { label: "Nombre", value: "Iván Duarte Herrera" },
  { label: "Rol", value: "Full Stack Developer & DevOps" },
  { label: "Especialidad", value: "Web - DevOps - Cloud" },
  { label: "", value: "" },
  { label: "Skills Frontend", value: "React, TypeScript, Tailwind" },
  { label: "Skills Backend", value: "Node.js, Python, Docker" },
  { label: "", value: "" },

  { label: "", value: "" },
  { label: "Comandos", value: "help, ls, cd, cat, pwd, clear" },
];

/**
 * Genera el splash screen inicial tipo fastfetch/neofetch
 */
export const generateSplashScreen = (): string => {
  const asciiLines = ASCII_ART.trim().split("\n");
  const infoLines = USER_INFO.map((item) => {
    if (!item.label) return "";
    return `${item.label}: ${item.value}`;
  });

  // Encontrar el ancho máximo del ASCII art
  const maxAsciiWidth = Math.max(...asciiLines.map((line) => line.length));

  // Combinar ASCII art con info
  const combinedLines: string[] = [];
  const maxLines = Math.max(asciiLines.length, infoLines.length);

  for (let i = 0; i < maxLines; i++) {
    const asciiLine = asciiLines[i] || "";
    const infoLine = infoLines[i] || "";

    // Padding para alinear info a la derecha del ASCII
    const padding = " ".repeat(
      Math.max(0, maxAsciiWidth - asciiLine.length + 4),
    );

    combinedLines.push(asciiLine + padding + infoLine);
  }

  return combinedLines.join("\n");
};
