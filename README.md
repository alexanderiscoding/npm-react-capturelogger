# CaptureLogger for React Native

Um complemento para reportar logs em seus projetos React Native.

- Execute `npm i react-native-capturelogger` para instalar o package
- Execute `npm i react-native-device-info` para instalar a dependência do package

## Configurando o package

Adicione em seu package.json as definições necessárias

- `CaptureLogger`: Object | Se existir enviará os logs para a API | Se não existir mostra os logs no console
- `id`: String | Preencha com o serviceID
- `token`: String | Preencha com o token de inserção do CaptureLogger
- `source`: String | Preencha com uma identificação para saber a origem do log
- `ignore`: Object (Opcional) | Preencha com o/os `action` a ser ignorado ao enviar
- `SenderMessage`: Number (Opcional) | `1` Telegram - `2` Discord - `3` Slack - `4` Google Chat - Para definir um serviço de mensagem especifica com o [SenderMessage](https://docs.alexanderiscoding.com/package/sendermessage)

Exemplo de um package.json

```json
{
  "name": "builder",
  "version": "1.0",
  "private": true,
  "CaptureLogger": {
    "id": "-R_kygYubudf89d",
    "token": "2854d46s4sdfsdfs6fds6fds6f6",
    "source": "React Native App",
    "ignore": ["autorizeUser", "CheckVersion"],
    "SenderMessage": 1
  },
  "scripts": {
    "android": "react-native run-android"
  }
}
```

## Método de uso

Importe o package na sua aplicação

`import captureLogger from 'react-native-capturelogger';`

`const captureLogger = require('react-native-capturelogger');`

Registre os logs de evento

`captureLogger(action, log);`

> é possivel alterar o nome da function de acordo com o seu gosto.

- `action`: String | Nome do código de referência
- `log`: Any | Erro do código de referência
