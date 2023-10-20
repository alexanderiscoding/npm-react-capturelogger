# CaptureLogger for React Native

Trata-se de um package construído para utilizar a API no desenvolvimento de aplicativos React Native.

Com ele, é possível integrar facilmente o serviço em projetos React Native, economizando tempo e garantindo que os dados sejam enviados de maneira rápida e eficiente.

- Execute: `npm i react-native-device-info react-native-capturelogger`

- Ative o serviço gratuitamente em [Alexanderiscoding](https://alexanderiscoding.com) > Conectar-me > Perfil > Serviços

## Configurando o package

Adicione em seu package.json as definições necessárias

- `CaptureLogger`: Object | Se existir enviará os logs para a API | Se não existir precisará passar todas as informações necessarias
- `debug`: Boolean (Opcional) | Os logs serão mostrados no console.
- `serviceID`: String | Preencha com o serviceID do CaptureLogger
- `accessToken`: String | Preencha com o accessToken do CaptureLogger
- `source`: String | Preencha com uma identificação para saber a origem do log
- `ignore`: Object (Opcional) | Preencha com o/os `action` a ser ignorado ao enviar
- `SenderMessage`: Number (Opcional) | `1` Telegram - `2` Discord - `3` Slack - `4` Google Chat - Para definir um serviço de mensagem especifica com o SenderMessage

Exemplo de um package.json

```json
{
  "name": "react-app",
  "version": "1.0",
  "private": true,
  "CaptureLogger": {
    "serviceID": "d5d07efd-c652-4fc6-a6d2-0c098399fa7d",
    "accessToken": "a1043d2d4f3805fd912eb38693492336d88d362c591c545e585f4f8057d44eee",
    "source": "React Native App",
    "ignore": ["autorizeUser", "CheckVersion"]
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
