const Empresas = [
    {
        nome: "Rocketseat",
        cor: "Roxa",
        foco:"Programação",
        endereço:{ rua:  "Guilherme Gambala",
                   numero: "260"
                 } 
    }
]

        console.log(`A Empresa ${Empresas[0].nome}está localizada em ${Empresas[0].endereço.rua}, ${Empresas[0].endereço.numero}`);
        


        const programador = 
            {
                nome: 'Bruno',
                idade: '25',
                tecnologias:[

                            {nome: 'C++', especialidade:' Desktop'},
                            {nome: 'JavaScript', especialidade:'Web/Mobile'}        
                           ]
                   
            }
        
                console.log(`O Progamador ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)

                