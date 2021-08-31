#!/usr/bin/env bash


curl -i --digest -u "${HIK_USER}:${HIK_PASS}" -X PUT -d "<RemoteControlDoor><cmd>open</cmd></RemoteControlDoor>" "http://${HIK_IP}/ISAPI/AccessControl/RemoteControl/door/1"
