import { IUser } from "../interfaces/user.interface";


export const UsersList: IUser[] = [
    {
        nome: "João Silva",
        email: "joao.silva@example.com",
        senha: "senha-segura-123",
        idade: 30,
        endereco: {
            rua: "Rua das Flores",
            numero: 42,
            cidade: "São Paulo",
            estado: "SP",
            pais: "Brasil"
        },
        telefone: "11912345678",
        ativo: true,
        funcao: "Desenvolvedor",
        dataCadastro: new Date("2025-06-01T09:00:00.000Z"),
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso:new Date("2025-06-02T09:00:00.000Z")
        }
    },
    {
        nome: "Maria Fernandes",
        email: "maria.fernandes@example.com",
        senha: "Maria123",
        idade: 25,
        endereco: {
            rua: "Avenida do Sol",
            numero: 100,
            cidade: "Rio de Janeiro",
            estado: "RJ",
            pais: "Brasil"
        },
        telefone: "21956789101",
        ativo: false,
        funcao: "Designer",
        dataCadastro: new Date("2025-06-05T09:00:00.000Z"),
        status: {
            online: false,
            verificado: false,
            assinaturaAtiva: false,
            ultimoAcesso:new Date("2025-06-06T09:00:00.000Z")
        }
    },
    {
        nome: "Carlos Pereira",
        email: "carlos.pereira@example.com",
        senha: "Carlos456",
        idade: 40,
        endereco: {
            rua: "Praça da Liberdade",
            numero: 5,
            cidade: "Belo Horizonte",
            estado: "MG",
            pais: "Brasil"
        },
        telefone: "31911121314",
        ativo: true,
        funcao: "Gerente",
        dataCadastro: new Date("2025-06-10T09:00:00.000Z"),
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso:new Date("2025-06-12T09:00:00.000Z")
        }
    },
    {
        nome: "Ana Sousa",
        email: "ana.sousa@example.com",
        senha: "Ana789",
        idade: 22,
        endereco: {
            rua: "Rua das Pedras",
            numero: 80,
            cidade: "Porto Alegre",
            estado: "RS",
            pais: "Brasil"
        },
        telefone: "51915161718",
        ativo: false,
        funcao: "Analista",
        dataCadastro: new Date("2025-06-15T09:00:00.000Z"),
        status: {
            online: true,
            verificado: false,
            assinaturaAtiva: true,
            ultimoAcesso:new Date("2025-06-18T09:00:00.000Z")
        }
    },
    {
        nome: "Pedro Mendes",
        email: "pedro.mendes@example.com",
        senha: "Pedro012",
        idade: 35,
        endereco: {
            rua: "Boulevard Central",
            numero: 60,
            cidade: "Recife",
            estado: "PE",
            pais: "Brasil"
        },
        telefone: "81919202122",
        ativo: true,
        funcao: "Diretor",
        dataCadastro: new Date("2025-06-20T09:00:00.000Z"),
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso:new Date("2025-06-25T09:00:00.000Z")
        }
    }
];
