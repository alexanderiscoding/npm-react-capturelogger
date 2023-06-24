import { getUserAgent, getVersion } from 'react-native-device-info';
const { CaptureLogger, CaptureLoggerIdentify, CaptureLoggerToken, CaptureLoggerSource, CaptureLoggerIgnore } = require('../../package.json');

function send(action, text, userAgent) {
  fetch('https://cl.alexanderiscoding.com/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'User-Agent': userAgent,
      'identify': CaptureLoggerIdentify,
      'token': CaptureLoggerToken
    },
    body: JSON.stringify({
      action: action,
      text: text,
      source: CaptureLoggerSource,
      version: getVersion()
    })
  }).then(
    (response) => console.log(response.status == 200 ? 'CaptureLogger: send ' + action : 'CaptureLogger: not send ' + action + ' - status code: ' + response.status)
  ).catch(
    (error) => console.log('CaptureLogger: Ocorred error in ' + action + ': ' + error)
  );
}

function registerLogger(type, action, input, output) {
  if (CaptureLogger === true) {
    if (Number(CaptureLoggerIdentify) && String(CaptureLoggerToken) && String(CaptureLoggerSource)) {
      if (typeof CaptureLoggerIgnore == 'object') {
        if (CaptureLoggerIgnore.includes(type)) {
          return;
        }
      }
      getUserAgent().then((userAgent) => {
        send(action, { 'input': input, 'output': output }, userAgent);
      });
    } else {
      console.log("CaptureLoggerIdentify and/or CaptureLoggerToken and/or CaptureLoggerSource not defined in package.json");
    }
  } else {
    console.log({ "action": action, "input": input, "output": output });
  }
}

export { registerLogger };