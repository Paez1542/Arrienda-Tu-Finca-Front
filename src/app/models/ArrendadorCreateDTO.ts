export class ArrendadorCreateDTO {
    constructor(
        public nombre: string = "",
        public apellido: string = "",
        public contrasena: string = "",
        public telefono: string = "",
        public email: string = ""
    ) {}
}