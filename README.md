# Overview

This repository provides a simple Express.JS server exposing a REST endpoint
to facilitate automation using HikVision REST API. Specifically it allows to remotely unlock the gate using the IP intercom.

You can run the server on e.g. a Raspberry PI connected to your home WiFi network
which has local access to your HikVision devices. The server will expose a REST endpoint
through an ngrok tunnel with authentication via SSL. It subsequently allows you to easily
create e.g. an appropriate shortcut on your smartphone to open the gate when you arrive home.

# Getting started

1. To run the server make sure you include your `cert.pem` and `key.pem` files.
You can generate them yourself for your pet projects: https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/

2. Set up ngrok and configure the device which is running the server with `authtoken`: https://dashboard.ngrok.com/get-started/your-authtoken

3. Make sure you also set up these env vars:
* For basic auth of your endpoint:
    * `INTERCOM_USER` - username for the exposed REST endpoint
    * `INTERCOM_PASS` - password for the exposed REST endpoint
    * `INTERCOM_PORT` - port which the server should run under
* For auth to your HikVision intercom
    * `HIK_USER` - username to login to your HikVision device (usually `admin`)
    * `HIK_PASS` - password to login to your HikVision device (which you set up in your browser management dashbort or in iVMS4200)
    * `HIK_IP` - local IP address of your HikVision device (e.g. `192.168.100.10`)
  
## Running

Execute `./start.sh`

The command will show you your random ngrok URL which you can use to send requests, e.g:

```shell
ngrok by @inconshreveable

Tunnel Status                 online
Version                       2.0/2.0
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://92832de0.ngrok.io -> localhost:80
Forwarding                    https://92832de0.ngrok.io -> localhost:80

Connnections                  ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```

Use the HTTPS `Forwarding` URL.
