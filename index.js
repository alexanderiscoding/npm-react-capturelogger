import { getUserAgent, getVersion } from 'react-native-device-info';
const { CaptureLogger } = require('../../package.json');

function send(action, text, userAgent) {
  fetch('https://cl.alexanderiscoding.com/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'User-Agent': userAgent,
      'serviceid': CaptureLogger.id,
      'token': CaptureLogger.token
    },
    body: JSON.stringify({
      action: action,
      text: text,
      source: CaptureLogger.source,
      version: getVersion()
    })
  }).then(
    (response) => console.log(response.status == 200 ? 'CaptureLogger: send ' + action : 'CaptureLogger: not send ' + action + ' - status code: ' + response.status)
  ).catch(
    (error) => console.log('CaptureLogger: Ocorred error in ' + action + ': ' + error)
  );
}

function registerLogger(action, input, output) {
  if (CaptureLogger) {
    if (String(CaptureLogger.id) && String(CaptureLogger.token) && String(CaptureLogger.source)) {
      if (typeof CaptureLogger.ignore == 'object') {
        if (CaptureLogger.ignore.includes(action)) {
          return;
        }
      }
      getUserAgent().then((userAgent) => {
        send(action, { 'input': input, 'output': output }, userAgent);
      });
    } else {
      console.log("CaptureLogger.id and/or CaptureLogger.token and/or CaptureLogger.source not defined in package.json");
    }
  } else {
    console.log({ "action": action, "input": input, "output": output });
  }
}

export { registerLogger };