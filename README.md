# Getting started

To run the server make sure you include your `cert.pem` and `key.pem` files.
You can generate them yourself for your pet projects: https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/

Make sure you also incldue these env vars:
* For basic auth of your endpoint:
    * `INTERCOM_USER`
    * `INTERCOM_PASS`
* For auth to your HikVision intercom
    * `HIK_USER` 
    * `HIK_PASS` 
