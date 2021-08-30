#!/usr/bin/env bash

curl -i --digest -u "${HIK_USER}:${HIK_PASS}" -X PUT -d "<RemoteControlDoor><cmd>open</cmd></RemoteControlDoor>" 192.168.1.65/ISAPI/AccessControl/RemoteControl/door/1
