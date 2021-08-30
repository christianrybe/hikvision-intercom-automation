# Overview

This repository provides a simple Express.JS server exposing a REST endpoint
to facilitate automation using HikVision REST API. Specifically it allows to remotely unlock the gate using the IP intercom.

# Getting started

To run the server make sure you include your `cert.pem` and `key.pem` files.
You can generate them yourself for your pet projects: https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/

Make sure you also set up these env vars:
* For basic auth of your endpoint:
    * `INTERCOM_USER`
    * `INTERCOM_PASS`
* For auth to your HikVision intercom
    * `HIK_USER` 
    * `HIK_PASS` 
  
## Running

Execute `./start.sh`
