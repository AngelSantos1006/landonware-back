import { ApiProperty } from "@nestjs/swagger";

export const message200 = 'Operación realizada correctamente';
export const message400 = 'Petición incorrecta';
export const message401 = 'No autorizado';
export const message403 = 'No cuentas con los privilegios suficientes';
export const message404 = 'No se encontró recurso';
export const message409 = 'Registro duplicado en la base de datos';
export const message500 = 'Error interno de servidor';
export const message503 = 'Servicio no disponible';

export class Status200 {
    @ApiProperty({ type: Object, example: { code: 200, meesage: message200 } })
    headerResponse: object

    @ApiProperty({ type: Object })
    payload: object
}

export class Status400 {
    @ApiProperty({ type: Object, example: { code: 400, meesage: message400 } })
    headerResponse: object

    @ApiProperty({
        type: Object, example: {
            "items": [
                "property xxx should not exist"
            ]
        }
    })
    payload: object
}

export class Status401 {
    @ApiProperty({ type: Object, example: { code: 401, meesage: message401 } })
    headerResponse: object

    @ApiProperty({ type: Object })
    payload: object
}

export class Status403 {
    @ApiProperty({ type: Object, example: { code: 403, meesage: message403 } })
    headerResponse: object

    @ApiProperty({ type: Object })
    payload: object
}

export class Status404 {
    @ApiProperty({ type: Object, example: { code: 404, meesage: message404 } })
    headerResponse: object

    @ApiProperty({ type: Object })
    payload: object
}

export class Status409 {
    @ApiProperty({ type: Object, example: { code: 409, meesage: message409 } })
    headerResponse: object

    @ApiProperty({ type: Object })
    payload: object
}

export class Status500 {
    @ApiProperty({ type: Object, example: { code: 500, meesage: message500 } })
    headerResponse: object

    @ApiProperty({ type: Object })
    payload: object
}
