import { leerTeclado } from '../view/entradaTeclado'

export const menuPral = async () => {
    let n: number
    console.log('\n')
    console.log('1.- area')
    console.log('2.- perimetro')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}