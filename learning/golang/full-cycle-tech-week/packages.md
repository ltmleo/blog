# Packages

## Context
O pacote context em Golang serve para gerenciar o ciclo de vida de operações, especialmente em ambientes concorrentes. Ele permite:

- **Cancelamento controlado**: Propagar sinais de cancelamento através de várias goroutines
- **Deadlines**: Definir limites de tempo para operações
- **Valores com escopo**: Transmitir dados específicos entre funções sem parâmetros explícitos
- **Controle de recursos**: Evitar vazamentos de recursos ao garantir que operações sejam finalizadas adequadamente

### Refs

- https://pkg.go.dev/context
- https://aprendagolang.com.br/o-que-e-e-como-utilizar-o-package-context/

## Sync

O pacote sync fornece primitivas de sincronização para coordenar a execução concorrente:

- **Mutex/RWMutex**: Garantir acesso exclusivo a recursos compartilhados
- **WaitGroup**: Esperar que múltiplas goroutines completem seu trabalho
- **Once**: Garantir que uma função seja executada apenas uma vez
- **Cond**: Implementar variáveis de condição para sincronização avançada
- **Pool**: Gerenciar pools de objetos reutilizáveis para reduzir a pressão no GC
- **Map**: Fornecer um mapa thread-safe sem necessidade de bloqueios explícitos

## Refs

- https://pkg.go.dev/sync
- https://medium.com/@asgrr/golang-sync-4787b18fee41