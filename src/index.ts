import { menuPral } from './view/menuPral'
import { leerTeclado } from './view/entradaTeclado'
const main = async () => {
    let l: number
    do {
        l = await menuPral()
        switch(l){
            case 1:
                console.log("Estoy en opción 1")
                await area()
                break
            case 2:
                console.log("Estoy en opción 2")
                let l1: number
                let l2: number
                l1 =  parseInt( await leerTeclado('Introduce el tamaño (en cm) de un lado del paralelogramo')) 
                l2 =  parseInt( await leerTeclado('Introduce el tamaño (en cm) del otro lado del paralelogramo'))
                console.log(`El resultado del perimetro del paralelogramo es: ${perimetro(l1, l2)} cm`)
                break
            case 0:
                console.log('\nAdios')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (l != 0)
}
const area = async () => {
    let l1: number
    let l2: number
    l1 =  parseInt( await leerTeclado('Introduce el tamaño (en cm) de un lado del paralelogramo')) 
    l2 =  parseInt( await leerTeclado('Introduce  el tamaño (en cm) del otro lado del paralelogramo'))
    console.log(`El area del polígono es ${l1 * l2} cm2 (centimetros cuadrados)`)
}

const perimetro = (l1: number, l2: number): number => (2 * l1) + (2 * l2)
main()