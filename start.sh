#!/usr/bin/env bash

ngrok http "https://localhost:${INTERCOM_PORT}" &
node app.js
