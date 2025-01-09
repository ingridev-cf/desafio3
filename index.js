class heroClass{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo    
    }
    atacar(){
        switch (this.tipo){
            case "guerreiro":
                console.log(`O ${this.tipo} atacou usando espada!`)
            break
            case "mago":
                console.log(`O ${this.tipo} atacou usando magia!`)
            break 
            case "monge":
                console.log(`O ${this.tipo} atacou usando artes marciais!`) 
            break
            case "ninja":  
                console.log(`O ${this.tipo} atacou usando shuriken!`)
            break
        }
    }
}
let heroGuerreiro = new heroClass ("Ryu", "25", "guerreiro")
let heroMago = new heroClass ("Merlin", "65", "mago")
let heroMonge = new heroClass ("Buda", "123", "monge")
let heroNinja = new heroClass ("Kenshin", "21", "ninja")

heroGuerreiro.atacar()
heroMago.atacar()
heroMonge.atacar()
heroNinja.atacar()

