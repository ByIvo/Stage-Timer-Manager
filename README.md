#  Stage Timer Manager

> Stage timer manager to rule staged events like business round and anyothers else. 

### Requisitos

> node  ^0.10.29

> bower  ^1.3.12

## Setup de desenvolvimento

### Instalar dependências

```shell
sudo npm install
```

### Em caso de falha na execução do bower, executar:

```shell
bower install
```

### Watch para mudanças
```shell
grunt watch
```

### Gerar distribuição
```shell
grunt dist
```

## Rodando o projeto

> Para testar localmente, você precisará de um servidor web. 

> Instale o simple-http-server do node, facilmente instalado executando:

```shell
sudo npm install http-server
```

> Depois de instalado, basta executar o comando na pasta que deseja servir:

```shell
http-server -p [porta]
```